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
  return (
    <div className=" w-full h-[30vh] border-4 border-white p-3 flex-col flex items-center justify-center ">
      card
    </div>
  );
};

export default BorrowedCard;
