import { deleteLoan } from "@/utils/myFxns/deleteLoan";
import React from "react";
import DeleteLoanBtn from "./DeleteLoanBtn";
import { Iloancard } from "@/interfaces";

const LoanCard: React.FC<Iloancard> = ({ loanid }) => {
  return (
    <div className=" w-full h-[60vh] bg-white flex justify-center items-center text-black ">
      <DeleteLoanBtn loanid={loanid} />
    </div>
  );
};

export default LoanCard;
