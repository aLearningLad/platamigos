import { landingnavdata } from "@/devdata/landingnavdata";
import React from "react";
import LandingNavBtn from "./LandingNavBtn";

const LandingNav = () => {
  return (
    <nav className="w-full lg:flex gap-5 xl:gap-8 hidden sticky top-0 left-0 right-0 h-[15vh] lg:h-[10vh] justify-center items-center border-4 border-white">
      {landingnavdata.map((btn) => (
        <LandingNavBtn params={btn} />
      ))}
    </nav>
  );
};

export default LandingNav;
