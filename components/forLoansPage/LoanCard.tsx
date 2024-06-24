import React from "react";
import DeleteLoanBtn from "./DeleteLoanBtn";
import { Iloancard } from "@/interfaces";
import AcceptLoanBtn from "./AcceptLoanBtn";
import TrackedSymbol from "./TrackedSymbol";
import TrackLoanBtn from "./TrackLoanBtn";
import { serverGetGoogleDetails } from "@/utils/myFxns/serverGetGoogleDetails";

const LoanCard: React.FC<Iloancard> = async ({ loanid }) => {
  const result: any = await serverGetGoogleDetails();
  const watcher_id: string = result.user.id;

  return (
    <div className=" w-full h-[60vh] bg-white flex justify-center items-center text-black flex-col">
      <DeleteLoanBtn loanid={loanid} />
      <AcceptLoanBtn loanId={loanid} />
      <TrackedSymbol />
      <TrackLoanBtn loan_id={loanid} watcher_id={watcher_id} />
    </div>
  );
};

export default LoanCard;
