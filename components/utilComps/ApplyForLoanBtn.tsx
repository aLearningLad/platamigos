"use client";

import { applyForLoan } from "@/utils/myFxns/applyForLoan";
import { checkIfApplied } from "@/utils/myFxns/checkIfApplied";
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";

interface ApplyForLoanBtnProps {
  loan_id: string;
  google_id: string;
}

const ApplyForLoanBtn: React.FC<ApplyForLoanBtnProps> = ({
  loan_id,
  google_id,
}) => {
  const [alreadyApplied, setAlreadyApplied] = useState<boolean>(false);

  useEffect(() => {
    const check = async () => {
      const result = await checkIfApplied(loan_id, google_id);

      if (result) {
        setAlreadyApplied(result);
        console.log(result);
      }
    };

    check();
  }, []);

  return (
    <button
      onClick={() => applyForLoan(loan_id)}
      className={`bg-white text-black`}
    >
      {alreadyApplied === true ? "Done" : "Apply"}
    </button>
  );
};

export default ApplyForLoanBtn;
