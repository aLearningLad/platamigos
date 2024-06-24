import { deleteLoan } from "@/utils/myFxns/deleteLoan";
import React from "react";
import DeleteLoanBtn from "./DeleteLoanBtn";
import { Iloancard } from "@/interfaces";
import AcceptLoanBtn from "./AcceptLoanBtn";
import TrackedSymbol from "./TrackedSymbol";
import TrackLoanBtn from "./TrackLoanBtn";

const LoanCard: React.FC<Iloancard> = ({ loanid }) => {
  return (
    <div className=" w-full h-[60vh] bg-white flex justify-center items-center text-black flex-col">
      <DeleteLoanBtn loanid={loanid} />
      <AcceptLoanBtn loanId={loanid} />
      <TrackedSymbol />
      <TrackLoanBtn loan_id={loanid} watcher_id="78787" />
    </div>
  );
};

export default LoanCard;
