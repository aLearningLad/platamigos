import { Ifirstrowcard } from "@/interfaces";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";

const FirstRowCard: React.FC<Ifirstrowcard> = ({
  CTA,
  tileId,
  blurb,
  heading,
  tileMedia,
}) => {
  if (tileId === 18787) {
    return (
      <div className="w-full group h-fit bg-gradient-to-b hover:scale-95 cursor-pointer from-purple-700 via-purple-600/20 to-transparent hover:bg-purple-900 transition-all duration-500 ease-in-out rounded-xl flex flex-col items-start">
        <h2 className=" text-[18px] min-h-[5vh] p-2 font-extrabold text-neutral-300">
          {heading}
        </h2>
        <div className="min-h-[20vh] w-full flex gap-2 items-center ">
          <span className=" w-full h-full flex text-start text-[14px] ">
            <p className=" min-h-fit w-8/12 pl-2">{blurb}</p>
            <div className=" w-4/12 min-h-full flex justify-center items-center">
              {tileMedia}
            </div>
          </span>
        </div>
        <section className=" h-[8vh] px-2 py-3 w-full flex justify-start items-center ">
          <button className=" group-hover:bg-lime-500 w-fit px-6 py-2 text-[14px] hover:scale-95 text-white hover:bg-green-500 transition-all duration-500 ease-in-out bg-orange-500 rounded-md ">
            Get Started
          </button>
        </section>
      </div>
    );
  }

  if (tileId === 231126) {
    return (
      <div className=" h-fit hover:scale-95 group transition-all duration-500 ease-in-out w-10/12 rounded-3xl hover:bg-cyan-950 bg-gradient-to-t from-cyan-600/90 via-cyan-600/40 to-transparent flex flex-col items-center text-center justify-center ">
        <h3 className=" text-[14px] font-semibold flex items-center justify-center gap-2 py-7">
          {heading} <IoIosInformationCircle size={20} color="white" />
        </h3>
        <p className="text-[14px] pb-7">{blurb}</p>
        <div className="h-[10vh] flex justify-center items-center w-full ">
          <button className=" w-8/12 group-hover:scale-105 h-fit py-2 text-lg text-black border-2 border-white hover:bg-transparent hover:text-white transition-all duration-500 ease-in-out bg-white rounded-md ">
            {CTA}
          </button>
        </div>
      </div>
    );
  }

  if (tileId === 87261) {
    return (
      <div className=" h-fit w-11/12 flex flex-col my-8 bg-neutral-600/30 hover:bg-neutral-600/60 hover:scale-95 transition-all py-5 duration-500 ease-in-out px-4 rounded-2xl ">
        <section className=" h-[10vh] w-full flex justify-center gap-3">
          <span className=" w-full p-2 flex-col h-full bg-yellow-400 rounded-lg flex justify-center items-center text-white ">
            <p className=" text-xl font-extrabold text-black ">18</p>
            <p className=" text-[12px] text-black text-center ">
              months in service
            </p>
          </span>
          <span className=" w-full p-2 flex-col h-full bg-pink-600 rounded-lg flex justify-center items-center text-white ">
            <p className=" text-xl font-extrabold text-white ">23M</p>
            <p className=" text-[12px] text-white  text-center">transactions</p>
          </span>
          <span className=" w-full p-2 flex-col h-full bg-purple-700 rounded-lg flex justify-center items-center">
            <p className=" text-xl font-extrabold text-white ">2</p>
            <p className=" text-[12px] text-white text-center ">
              years in service
            </p>
          </span>
        </section>
        <section className=" w-full h-fit py-5 px-4 flex justify-center items-center text-center">
          <p className=" text-[14px] ">{blurb}</p>
        </section>
        <section className=" h-[7vh] w-full flex justify-end ">
          <button className=" text-[16px] group bg-transparent hover:bg-white flex gap-2 items-center justify-center rounded-md hover:text-black transition-all duration-300 ease-in h-fit py-2 px-4 ">
            <FaAnglesRight
              size={20}
              color="white"
              className=" group-hover:hidden"
            />{" "}
            {CTA}
          </button>
        </section>
      </div>
    );
  }
};

export default FirstRowCard;
