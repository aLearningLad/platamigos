import React from "react";
import ToDisburseBody from "./ToDisburseBody";

const LDPending = () => {
  return (
    <div className=" flex w-1/2 border-2 border-neutral-600/40 relative flex-col">
      <header className="sticky top-0 z-[5] py-2 flex justify-center w-full">
        <h2 className=" text-lg">You need to approve these!</h2>
      </header>
      <ToDisburseBody />
    </div>
  );
};

export default LDPending;
