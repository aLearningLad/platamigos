"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../supabase/server";

export const deleteLoan = async (loanId: string) => {
  const supabase = createClient();

  try {
    const { error: deletionError } = await supabase
      .from("homefeed")
      .delete()
      .eq("loan_id", loanId);

    if (!deletionError) {
      revalidatePath("/all");
      console.log(`Deleted this loan ID successfully: ${loanId}`);
      return;
    }

    if (deletionError) {
      throw new Error(deletionError.details);
    }
  } catch (error) {
    console.log("Error deleting loan: ", error);
    console.log("loanid: ", loanId);
  }
};
