"use server";

import { createClient } from "../supabase/server";

export const applyForLoan = async (loan_id: string, googleId: string) => {
  const supabase = createClient();

  const { data: prevApplCount } = await supabase
    .from("homefeed")
    .select("number_of_applicants")
    .eq("loan_id", loan_id);

  console.log("Prev applicant count: ", prevApplCount![0].number_of_applicants);
  try {
    if (prevApplCount && prevApplCount.length > 0) {
      const { error: updateNumberApplicantsError } = await supabase
        .from("homefeed")
        .update({
          number_of_applicants: prevApplCount![0].number_of_applicants + 1,
        })
        .eq("loan_id", loan_id);
    } else {
      const { error: updateNumberApplicantsError } = await supabase
        .from("homefeed")
        .update({
          number_of_applicants: 1,
        })
        .eq("loan_id", loan_id);
    }
  } catch (error) {
    console.log("Error while applying for loan", error);
  }
};
