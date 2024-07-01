"use server";

import { createClient } from "@/utils/supabase/server";

export const getToDisburse = async () => {
  const supabase = createClient();
  const userid = (await supabase.auth.getUser()).data.user?.id;
  try {
    const { data: disburseData, error: disburseDataError } = await supabase
      .from("to_disburse")
      .select("*")
      .eq("userid", userid);

    if (disburseDataError) {
      throw new Error(disburseDataError.details);
    }

    if (!disburseDataError) {
      console.log("Loans to disburse are here: ", disburseData);
      return disburseData;
    }
  } catch (error) {
    console.log("This error occured while fetching loans to disburse: ", error);
  }
};
