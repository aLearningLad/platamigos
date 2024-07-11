import { landingnavdata } from "@/devdata/landingnavdata";
import React from "react";

const LandingNav = () => {
  return (
    <nav className="w-full lg:flex hidden sticky top-0 left-0 right-0 h-[15vh] lg:h-[10vh] justify-center items-center border-4 border-white">
      {landingnavdata.map((btn) => (
        <button
          className="text-[14px] group text-neutral-400 hover:text-white cursor-pointer flex justify-center items-center flex-col  "
          key={btn.navId}
        >
          {btn.navtitle}
          <div className=" w-[6px] h-[6px] rounded-full bg-transparent group-hover:bg-white transition-all duration-300 ease-in-out " />
        </button>
      ))}
    </nav>
  );
};

export default LandingNav;
