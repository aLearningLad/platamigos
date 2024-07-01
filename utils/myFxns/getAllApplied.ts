import { createClient } from "../supabase/client";

export const getAllApplied = async () => {
  const supabase = createClient();
  const googleId = (await supabase.auth.getUser()).data.user?.id;
  try {
    const { data: allAppliedData, error: allAppliedDataError } = await supabase
      .from("all_applicants")
      .select("*")
      .eq("applicant_id", googleId);

    if (allAppliedDataError) {
      throw new Error(allAppliedDataError.details);
    }

    if (!allAppliedDataError) {
      return allAppliedData;
    }
  } catch (error) {
    console.log("Error while retrieving all applications data: ", error);
  }
};
