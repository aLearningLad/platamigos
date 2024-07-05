import { Tloansfromdb, TloansfromdbForMiniCard } from "@/types";
import React from "react";
import { ApplyForLoanBtn } from "../utilComps";
import { createClient } from "@/utils/supabase/server";
import { GiCash } from "react-icons/gi";
import { IoInformationCircleSharp } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";
import ApplyModal from "./ApplyModalBtn";

const FeedLoanMiniCard: React.FC<TloansfromdbForMiniCard> = async ({
  ...params
}) => {
  const supabase = createClient();
  const thisUserId = (await supabase.auth.getUser()).data.user?.id;

  return (
    <div
      className={`text-white group min-h-[50vh] max-h-full ${
        thisUserId === params.lenderid ? "hidden" : "flex"
      } flex-col odd:items-start items-end justify-between p-5 lg:justify-center odd:text-start text-end md:min-h-[30vh] min-w-full lg:p-2 lg:min-h-[45vh] lg:w-full odd:bg-orange-600/80 even:bg-cyan-600/70 rounded-2xl md:p-2 lg:bg-gradient-to-br lg:hover:bg-orange-500 lg:odd:hover:bg-pink-700 from-purple-950/90 via-purple-950/20 cursor-pointer hover:scale-95 transition-all duration-300 to-pink-700/10 xl:rounded-xl lg:rounded-lg`}
    >
      <h1
        className={`text-white flex text-2xl font-semibold lg:font-normal lg:text-[16px] ${
          params.index! % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } items-center gap-1`}
      >
        <GiCash size={16} color="7cfc00" /> {params.title}
      </h1>
      <p className=" text-[18px] lg:text-[12px] lg:mb-2\ text-neutral-100  lg:text-neutral-300 text-ellipsis line-clamp-1 ">
        {params.purpose}
      </p>

      <div className="w-full h-[40%] flex flex-col group justify-center p-2 group-hover:bg-white/80 transition-all duration-300 ease-in-out items-center text-center bg-neutral-400/30 rounded-md lg:rounded-lg">
        <IoInformationCircleSharp
          className="text-white mb-1 lg:mb-2 xl:mb-3 group-hover:scale-150 transition-all duration-300 ease-in group-hover:text-black "
          size={16}
        />
        <h4 className=" text-2xl group-hover:text-black lg:text-2xl font-semibold group-hover:scale-90 transition-all duration-300 ease-in-out ">
          R{params.principal_offer}
        </h4>
        <span className="w-full flex items-center group-hover:gap-2 justify-center gap-1 group-hover:text-black">
          <p className=" text-[12px] group-hover:scale-125 transition-all duration-300 ease-in-out group-hover:font-semibold ">
            @{params.interest_rate}%
          </p>
          <p className=" text-[10px] ">over</p>
          <span className=" flex flex-row gap-1 items-center">
            <p className="text-[14px] group-hover:scale-125 transition-all duration-300 ease-in-out group-hover:font-semibold">
              {params.months}
            </p>
            <p className=" text-[12px] ">months</p>
          </span>
        </span>
      </div>
      <span
        className={`w-full flex p-1 lg:p-2 ${
          (params.index as number) % 2 === 0 ? "justify-end" : "justify-start"
        } gap-1 mt-2 lg:m-3`}
      >
        <h3 className=" text-lg text-[12px] ">Total due:</h3>
        <h2 className=" text-xl text-[20px] font-semibold">
          R{params.total_due}
        </h2>
      </span>
      <span className="flex items-center gap-1">
        <p className=" text-lg lg:text-[12px] ">exp.</p>
        <p className="text-xl lg:text-[14px] font-semibold ">
          {params.expiry_date as string}
        </p>
        <GoClockFill size={16} />
      </span>

      <span className="w-full flex justify-between px-1 lg:px-2 items-center">
        <p className="text-lg lg:text-[16px] group-hover:scale-90 transition-all duration-500 ease-in-out text-black rounded-md px-2 lg:px-3 py-1 bg-white ">
          {params.lendername}
        </p>

        <ApplyModal loan_id={params.loan_id} />
      </span>
      {/* <ApplyForLoanBtn
        loan_id={params.loan_id}
        google_id={thisUserId as string}
      /> */}
    </div>
  );
};

export default FeedLoanMiniCard;
