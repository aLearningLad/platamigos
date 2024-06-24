"use client";

import { Ideleteloantbn } from "@/interfaces";
import { deleteLoan } from "@/utils/myFxns/deleteLoan";

const DeleteLoanBtn: React.FC<Ideleteloantbn> = ({ loanid }) => {
  const loanId = "222";

  return <button onClick={() => deleteLoan(loanId)}>Delete Loan</button>;
};

export default DeleteLoanBtn;
