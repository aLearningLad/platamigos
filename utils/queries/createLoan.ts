"use server";

import { TcreateLoanParams } from "@/types";
import { createClient } from "../supabase/server";

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
    const { error: createLoanError } = await supabase.from("homefeed").insert({
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
    });

    if (!createLoanError) {
      //REPLACE WITH A TOAST
      // alert("Loan listing created!");
    }

    if (createLoanError) {
      throw new Error(createLoanError.message);
    }
  } catch (error) {
    console.log("Error while creating loan listing: ", error);
  }
};
