"use client";

import { lowerSBdata } from "@/devdata/lowerSBdata";
import React from "react";
import LowerNavBtn from "./LowerNavBtn";

const SBBottom = () => {
  return (
    <section className="w-full h-[30%] flex flex-col items-center justify-around">
      {lowerSBdata.map((btn) => (
        <LowerNavBtn
          key={btn.btnId}
          btnIcon={btn.btnIcon}
          btnId={btn.btnId}
          btnName={btn.btnName}
          btnFxn={btn.btnFxn}
          btnLink={btn.btnLink}
        />
      ))}
    </section>
  );
};

export default SBBottom;
