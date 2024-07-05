"use client";

import { TcreateLoanParams } from "@/types";
import { createClient } from "../supabase/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
// import { createClient } from "../supabase/server";

export const createLoan = async (loanParams: TcreateLoanParams) => {
  const supabase = createClient();
  const lenderId = (await supabase.auth.getUser()).data.user?.id;
  const { data: lenderData, error: lenderNameError } = await supabase
    .from("allusers")
    .select("username")
    .eq("googleid", lenderId);
  const lenderName = await lenderData![0].username;
  const expiryDateToDb = new Date(loanParams.expiry_date);

  try {
    const { data: newLoanId, error: createLoanError } = await supabase
      .from("homefeed")
      .insert({
        lenderid: lenderId,
        lendername: lenderName,
        title: loanParams.title,
        purpose: loanParams.purpose,
        // date_posted: new Date().getDate(), CHECK IF AUTO INJECTED, CORRECT IF NOT
        expiry_date: expiryDateToDb,
        interest_rate: loanParams.interest_rate,
        principal_offer: loanParams.principal_offer,
        instalment: loanParams.instalment,
        total_due: loanParams.total_due,
        number_payments: loanParams.months,
        lender_credit_score: 300,
      })
      .select("loan_id")
      .single();

    if (createLoanError) {
      throw new Error(createLoanError.details);
    }

    const loan_id = newLoanId.loan_id;

    // console.log("This is the new loan's ID: ", loan_id);

    if (!createLoanError) {
      const { error: addToDisbursedError } = await supabase
        .from("to_disburse")
        .insert({
          loanid: loan_id,
          userid: lenderId,
          name_of_lender: lenderName,
          expiry_date: expiryDateToDb,
          still_valid: true,
          principal_amount: loanParams.principal_offer,
          interest_rate: loanParams.interest_rate,
          purpose: loanParams.purpose,
          term: loanParams.months,
          link_to_sender_profile: "Change this",
          total_due: loanParams.total_due,
        });

      if (addToDisbursedError) {
        toast.error("Please try again!");
        throw new Error(addToDisbursedError.details);
      }

      if (!addToDisbursedError) {
        toast.success("Published!");
      }
    }

    if (createLoanError) {
      throw new Error(createLoanError);
    }
  } catch (error) {
    console.log("Error while creating loan listing: ", error);
  }
};
