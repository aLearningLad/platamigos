"use server";

import { createClient } from "../supabase/server";

export const checkIfApplied = async (loan_id: string, applicant_id: string) => {
  let entry: any;

  // 1. myAppl = COLLTECTION OF MY APPLICATIONS IN APPL. TABLE
  // 2. all = HOMEFEED APPLICATIONS

  const supabase = createClient();
  try {
    const { data: myAppl, error: myApplError } = await supabase
      .from("all_applicants")
      .select("*")
      .eq("applicant_id", applicant_id);

    const { data: homefeed, error: homefeedError } = await supabase
      .from("homefeed")
      .select("*");

    // console.log("myAppl is here: ", myAppl);
    // console.log("homefeed is here: ", homefeed);

    for (entry of homefeed!) {
      if (entry.lenderid.includes(applicant_id)) {
        // console.log("This loan has been applied for!");
        console.log("applicant id: ", applicant_id);
        return true;
      } else {
        return false;
        // console.log("This loan has not been applied for yet!");
      }
    }
  } catch (error) {}
};
