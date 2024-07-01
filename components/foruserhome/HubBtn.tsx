"use client";

import useStore from "@/app/(store)/store";
import { Ihubbtn, Istore } from "@/interfaces";
import React from "react";

const HubBtn: React.FC<Ihubbtn> = ({ hubName }) => {
  const setCurrentHub = useStore((store: Istore) => store.setCurrentHub);
  const currentHub = useStore((store: Istore) => store.currentHub);

  return (
    <button
      className={` ${
        currentHub === hubName.toLowerCase()
          ? "text-white text-xl mx-2 border-b-2 border-white"
          : "text-neutral-300 text-[14px]"
      }`}
      onClick={() => setCurrentHub(hubName.toLowerCase())}
    >
      {hubName}
    </button>
  );
};

export default HubBtn;
