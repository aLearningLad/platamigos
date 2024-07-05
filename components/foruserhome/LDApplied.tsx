"use client";

import { Ildapplied } from "@/interfaces";
import { Tloansfromdb } from "@/types";
import { getAllApplied } from "@/utils/myFxns/getAllApplied";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { GiCash } from "react-icons/gi";

const LDApplied: React.FC<Ildapplied> = ({ isLoading, allApplied }) => {
  if (isLoading) {
    return (
      <div className=" w-1/2 h-full flex justify-center items-center">
        <h1 className=" text-neutral-300 text-[18px] ">
          Just a second, bruv...
        </h1>
      </div>
    );
  }

  if (allApplied === null) {
    <div className=" w-full h-full flex justify-center items-center text-lg  ">
      Not outstanding applications...
    </div>;
  }

  return (
    <div className=" flex w-1/2 flex-col text-white relative">
      <header className=" w-full flex justify-center py-2">
        <h1 className=" text-lg ">Loan {"You've"} Applied For</h1>
      </header>
      <div className=" w-full h-full  ">
        {allApplied && allApplied.length > 0 ? (
          <div className="flex line-clamp-3 text-ellipsis flex-col w-full h-full text-white rounded-2xl bg-gradient-to-t from-blue-950/70 via-cyan-600/30 to-cyan-200/10 items-center justify-center overflow-auto">
            <h2 className=" text-lg text-white font-semibold">
              {allApplied[0].title}
            </h2>
            <p className=" text-[12px]">{allApplied[0].purpose}</p>
            <GiCash className="" size={80} color="#7cfc00" />

            <span className=" w-full justify-center gap-2 items-center flex">
              <p className="text-[12px]">by</p>
              <h3 className=" text-[18px] ">{allApplied[0].lendername}</h3>
              <p className=" text-cyan-300 text-[13px] "> - pending...</p>
            </span>
            <span className=" w-full py-3 flex">
              <div className=" w-full flex justify-center items-center flex-col">
                <p>R{allApplied[0].principal_offer}</p>
                <p>offered</p>
              </div>
              <div className=" w-full flex justify-center items-center flex-col">
                <p>{allApplied[0].interest_rate}%</p>
                <p>interest</p>
              </div>
              <div className=" w-full flex justify-center items-center flex-col">
                <p>R{allApplied[0].total_due}</p>
                <p>due</p>
              </div>
            </span>
          </div>
        ) : (
          <div className=" w-full h-full flex justify-center items-center bg-gradient-to-b from-cyan-950/60 via-cyan-800/30 to-transparent rounded-full ">
            <p className=" text-lg font-semibold text-neutral-200 ">
              You haven't applied for anything yet!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LDApplied;
