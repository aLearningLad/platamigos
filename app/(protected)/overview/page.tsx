import { OverviewDebts, OverviewDisbursed } from "@/components/forOverview";
import React from "react";

const Overview = () => {
  return (
    <div className=" w-full h-full flex flex-col lg:flex-row">
      <OverviewDisbursed />
      <OverviewDebts />
    </div>
  );
};

export default Overview;
