import React from "react";
import PriorityLeft from "./PriorityLeft";
import PriorityRight from "./PriorityRight";

const PriorityFeed = () => {
  return (
    <section className="w-full h-screen md:h-[80vh] lg:h-[65vh] flex flex-col lg:flex-row  border-4 border-white ">
      <PriorityLeft />
      <PriorityRight />
    </section>
  );
};

export default PriorityFeed;
