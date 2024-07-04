"use client";

import useStore from "@/app/(store)/store";
import { IapplyModalBtn, Istore } from "@/interfaces";
import { Tloansfromdb } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

const ApplyModalBtn: React.FC<IapplyModalBtn> = ({ loan_id }) => {
  const setLoanData = useStore((store: Istore) => store.setLoanData);
  const loandata = useStore((store: Istore) => store.loandata);
  const setModalToApply = useStore((store: Istore) => store.setModalToApply);
  const isLoading = useStore((store) => store.isLoading);
  const setIsLoading = useStore((store) => store.setIsLoading);

  const handleModalOpen = async (loan_id: string) => {
    const supabase = createClient();
    try {
      const { data: thisLoan, error: thisLoanError } = await supabase
        .from("homefeed")
        .select("*")
        .eq("loan_id", loan_id);

      if (thisLoanError) {
        throw new Error(thisLoanError.details);
      }

      if (!thisLoanError) {
        console.log("Loan data is: ", thisLoan);
        // alert("Success!");
        setLoanData(thisLoan[0]);
      }
    } catch (error) {
      console.log("Problem fetching loan: ", error);
    } finally {
      setIsLoading(false);
      console.log("loan data here: ", loandata);
    }
  };

  return (
    <button
      onClick={() => {
        handleModalOpen(loan_id), setModalToApply();
      }}
      className="lg:text-lg px-5 py-2 lg:py-1 font-semibold lg:font-normal text-xl group-hover:bg-white group-hover:text-black transition-all duration-300 ease-in-out lg:px-2 bg-pink-600 rounded-md text-white lg:text-[12px] "
    >
      Apply
    </button>
  );
};

export default ApplyModalBtn;
