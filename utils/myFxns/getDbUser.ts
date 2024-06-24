"use server";

import { createClient } from "../supabase/server";

export const getDbUser = async () => {
  const supabase = createClient();
  const googleId = (await supabase.auth.getUser()).data.user?.id;

  try {
    const { data: userFromDb, error: userFromDbError } = await supabase
      .from("allusers")
      .select("*")
      .eq("googleid", googleId);

    if (!userFromDbError) {
      console.log("User from DB for summery: ", userFromDb);
      return userFromDb;
    }

    if (userFromDbError) {
      throw new Error(userFromDbError.details);
    }
  } catch (error) {
    console.log("Error fetching user from DB: ", error);
  }
};
