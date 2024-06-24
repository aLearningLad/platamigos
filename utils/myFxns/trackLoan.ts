"use server";

import { TtrackedLoans } from "@/types";
import { createClient } from "../supabase/server";
import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export const trackLoan = async (loan_id: string, watcher_id: string) => {
  const supabase = createClient();
  try {
    const { error: trackLoanError } = await supabase
      .from("trackedloans")
      .insert({
        watcher_id: watcher_id,
        loan_id: loan_id,
      });

    if (!trackLoanError) {
      revalidatePath("/all");
      console.log(`Added loan with ID ${loan_id} to table!`);
      return;
    }

    if (trackLoanError) {
      throw new Error(trackLoanError.details);
    }
  } catch (error) {
    console.log("Error while tracking loan: ", error);
  }
};
