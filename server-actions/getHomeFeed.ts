import { createClient } from "@/utils/supabase/server";

// COME FINISH THIS
export const getHomeFeed = async () => {
  const supabase = createClient();
  try {
    const { data: homeFeed, error: homeFeedError } = await supabase
      .from("homefeed")
      .select("*");
  } catch (error) {}
};
