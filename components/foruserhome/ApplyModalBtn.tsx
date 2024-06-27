"use client";

import useStore from "@/app/(store)/store";
import { IapplyModalBtn, Istore } from "@/interfaces";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

const ApplyModalBtn: React.FC<IapplyModalBtn> = ({ loan_id }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleModalOpen = async (loan_id: string) => {
    const setModalToApply = useStore((store: Istore) => store.setModalToApply);
    const supabase = createClient();
    try {
      const { data: thisLoan, error: thisLoanError } = await supabase
        .from("homefeed")
        .select("*")
        .eq("loan_id", loan_id);

      if (thisLoanError) {
        throw new Error(thisLoanError.details);
      }
    } catch (error) {
      console.log("Problem fetching loan: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={() => handleModalOpen(loan_id)}
      className="text-lg px-1 group-hover:bg-white group-hover:text-black transition-all duration-300 ease-in-out lg:px-2 bg-pink-600 rounded-md text-white lg:text-[12px] "
    >
      Apply
    </button>
  );
};

export default ApplyModalBtn;
