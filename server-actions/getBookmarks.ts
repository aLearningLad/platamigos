import { createClient } from "@/utils/supabase/server";
import next from "next";

export const getBookmarks = async (isAuth: boolean) => {
  if (isAuth) {
    const supabase = createClient();
    const googleId = (await supabase.auth.getUser()).data.user?.id;
    try {
      const { data: bookmarkData, error: bookmarkDataError } = await supabase
        .from("bookmarks")
        .select("*")
        .eq("userId", googleId);

      if (bookmarkDataError) {
        throw new Error(bookmarkDataError.details);
      }
    } catch (error) {
      console.log("Error while retrieving bookmarks: ", error);
    }
  } else {
    console.log("No permissions. User not authorized");
    return;
  }
};
