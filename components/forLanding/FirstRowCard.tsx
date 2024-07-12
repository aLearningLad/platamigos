import { Ifirstrowcard } from "@/interfaces";
import React from "react";

const FirstRowCard: React.FC<Ifirstrowcard> = ({
  CTA,
  tileId,
  blurb,
  heading,
  tileMedia,
}) => {
  if (tileMedia) {
    return (
      <div
        className={`w-full group h-fit ${
          tileId === 18787 &&
          "bg-gradient-to-b hover:scale-95 cursor-pointer from-purple-600/60 via-purple-600/20 to-transparent hover:bg-purple-900 transition-all duration-500 ease-in-out"
        } rounded-xl flex flex-col items-start`}
      >
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
      <div className=" h-[40vh] hover:scale-95 group transition-all duration-500 ease-in-out w-10/12 rounded-xl bg-cyan-600 flex flex-col items-center text-center justify-center ">
        <h3 className=" text-[14px] font-semibold">{heading}</h3>
        <p>{blurb}</p>
        <div className=" h-[10vh] flex justify-center items-center w-full ">
          <button className=" w-8/12 group-hover:scale-105 h-fit py-2 text-lg text-black border-2 border-white hover:bg-transparent hover:text-white transition-all duration-500 ease-in-out bg-white rounded-md ">
            {CTA}
          </button>
        </div>
      </div>
    );
  }
};

export default FirstRowCard;
