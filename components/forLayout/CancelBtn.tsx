"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";

const CancelBtn = () => {
  const setModalToApply = useStore((store: Istore) => store.setModalToApply);

  return (
    <button
      className="w-full h-fit md:w-10/12 hover:font-semibold lg:w-6/12 xl:w-4/12 flex justify-center py-1 lg:py-2 text-2xl lg:text-lg bg-cyan-600 text-white hover:scale-95 transition-all duration-300 ease-in-out rounded-md lg:rounded-lg "
      onClick={() => setModalToApply()}
    >
      Cancel
    </button>
  );
};

export default CancelBtn;
