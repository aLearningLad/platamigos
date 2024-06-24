import Link from "next/link";
import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";

const DashBalance = () => {
  return (
    <section className=" w-full bg-gradient-to-br border-4 border-transparent hover:scale-95 transition-all duration-300 ease-in-out hover:border-neutral-400 from-blue-950 via-purple-950/40 to-blue-900/20 items-start text-start p-1 md:p-2 lg:p-5 h-full rounded-lg lg:rounded-xl xl:rounded-[22px] flex flex-col text-white">
      <h1 className="dashlabels">Cash Balance</h1>
      <div className=" h-full flex w-full">
        <div className="flex w-full  lg:w-1/2 h-full justify-around lg:justify-between items-stretch flex-col lg:pr-2">
          <h1 className=" text-4xl md:text-3xl lg:text-5xl font-bold text-center lg:text-start">
            R4233.22
          </h1>
          <p className=" text-xl lg:text-[16px] text-neutral-300 lg:text-start text-center">
            You have around <b className=" font-bold text-2xl">R4233.22</b>{" "}
            available to disburse.
          </p>
          <Link
            className="w-full text-2xl lg:text-lg hover:bg-cyan-300 transition-all duration-300 ease-in-out hover:scale-95 hover:text-black bg-cyan-700 flex justify-center items-center  text-white rounded-md p-3 lg:py-1"
            href="/create"
          >
            Publish Offer
          </Link>
        </div>
        <div className=" lg:flex hidden lg:w-1/2 h-full justify-center items-center ">
          <FcMoneyTransfer size="70%" />
        </div>
      </div>
    </section>
  );
};

export default DashBalance;
