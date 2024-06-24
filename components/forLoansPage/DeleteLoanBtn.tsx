"use client";

import { Ideleteloantbn } from "@/interfaces";
import { deleteLoan } from "@/utils/myFxns/deleteLoan";

const DeleteLoanBtn: React.FC<Ideleteloantbn> = ({ loanid }) => {
  return <button onClick={() => deleteLoan(loanid)}>Delete {loanid}</button>;
};

export default DeleteLoanBtn;
