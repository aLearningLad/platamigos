import { createClient } from "../supabase/server";

export const serverGetGoogleDetails = async () => {
  const supabase = createClient();
  try {
    const { data: userData, error: userDetailsError } =
      await supabase.auth.getUser();

    if (!userDetailsError) {
      //   console.log("Google user details: ", userData);
      return userData;
    }

    if (userDetailsError) {
      throw new Error(userDetailsError.message);
    }
  } catch (error) {
    console.log("Error retrieving user Google details from server: ", error);
    return error;
  }
};
