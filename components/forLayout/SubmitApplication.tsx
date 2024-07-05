"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";
import { TsubmitApplication } from "@/types";
import { applyForLoan } from "@/utils/myFxns/applyForLoan";
import { submitAppl } from "@/utils/myFxns/submitAppl";
import { useRouter } from "next/navigation";

const SubmitApplication: React.FC<TsubmitApplication> = ({
  expiry_date,
  instalment,
  interest_rate,
  loanid,
  posterid,
  principal,
  purpose,
  total_due,
  months,
}) => {
  const router = useRouter();
  const setModalToApply = useStore((store: Istore) => store.setModalToApply);

  const refreshIt = () => {
    router.refresh();
  };

  return (
    <button
      onClick={() => {
        submitAppl({
          expiry_date,
          instalment,
          interest_rate,
          loanid,
          posterid,
          principal,
          purpose,
          total_due,
          months,
        }),
          setModalToApply(),
          refreshIt();
        applyForLoan(loanid);
      }}
      className="w-full h-fit md:w-10/12 lg:w-6/12 xl:w-4/12 flex justify-center py-4 lg:py-3 text-2xl lg:text-lg bg-gradient-to-b from-lime-500/70 via-lime-300/40 to-transparent mb-2 md:mb-4 lg:mb-5 xl:mb-8 hover:bg-green-600 text-white hover:scale-95 transition-all duration-300 ease-in-out rounded-md lg:rounded-lg"
    >
      Submit Application
    </button>
  );
};

export default SubmitApplication;
