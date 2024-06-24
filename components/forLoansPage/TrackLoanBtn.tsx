"use client";

import { TtrackedLoans } from "@/types";
import { trackLoan } from "@/utils/myFxns/trackLoan";
import React from "react";

const TrackLoanBtn: React.FC<TtrackedLoans> = ({ loan_id, watcher_id }) => {
  return (
    <button onClick={() => trackLoan({ loan_id, watcher_id })}>
      TrackLoanBtn
    </button>
  );
};

export default TrackLoanBtn;
