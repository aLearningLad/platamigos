"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";
import LDAll from "./LDAll";
import LDDisbursed from "./LDDisbursed";
import LDPending from "./LDPending";
import LDApplied from "./LDApplied";
import LDBorrowed from "./LDBorrowed";

const LoanDisplay = () => {
  const currentHub = useStore((store: Istore) => store.currentHub);

  switch (currentHub) {
    case "all":
      return <LDAll />;

    case "disbursed":
      return <LDDisbursed />;

    case "borrowed":
      return <LDBorrowed />;

    case "pending":
      return <LDPending />;

    case "applied":
      return <LDApplied />;

    default:
      return (
        <div className=" flex w-1/2 border-4 border-white">
          This is all loans
        </div>
      );
  }
};

export default LoanDisplay;
