import React from "react";
import StartBtn from "./StartBtn";

const LandingRightSide = () => {
  return (
    <div className="w-full lg:pl-7 lg:w-8/12 flex flex-col lg:items-start lg:text-start items-center text-center justify-center ">
      <h1 className=" text-2xl lg:text-5xl font-extrabold">Platamigos</h1>

      <h3 className=" text-lg lg:text-3xl ">
        Easily lend & borrow money amongst <br className=" hidden lg:flex" />
        peers. <i>You</i> are in control
      </h3>
      <p className=" text-[14px] lg:text-[16px] w-full lg:w-8/12 ">
        Earn steady interest income on your money, offer out longer payment
        terms for borrowers with great lending scores, or adjust for quick
        capital turnaround, the power is entirely yours.
      </p>
      <StartBtn />
    </div>
  );
};

export default LandingRightSide;
