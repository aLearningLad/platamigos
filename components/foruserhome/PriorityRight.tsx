import React from "react";
import FeedLoanMiniCard from "./FeedLoanMiniCard";

const PriorityRight = () => {
  return (
    <div className=" h-full w-full lg:w-[30%] overflow-auto border-4 border-white flex flex-col items-center gap-3 md:gap-5 lg:gap-8">
      <FeedLoanMiniCard />
    </div>
  );
};

export default PriorityRight;
