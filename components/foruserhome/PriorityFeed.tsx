import React from "react";
import PriorityLeft from "./PriorityLeft";
import PriorityRight from "./PriorityRight";

const PriorityFeed = () => {
  return (
    <section className="w-full wallpaper h-screen md:h-[80vh] lg:h-[65vh] rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden ">
      <div className="flex flex-col z-10 lg:flex-row h-full w-full backdrop-blur-md bg-transparent lg:p-6 xl:p-9 rounded-lg lg:rounded-xl xl:rounded-2xl">
        <PriorityLeft />
        <PriorityRight />
      </div>
    </section>
  );
};

export default PriorityFeed;
