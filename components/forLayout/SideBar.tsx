import React from "react";
import SBTop from "./SBTop";
import SBBottom from "./SBBottom";

const SideBar = () => {
  return (
    <nav className=" h-screen hidden sticky top-0 bottom-0 py-4 xl:py-7 px-[2px] left-0 lg:flex flex-col items-center justify-between w-0 lg:w-[5%] xl:w-[3%]">
      {/* TOP PART  */}
      <SBTop />

      {/* BOTTOM PART */}
      <SBBottom />
    </nav>
  );
};

export default SideBar;
