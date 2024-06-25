import { Iminitab } from "@/interfaces";
import React from "react";

const MiniTab: React.FC<Iminitab> = ({ tabData, tabIcon, tabId, tabLabel }) => {
  return (
    <div className="h-full hover:scale-95 transition-all duration-300 ease-in group w-full bg-gradient-to-br hover:border-neutral-400 from-blue-950 via-purple-950/40 to-blue-900/20 rounded-lg p-1 flex flex-col items-center justify-center">
      <div className=" w-fit h-fit rounded-full p-3 bg-neutral-200/20 group-hover:bg-neutral-900 transition-all duration-300 ease-in-out">
        {tabIcon}
      </div>
      <p className=" text-center text-[14px] ">{tabLabel}</p>
      <h2 className=" text-xl lg:text-xl font-semibold">{tabData}K</h2>
    </div>
  );
};

export default MiniTab;
