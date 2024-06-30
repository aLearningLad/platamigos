"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";

const LoanDisplay = () => {
  const currentHub = useStore((store: Istore) => store.currentHub);

  switch (currentHub) {
    case "all":
      return (
        <div className=" flex w-1/2 border-4 border-white">
          This is all loans
        </div>
      );

    case "disbursed":
      return (
        <div className=" flex w-1/2 border-4 border-white">
          These are only disbursed loans
        </div>
      );

    case "borrowed":
      return (
        <div className=" flex w-1/2 border-4 border-white">
          Everything you've borrowed!
        </div>
      );

    case "pending":
      return (
        <div className=" flex w-1/2 border-4 border-white">
          You need to approve these!
        </div>
      );

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
