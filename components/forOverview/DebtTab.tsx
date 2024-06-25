import { Tdebttabdata } from "@/types";
import React from "react";

const DebtTab: React.FC<Tdebttabdata> = ({
  btnText,
  icon,
  subtitle,
  tabid,
  title,
}) => {
  return (
    <div className="w-full hover:scale-95 transition-all duration-300 ease-in-out bg-gradient-to-t from-black via-black to-cyan-950 p-2 md:p-3 lg:p-5 xl:p-9 text-white h-[60vh] bg-white rounded-lg flex flex-col text-end even:text-start items-end even:items-start ">
      <header className="flex flex-col">
        <h1 className=" text-2xl lg:text-xl font-bold">{title}</h1>
        <h4 className=" text-[14px] ">{subtitle}</h4>
      </header>

      <div className=" w-full h-[50%] border-2 border-white "></div>
      <button className=" mt-1 md:mt-2 lg:mt-3 py-1 text-xl lg:py-2 w-full lg:w-fit px-4 xl:px-5 rounded-md lg:rounded-lg bg-white text-black">
        {btnText}
      </button>
    </div>
  );
};

export default DebtTab;
