"use client";

import { Ideleteloantbn } from "@/interfaces";
import { deleteLoan } from "@/utils/myFxns/deleteLoan";

const DeleteLoanBtn: React.FC<Ideleteloantbn> = ({ loanid }) => {
  return (
    <button
      className="text-2xl w-full py-2 mt-2 md:mt-4 lg:mt-6 rounded-md lg:rounded-lg bg-cyan-600 text-white"
      onClick={() => deleteLoan(loanid)}
    >
      Remove Listing
    </button>
  );
};

export default DeleteLoanBtn;
