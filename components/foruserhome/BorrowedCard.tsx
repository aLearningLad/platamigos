import { TgrantedLoans } from "@/types";
import React from "react";

const BorrowedCard: React.FC<TgrantedLoans> = ({
  applicant_id,
  applicant_name,
  date_granted,
  interest_rate,
  lender_id,
  loan_id,
  principal_amount,
  total_due,
}) => {
  const date_string = date_granted.toLocaleString();
  const granted_date_to_show = new Date(date_string).toLocaleDateString();
  return (
    <div className=" w-full bg-neutral-600/30 hover:scale-95 hover:bg-neutral-600/70 transition-all duration-300 ease-in-out rounded-[20px] h-[30vh] p-3 flex-col flex items-center justify-center ">
      <h1 className=" text-xl py-2 px-4 bg-red-600 text-white font-semibold rounded-md">
        R{principal_amount}
      </h1>
      <span className=" w-full flex gap-2 justify-center items-center py-3">
        <p className="  text-[12px]">borrowed on</p>
        <h3>{granted_date_to_show}</h3>
      </span>
      <div className=" w-full flex justify-center items-center gap-2 mt-3">
        <p className=" text-[12px]"> total due:</p>
        <h2 className=" text-xl py-2 px-4 bg-cyan-600 font-semibold text-white rounded-md">
          R{total_due}
        </h2>
      </div>
    </div>
  );
};

export default BorrowedCard;
