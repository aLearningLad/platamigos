"use client";

import { applyForLoan } from "@/utils/myFxns/applyForLoan";

interface ApplyForLoanBtnProps {
  loan_id: string;
}

const ApplyForLoanBtn: React.FC<ApplyForLoanBtnProps> = ({ loan_id }) => {
  return (
    <button
      onClick={() => applyForLoan(loan_id)}
      className=" bg-white text-black"
    >
      Apply
    </button>
  );
};

export default ApplyForLoanBtn;
