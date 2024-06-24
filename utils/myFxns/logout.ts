"use client";

import { createClient } from "../supabase/client";
import { revalidatePath } from "next/cache";

export const logout = async () => {
  const supabase = createClient();
  try {
    const { error: signOutError } = await supabase.auth.signOut();

    if (!signOutError) {
      console.log("Signing out...");
    }

    if (signOutError) {
      throw new Error(signOutError.message);
    }
  } catch (error) {
    console.log("Error while trying to sign out: ", error);
  } finally {
    location.reload();
  }
};
