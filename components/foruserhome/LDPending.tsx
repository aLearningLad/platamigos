import React from "react";
import ToDisburseBody from "./ToDisburseBody";

const LDPending = () => {
  return (
    <div className="flex w-1/2 h-full relative flex-col px-8">
      <header className="sticky top-0 z-[5] py-2 flex justify-center w-full">
        <h2 className=" text-lg">Loans To Disburse</h2>
      </header>
      <ToDisburseBody />
    </div>
  );
};

export default LDPending;
