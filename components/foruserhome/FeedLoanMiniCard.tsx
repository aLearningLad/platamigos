import { Tloansfromdb } from "@/types";
import React from "react";
import { ApplyForLoanBtn } from "../utilComps";
import { createClient } from "@/utils/supabase/server";

const FeedLoanMiniCard: React.FC<Tloansfromdb> = async ({ ...params }) => {
  const supabase = createClient();
  const thisUserId = (await supabase.auth.getUser()).data.user?.id;

  return (
    <div
      className={`text-white  min-h-[45vh] ${
        thisUserId === params.lenderid ? "hidden" : "flex"
      } flex-col odd:items-start items-end odd:text-start text-end md:min-h-[30vh] lg:min-h-[30vh] w-full p-1 md:p-2 lg:p-3 border-2 border-white rounded-md lg:rounded-lg`}
    >
      <h1 className=" text-white">{params.title}</h1>
      <ApplyForLoanBtn
        loan_id={params.loan_id}
        google_id={thisUserId as string}
      />
    </div>
  );
};

export default FeedLoanMiniCard;
