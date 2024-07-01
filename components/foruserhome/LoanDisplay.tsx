"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";
import LDAll from "./LDAll";
import LDDisbursed from "./LDDisbursed";
import LDPending from "./LDPending";

const LoanDisplay = () => {
  const currentHub = useStore((store: Istore) => store.currentHub);

  switch (currentHub) {
    case "all":
      return <LDAll />;

    case "disbursed":
      return <LDDisbursed />;

    case "borrowed":
      return (
        <div className=" flex w-1/2 border-4 border-white">
          Everything you've borrowed!
        </div>
      );

    case "pending":
      return <LDPending />;

    case "applied":
      return (
        <div className=" flex w-1/2 border-4 border-white">
          You applied for these!
        </div>
      );

    default:
      return (
        <div className=" flex w-1/2 border-4 border-white">
          This is all loans
        </div>
      );
  }
};

export default LoanDisplay;
