"use client";

import { GiHamburgerMenu } from "react-icons/gi";

const MobileOptionsBtn = () => {
  return (
    <button className=" w-fit flex-col h-full flex justify-center items-center gap-1 text-center">
      <GiHamburgerMenu size={40} color="white" />
      <p className=" text-lg text-white">Options</p>
    </button>
  );
};

export default MobileOptionsBtn;
