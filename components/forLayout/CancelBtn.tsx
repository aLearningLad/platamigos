"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";

const CancelBtn = () => {
  const setModalToApply = useStore((store: Istore) => store.setModalToApply);

  return (
    <button
      className="w-full h-fit md:w-10/12 lg:w-6/12 xl:w-4/12 flex justify-center py-4 lg:py-3 text-2xl hover:bg-red-500 lg:text-lg bg-gradient-to-b from-red-500/70 via-red-500/30 to-transparent text-white hover:scale-95 transition-all duration-300 ease-in-out rounded-md lg:rounded-lg "
      onClick={() => setModalToApply()}
    >
      Cancel
    </button>
  );
};

export default CancelBtn;
