import React from "react";
import LandingLeftSide from "./LandingLeftSide";
import LandingRightSide from "./LandingRightSide";
import LandingNav from "./LandingNav";

const LandingMain = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col p-3 lg:p-7">
      <LandingNav />
      <section className=" w-full h-full border-2 border-red-600 flex">
        <LandingLeftSide />
        <LandingRightSide />
      </section>
    </div>
  );
};

export default LandingMain;
