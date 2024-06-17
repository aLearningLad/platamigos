"use client";

import { TfetchCurrentUserParams } from "@/types";
import { createClient } from "../supabase/server";

export const fetchCurrentUserInDb = async (params: TfetchCurrentUserParams) => {
  const supabase = createClient();
  try {
    const { data: UserFromDB, error: userFetchError } = await supabase
      .from("allUsers")
      .select("*")
      .eq("googleId", params.googleId);

    if (userFetchError) {
      throw new Error(userFetchError.message);
    }
  } catch (error) {
    console.log("Error while fetching current user from table: ", error);
  }
};
