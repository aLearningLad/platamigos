"use client";

import { acceptLoan } from "@/utils/myFxns/acceptLoan";

const AcceptLoanBtn = ({ loanId }: { loanId: string }) => {
  return (
    <button
      className=" border-2 border-black text-black text-lg"
      onClick={() => acceptLoan(loanId)}
    >
      <p className="text-ellipsis">Accept loan with ID: {loanId}</p>
    </button>
  );
};

export default AcceptLoanBtn;
