import { Tloansfromdb } from "@/types";
import React from "react";
import { ApplyForLoanBtn } from "../utilComps";

const FeedLoanMiniCard: React.FC<Tloansfromdb> = ({ ...params }) => {
  return (
    <div className="text-white min-h-[45vh] flex flex-col odd:items-start items-end odd:text-start text-end md:min-h-[30vh] lg:min-h-[30vh] w-full p-1 md:p-2 lg:p-3 border-2 border-white rounded-md lg:rounded-lg">
      <h1 className=" text-white">{params.lenderName}</h1>
      <ApplyForLoanBtn loan_id={params.loan_id} google_id={params.lenderid} />
    </div>
  );
};

export default FeedLoanMiniCard;
