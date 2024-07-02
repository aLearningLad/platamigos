"use server";

import { createClient } from "../supabase/server";

// import { createClient } from "../supabase/client";

export const getAllApplied = async () => {
  const supabase = createClient();
  const googleId = (await supabase.auth.getUser()).data.user?.id;
  try {
    const { data: allAppliedData, error: allAppliedDataError } = await supabase
      .from("all_applicants")
      .select("loan_id")
      .eq("applicant_id", googleId);

    console.log("This is the loan applied for: ", allAppliedData![0]);

    if (allAppliedDataError) {
      throw new Error(allAppliedDataError.details);
    }

    if (!allAppliedDataError) {
      console.log("Loan id here: ", allAppliedData);
      return allAppliedData![0];
    }
  } catch (error) {
    console.log("Error while retrieving all applications data: ", error);
  }
};
