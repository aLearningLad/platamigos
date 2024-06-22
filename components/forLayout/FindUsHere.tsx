import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const FindUsHere = () => {
  return (
    <div className="w-full lg:w-2/12 gap-[5px] h-full flex flex-row lg:flex-col lg:justify-start justify-center items-center">
      <h3 className="w-full justify-start hidden lg:flex text-white font-semibold text-[20px]">
        {"Let's"} Chat
      </h3>
      <div className=" w-full h-full text-neutral-200 text-[12px]">
        <span className=" flex gap-1 items-center">
          <FaLocationDot size={16} />
          <p className="text-lg flex justify-center items-center lg:justify-start lg:text-[12px] group-hover:scale-95 group-hover:text-white transition duration-500 ease-in-out cursor-pointer">
            1928 Starlane Ave, The Moon, Milkyway
          </p>
        </span>
        <span className=" flex gap-1 items-center">
          <MdEmail size={16} />
          <p className="text-lg flex justify-center items-center lg:justify-start lg:text-[12px] group-hover:scale-95 group-hover:text-white transition duration-500 ease-in-out cursor-pointer">
            helpme@platamail.com
          </p>
        </span>
        <span className=" flex gap-1 items-center">
          <FaLocationDot size={16} />
          <p className="text-lg flex justify-center items-center lg:justify-start lg:text-[12px] group-hover:scale-95 group-hover:text-white transition duration-500 ease-in-out cursor-pointer">
            The Moon, Milkyway
          </p>
        </span>
        <span className=" flex gap-1 items-center">
          <FaLocationDot size={16} />
          <p className="text-lg flex justify-center items-center lg:justify-start lg:text-[12px] group-hover:scale-95 group-hover:text-white transition duration-500 ease-in-out cursor-pointer">
            The Moon, Milkyway
          </p>
        </span>
      </div>
    </div>
  );
};

export default FindUsHere;
