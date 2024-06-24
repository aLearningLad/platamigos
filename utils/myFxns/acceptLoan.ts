"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../supabase/server";

export const acceptLoan = async (loanId: string) => {
  const supabase = createClient();
  try {
    const { error: acceptLoanError } = await supabase
      .from("homefeed")
      .update({
        disbursed: true,
      })
      .eq("loan_id", loanId);

    if (!acceptLoanError) {
      revalidatePath("/all");
      console.log(`${loanId} accepted!`);
    }

    if (acceptLoanError) {
      throw new Error(acceptLoanError.details);
    }
  } catch (error) {
    console.log("Error while accepting loan: ", error);
  }
};
