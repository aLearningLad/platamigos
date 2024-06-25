import Link from "next/link";
import React from "react";
import { MdCreateNewFolder } from "react-icons/md";
import MyStatsBtn from "./MyStatsBtn";
import { GrMoney } from "react-icons/gr";
import { FaExternalLinkAlt } from "react-icons/fa";
import ChatBtn from "./ChatBtn";
import MoreOptionsBtn from "./MoreOptionsBtn";

const PriorityLeft = () => {
  return (
    <div className="h-full wallpaper w-full lg:w-[70%] p-1 lg:p-3 flex flex-col lg:flex-row text-white rounded-lg lg:rounded-xl xl:rounded-2xl">
      {/* FAR LEFT */}
      <section className="w-full h-1/2 lg:h-full flex flex-col items-start justify-between">
        <div className=" w-full py-1 flex items-start justify-between gap-4 lg:gap-7 flex-col">
          <div className=" w-full flex items-center justify-between">
            <h1 className=" text-[12px] font-[700] text-neutral-50 ">
              Next Lending Fest
            </h1>
            <span className="text-[8px] text-white flex flex-row gap-1 items-center">
              Art by Leonardo AI&copy;{" "}
              <Link target="_blank" href={"https://leonardo.ai/"}>
                <FaExternalLinkAlt />
              </Link>
            </span>
          </div>
          <div className=" w-full flex justify-start items-center py-3  gap-1">
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
        </div>

        <div className="w-full h-[40%] flex flex-col items-start justify-end">
          {/* TOP 2 LOAN RECOMMENDATIONS */}
          <div className="w-full h-[28%] flex justify-start items-end mb-4 lg:mb-12">
            <div className="relative h-full lg:w-[10%] flex">
              <div className=" w-[39px] h-[39px] rounded-full bg-white absolute left-2" />
              <div className=" w-[39px] h-[39px] rounded-full bg-neutral-400 absolute left-6" />
            </div>
            <div className=" w-full flex justify-start flex-col items-start h-full  ">
              <div className=" w-full flex justify-between items-end">
                <h3 className=" text-[20px] font-semibold">
                  See recommended peers
                </h3>
                <h3 className=" text-[28px] font-semibold">
                  Thu, Jul 12, 2024
                </h3>
              </div>
              <span className=" w-full justify-between flex flex-row h-fit items-center ">
                <div className=" flex items-center h-fit">
                  <p className="text-neutral-200 text-[12px]">Leroy Daniels</p>
                  <div className="h-[90%] w-[0.5px] rounded-lg bg-neutral-200 mx-1 " />
                  <p className="text-neutral-200 text-[12px]">Thabiso M.</p>
                </div>
                <div className=" text-white">09:00am - 10:00am</div>
              </span>
            </div>
          </div>

          <div className=" w-full flex justify-between">
            <div className=" w-fit mb-3 lg:mb-4 flex gap-2 lg:gap-5">
              <Link
                className=" w-fit px-2 flex gap-1 items-center bg-neutral-900 rounded-md p-1 text-white hover:scale-95 transition duration-500 ease-in-out "
                href="/create"
              >
                <MdCreateNewFolder size={20} color="#7cfc00" />
                <p className="text-[12px]  text-white hover:text-neutral-300 ">
                  Add a new listing
                </p>
              </Link>
              <Link
                className=" w-fit px-2 flex gap-1 items-center bg-neutral-900 rounded-md p-1 text-white hover:scale-95 transition duration-500 ease-in-out "
                href="/all"
              >
                <GrMoney size={20} color="white" />
                <p className="text-[12px]  text-white hover:text-neutral-300 ">
                  Browse My Loans
                </p>
              </Link>
              <MyStatsBtn />
            </div>

            <div className=" flex items-center gap-1">
              <ChatBtn />
              <MoreOptionsBtn />
            </div>
          </div>
        </div>
      </section>

      {/* FAR RIGHT */}
      {/* <section className=" w-full lg:w-[30%] h-1/2 lg:h-full border-2 border-red-600 flex flex-col items-end justify-between ">
        <span className=" w-full text-[8px] text-white flex flex-row gap-1 items-center">
          Art by Leonardo AI&copy;{" "}
          <Link target="_blank" href={"https://leonardo.ai/"}>
            <FaExternalLinkAlt />
          </Link>
        </span>
      </section> */}
    </div>
  );
};

export default PriorityLeft;
