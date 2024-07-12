"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";

const InfoModal = () => {
  const showNavBtnModal = useStore((store: Istore) => store.showNavBtnModal);
  const setShowNavBtnModal = useStore(
    (store: Istore) => store.setShowNavBtnModal
  );
  return (
    <div
      className={` w-full h-screen fixed ${
        showNavBtnModal ? "flex z-50" : "hidden"
      } top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-blue-950/50 via-cyan-300/60 to-transparent backdrop-blur-sm text-white flex justify-center items-center text-xl`}
    >
      <button
        className=" text-white text-xl"
        onClick={() => setShowNavBtnModal(false)}
      >
        Close
      </button>
    </div>
  );
};

export default InfoModal;
