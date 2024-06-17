"use client";

import { createClient } from "../supabase/client";

export const signInViaGoogle = async () => {
  const supabase = createClient();

  try {
    const { data: signInData, error: callbackError } =
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000/auth/callback",
        },
      });

    if (!callbackError) {
      console.log("No issue logging in!");
    }
  } catch (error) {
    console.log("Error while trying to sign in: ", error);
  }
};
