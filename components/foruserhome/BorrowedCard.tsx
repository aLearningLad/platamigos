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
    <div className=" w-full h-[30vh] border-4 border-white p-3 flex-col flex items-center justify-center ">
      <h1>{principal_amount}</h1>
      <p>borrowed on</p>
      <h3>{granted_date_to_show}</h3>
      <div className=" w-full flex justify-center items-center gap-2">
        <p>due:</p>
        <h2>{total_due}</h2>
      </div>
    </div>
  );
};

export default BorrowedCard;
