"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";

const ApplyModal = () => {
  const modalToApply = useStore((store: Istore) => store.modalToApply);
  const setModalToApply = useStore((store: Istore) => store.setModalToApply);
  const loandata = useStore((store: Istore) => store.loandata);
  const isLoading = useStore((store: Istore) => store.isLoading);

  return (
    <div
      className={`${
        modalToApply ? "flex z-40" : "hidden z-[-1]"
      }  bg-black/60 w-full h-screen fixed backdrop-blur-md text-white justify-center items-center `}
    >
      <h3 className=" text-white text-2xl font-normal">
        {isLoading ? (
          <>Loading...</>
        ) : loandata ? (
          loandata.loan_id
        ) : (
          "No data right now, bruv!"
        )}
      </h3>
      <button onClick={() => setModalToApply()}>Close</button>
    </div>
  );
};

export default ApplyModal;
