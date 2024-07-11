import { finalfooterdata } from "@/devdata/finalfooterdata";
import React from "react";

const LandingFooter = () => {
  return (
    <footer className=" w-full px-2 h-[15vh] lg:h-[8vh] flex justify-center items-center border-white border-2 flex-col ">
      <div className=" w-1/2 h-full flex justify-center items-center text-[14px] text-center ">
        Platamigos&copy; 2024 - A HillSawft Platform
      </div>
      <div className=" w-full h-1/2 flex justify-center gap-5 lg:gap-7 text-[14px] ">
        {finalfooterdata.map((item) => (
          <p
            className=" text-[12px] text-neutral-300 hover:text-white cursor-pointer text-center "
            key={item}
          >
            {item}
          </p>
        ))}
      </div>
    </footer>
  );
};

export default LandingFooter;
