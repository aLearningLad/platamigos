"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";
import { Tlandingnavdata } from "@/types";
import React from "react";

const LandingNavBtn = ({ params }: { params: Tlandingnavdata }) => {
  const setShowNavBtnModal = useStore(
    (store: Istore) => store.setShowNavBtnModal
  );

  return (
    <button
      className="text-[14px] group text-neutral-400 hover:text-white cursor-pointer flex justify-center items-center flex-col  "
      key={params.navId}
      onClick={() => setShowNavBtnModal(true)}
    >
      {params.navtitle}
      <div className=" w-[6px] group-hover:w-full h-[1px] rounded-full bg-transparent group-hover:bg-white transition-all duration-700 ease-in-out " />
    </button>
  );
};

export default LandingNavBtn;
