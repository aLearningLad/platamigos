import { OverviewDebts, OverviewDisbursed } from "@/components/forOverview";
import React from "react";

const Overview = () => {
  return (
    <div className=" w-full h-full border-4 border-green-400 flex flex-col lg:flex-row text-white relative">
      <OverviewDisbursed />
      <div className="w-[2px] bg-neutral-700/40 rounded-full hidden lg:flex  sticky " />
      <OverviewDebts />
    </div>
  );
};

export default Overview;
