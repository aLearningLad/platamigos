"use client";

import { createClient } from "../supabase/client";

export const applyForLoan = async (loan_id: string, googleId: string) => {
  const supabase = createClient();
  try {
    const { error: updateNumberApplicantsError } = await supabase
      .from("homefeed")
      .update({
        number_of_applicants: +1,
      });
    const { error: updateAllApplicationsError } = await supabase
      .from("all_applicants")
      .update({
        loan_id: loan_id,
        applicant_id: googleId,
      });

    // RECREATE PENDING TABLE, CURRENT ONE IS TRASHY
  } catch (error) {}
};
