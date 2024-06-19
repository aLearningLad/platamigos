"use client";

import { TcreateLoanParams } from "@/types";
import { createClient } from "../supabase/client";

export const createLoan = async (params: { params: TcreateLoanParams }) => {
  const supabase = createClient();
  try {
    const { error: createLoanError } = await supabase
      .from("homeFeed")
      .insert({});
  } catch (error) {}
};
