"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";
import { TsubmitApplication } from "@/types";
import { submitAppl } from "@/utils/myFxns/submitAppl";

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
  const setModalToApply = useStore((store: Istore) => store.setModalToApply);

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
          setModalToApply();
      }}
      className="w-full h-fit md:w-10/12 lg:w-6/12 xl:w-4/12 flex justify-center py-1 lg:py-2 text-2xl lg:text-lg bg-red-600 mb-2 md:mb-4 lg:mb-5 xl:mb-8 hover:font-semibold text-white hover:scale-95 transition-all duration-300 ease-in-out rounded-md lg:rounded-lg"
    >
      SubmitApplication
    </button>
  );
};

export default SubmitApplication;
