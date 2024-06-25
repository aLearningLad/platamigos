import { OverviewDebts, OverviewDisbursed } from "@/components/forOverview";
import React from "react";

const Overview = () => {
  return (
    <div className=" w-full h-full flex flex-col lg:flex-row text-white relative">
      <OverviewDisbursed />
      <div className="w-[2px] bg-neutral-700/40 rounded-full hidden lg:flex  sticky " />
      <OverviewDebts />
    </div>
  );
};

export default Overview;
