"use server";

import { createClient } from "@/utils/supabase/server";

export const getGoogleDetailsServer = async () => {
  const supabase = createClient();

  try {
    const { data: GoogleDetails, error: googleDetailsError } =
      await supabase.auth.getUser();

    if (googleDetailsError) {
      throw new Error(googleDetailsError.message);
    }

    if (GoogleDetails && !googleDetailsError) {
      console.log(
        "Users google details: ",
        GoogleDetails.user.user_metadata.avatar_url
      );
      return GoogleDetails;
    }
  } catch (error) {
    console.log("Error while fetching Google details: ", error);
  }
};
