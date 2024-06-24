import { deleteLoan } from "@/utils/myFxns/deleteLoan";
import React from "react";
import DeleteLoanBtn from "./DeleteLoanBtn";

const LoanCard = () => {
  return (
    <div className=" w-full h-[60vh] bg-white flex justify-center items-center text-black ">
      <DeleteLoanBtn loanid="1" />
    </div>
  );
};

export default LoanCard;
