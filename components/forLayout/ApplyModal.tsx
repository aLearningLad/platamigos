"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";
import ModalApplyCard from "./ModalApplyCard";

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
      <div className=" text-white text-2xl font-normal w-full h-full md:w-10/12 lg:w-8/12 border-4 border-white flex flex-col items-center justify-center text-center">
        {isLoading ? (
          <div className=" h-full w-full flex justify-center items-center text-2xl lg:text-lg text-white font-semibold">
            Just a minute...
          </div>
        ) : loandata ? (
          <ModalApplyCard {...loandata} />
        ) : (
          <div className=" h-full w-full flex justify-center items-center text-2xl lg:text-lg text-white font-semibold">
            "No data right now, bruv!"
          </div>
        )}
      </div>
      {/* <button onClick={() => setModalToApply()}>Close</button> */}
    </div>
  );
};

export default ApplyModal;
