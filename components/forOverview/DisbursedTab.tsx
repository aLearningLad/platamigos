import { IoverviewDisbursedData } from "@/types";
import React from "react";

const DisbursedTab: React.FC<IoverviewDisbursedData> = ({
  figure,
  icon,
  id,
  label,
}) => {
  return (
    <div className=" w-full flex flex-col items-center justify-center p-1 md:p-2 lg:p-3 xl:p-4 h-[40vh] lg:h-[35vh] border-white border-4 rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl ">
      <h3>{label}</h3>
      <div className="w-full flex justify-center items-center">{icon}</div>
      <span className="w-full flex justify-center items-center gap-2 ">
        <p className=" text-[12px] ">around</p>
        <h4 className="text-xl font-bold italic ">R{figure}</h4>{" "}
        <p className="text-[12px] ">so far</p>
      </span>
    </div>
  );
};

export default DisbursedTab;
