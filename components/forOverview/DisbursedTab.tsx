import { IoverviewDisbursedData } from "@/types";
import React from "react";

const DisbursedTab: React.FC<IoverviewDisbursedData> = ({
  figure,
  icon,
  id,
  label,
  blurb,
}) => {
  return (
    <div className="w-full bg-gradient-to-b from-purple-900/20 via-purple-800/40 to-purple-800/30 flex flex-col items-center justify-center p-1 md:p-2 lg:p-3 xl:p-4 h-[40vh] lg:h-[35vh] border-4 border-transparent hover:scale-95 transition-all duration-300 ease-in-out hover:border-neutral-100/50 rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl ">
      <h3 className=" text-2xl lg:text-xl text-ellipsis">{label}</h3>
      <div className="w-full flex justify-center items-center h-[65%]">
        {icon}
      </div>
      <div className=" w-full">{blurb}</div>
    </div>
  );
};

export default DisbursedTab;
