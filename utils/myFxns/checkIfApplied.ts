"use server";

import { createClient } from "../supabase/server";

export const checkIfApplied = async (loan_id: string, applicant_id: string) => {
  const supabase = createClient();
  let entry: any;
  try {
    const { data: myAppl, error: myApplError } = await supabase
      .from("all_applicants")
      .select("*")
      .eq("applicant_id", applicant_id)
      .eq("loan_id", loan_id);

    if (myAppl && myAppl.length > 0) {
      for (entry of myAppl) {
        if (entry.applicant_id.includes(applicant_id)) {
          return true;
        } else {
          return false;
        }
      }
    }

    if (myApplError) {
      throw new Error(myApplError.details);
    }
  } catch (error) {
    console.log("Error while retrieving my applications", error);
  }
};
