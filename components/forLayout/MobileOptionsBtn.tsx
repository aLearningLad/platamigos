"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileOptionsBtn = () => {
  const setMobileOptionsModal = useStore(
    (store: Istore) => store.setMobileOptionsModal
  );

  return (
    <button
      onClick={() => setMobileOptionsModal(true)}
      className=" w-fit flex-col h-full flex justify-center items-center gap-1 text-center"
    >
      <GiHamburgerMenu size={40} color="white" />
      <p className=" text-lg text-white">Options</p>
    </button>
  );
};

export default MobileOptionsBtn;
