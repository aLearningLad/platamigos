import { getGoogleDetailsClient } from "@/utils/myFxns/getGoogleDetailsClient";
import { createClient } from "@/utils/supabase/server";
import React from "react";

const SearchBar = () => {
  const supabase = createClient();
  const result = getGoogleDetailsClient();
  console.log(result);

  return <div className=" w-full sticky top-0 flex flex-col"></div>;
};

export default SearchBar;
