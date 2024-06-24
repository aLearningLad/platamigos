"use server";

import { createClient } from "../supabase/server";

export const getAllPublished = async () => {
  const supabase = createClient();
  const lenderId = (await supabase.auth.getUser()).data.user?.id;
  try {
    const { data: allPublished, error: allPublishedError } = await supabase
      .from("homefeed")
      .select("*")
      .eq("lenderid", lenderId);

    if (!allPublishedError) {
      //   console.log("All the loans: ", allPublished);
      return allPublished;
    }

    if (allPublishedError) {
      throw new Error(allPublishedError.details);
    }
  } catch (error) {
    console.log("Error while fetching loans: ", error);
  }
};
