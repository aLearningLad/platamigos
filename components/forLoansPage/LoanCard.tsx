import { deleteLoan } from "@/utils/myFxns/deleteLoan";
import React from "react";
import DeleteLoanBtn from "./DeleteLoanBtn";
import { Iloancard } from "@/interfaces";
import AcceptLoanBtn from "./AcceptLoanBtn";

const LoanCard: React.FC<Iloancard> = ({ loanid }) => {
  return (
    <div className=" w-full h-[60vh] bg-white flex justify-center items-center text-black flex-col">
      <DeleteLoanBtn loanid={loanid} />
      <AcceptLoanBtn loanId={loanid} />
    </div>
  );
};

export default LoanCard;
