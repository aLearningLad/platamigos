import { Iminitab } from "@/interfaces";
import React from "react";

const MiniTab: React.FC<Iminitab> = ({ tabData, tabIcon, tabId, tabLabel }) => {
  return (
    <div className=" h-full w-full bg-orange-400 rounded-lg p-1 flex flex-col items-center justify-center">
      {tabIcon}
      <p className=" text-center text-[14px] ">{tabLabel}</p>
      <h2 className=" text-xl lg:text-2xl font-semibold">{tabData}</h2>
    </div>
  );
};

export default MiniTab;
