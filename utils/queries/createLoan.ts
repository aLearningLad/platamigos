"use client";

import { TcreateLoanParams } from "@/types";
import { createClient } from "../supabase/client";

export const createLoan = async (loanParams: TcreateLoanParams) => {
  const supabase = createClient();
  const lenderId = (await supabase.auth.getUser()).data.user?.id;
  const lenderName = await supabase
    .from("allusers")
    .select("username")
    .eq("googleid", lenderId);
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
    });

    if (!createLoanError) {
      alert("Loan listing created!"); //REPLACE WITH A TOAST
    }

    if (createLoanError) {
      throw new Error(createLoanError.message);
    }
  } catch (error) {
    console.log("Error while creating loan listing: ", error);
  }
};
