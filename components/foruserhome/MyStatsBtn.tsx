"use client";

import { IoIosInformationCircle } from "react-icons/io";

const MyStatsBtn = () => {
  const showStats = () => {
    alert("This was clicked!");
  };

  return (
    <button
      className=" cursor-pointer p-1 bg-neutral-600 rounded-md "
      onClick={showStats}
    >
      <IoIosInformationCircle color="white" size={20} className="" />
    </button>
  );
};

export default MyStatsBtn;
