import Link from "next/link";
import React from "react";
import { MdCreateNewFolder } from "react-icons/md";
import MyStatsBtn from "./MyStatsBtn";

const PriorityLeft = () => {
  return (
    <div className="h-full w-full lg:w-[70%] p-1 lg:p-3 flex flex-col lg:flex-row text-white">
      {/* FAR LEFT */}
      <section className="w-full lg:w-[70%] h-1/2 lg:h-full flex flex-col items-start justify-between">
        <div className=" w-full py-1 flex justify-start ">
          <h1 className=" text-[12px] font-[700] text-neutral-50 ">
            Next Lending Fest
          </h1>
        </div>
        <div className=" w-full flex justify-start items-center py-3 lg:py-5  gap-1">
          <span className="flex justify-start items-center w-fit flex-col  ">
            <p className=" text-3xl font-semibold">03</p>
            <p className=" text-[12px]">days</p>
          </span>
          <p>:</p>
          <span className="flex justify-start items-center w-fit flex-col ">
            <p className="text-3xl font-semibold">17</p>
            <p className="text-[12px]">hours</p>
          </span>
        </div>

        <div className="w-full h-[40%] border-2 border-white flex flex-col items-start justify-end">
          {/* TOP 2 LOAN RECOMMENDATIONS */}
          <div className=" w-full h-[28%] border-2 border-white flex justify-start items-center">
            <div className=" relative h-full border-2 border-green-400 lg:w-[10%] flex">
              <div className=" w-[35px] h-[35px] rounded-full bg-white absolute left-0" />
              <div className=" w-[35px] h-[35px] rounded-full bg-neutral-400 absolute left-4" />
            </div>
            <div className=" w-full flex justify-start flex-col items-start h-full pl-1  ">
              <h3 className=" text-lg font-semibold">See recommended peers</h3>
              <span className=" flex flex-row h-fit items-center ">
                <p className="text-neutral-200 text-[12px]">Leroy Daniels</p>
                <div className="h-[90%] w-[0.5px] rounded-lg bg-neutral-400 mx-1 " />
                <p className="text-neutral-200 text-[12px]">Thabiso M.</p>
              </span>
            </div>
          </div>

          <div className=" border-2 border-white w-full flex gap-2 lg:gap-5">
            <Link
              className=" w-fit px-2 flex gap-1 items-center"
              href="/create"
            >
              <MdCreateNewFolder size={20} color="white" />
              <p className=" text-[12px] text-neutral-200 ">
                Add a new listing
              </p>
            </Link>
            <MyStatsBtn />
          </div>
        </div>
      </section>

      {/* FAR RIGHT */}
      <section className=" w-full lg:w-[30%] h-1/2 lg:h-full bg-red-600 "></section>
    </div>
  );
};

export default PriorityLeft;
