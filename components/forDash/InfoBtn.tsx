"use client";

import { IoInformationCircle } from "react-icons/io5";

const InfoBtn = () => {
  const handleInfo = () => {
    alert("Info btn clicked!");
  };

  return (
    <button
      onClick={handleInfo}
      className="w-fit px-2 lg:px-3 text-lg hover:bg-cyan-300 transition-all duration-300 ease-in-out hover:scale-95 hover:text-black bg-cyan-700 flex justify-center items-center  text-white rounded-md py-1"
    >
      <IoInformationCircle size={20} />
    </button>
  );
};

export default InfoBtn;
