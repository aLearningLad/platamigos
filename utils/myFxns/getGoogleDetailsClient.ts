"use client";

import { createClient } from "../supabase/client";

export const getGoogleDetailsClient = async () => {
  const supabase = createClient();

  try {
    const { data: GoogleData, error: GoogleDataError } =
      await supabase.auth.getUser();

    const result = GoogleData.user;

    if (GoogleDataError) {
      throw new Error(GoogleDataError.message);
      return;
    }

    console.log("This is the result: ", result);
    return result;
  } catch (error) {
    console.log("Error while getting google acc details: ", error);
  }
};
