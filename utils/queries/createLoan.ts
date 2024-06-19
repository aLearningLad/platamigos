"use client";

import { TcreateLoanParams } from "@/types";
import { createClient } from "../supabase/client";

export const createLoan = async (params: { params: TcreateLoanParams }) => {
  const supabase = createClient();
  const lenderId = (await supabase.auth.getUser()).data.user?.id;
  const lenderName = await supabase
    .from("allUsers")
    .select("username")
    .eq("googleid", lenderId);
  const expiryDateToDb = new Date(params.params.expiry_date);

  try {
    const { error: createLoanError } = await supabase.from("homefeed").insert({
      lenderid: lenderId,
      lendername: lenderName,
      title: params.params.title,
      purpose: params.params.purpose,
      // date_posted: new Date().getDate(), CHECK IF AUTO INJECTED, CORRECT IF NOT
      expiry_date: expiryDateToDb,
      interest_rate: params.params.interest_rate,
      principal_offer: params.params.principal_offer, //AWFUL SPELLING.
      instalment: params.params.instalment,
      total: params.params.total_due,
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
