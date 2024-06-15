"use client";

import { SlOptions } from "react-icons/sl";

const MoreOptionsBtn = () => {
  const handleMoreOptionsBtn = () => {
    alert("Display more options tiny modal");
  };

  return (
    <button
      onClick={handleMoreOptionsBtn}
      className=" w-fit h-fit bg-neutral-900 flex justify-center items-center py-4 md:py-5  xl:py-1 px-2 rounded-lg text-xl lg:text-[12px] text-white"
    >
      <SlOptions />
    </button>
  );
};

export default MoreOptionsBtn;
