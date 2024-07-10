"use client";

import { Isearchbar } from "@/interfaces";
import Image from "next/image";

const SearchBar: React.FC<Isearchbar> = ({ userDP }) => {
  return (
    <div className="w-full sticky top-0 flex py-2 mb-2 h-[20%] gap-1">
      <div className=" w-[7%] h-full relative rounded-full overflow-clip py-1">
        <Image
          src={userDP || "/assets/defaultdp.png"}
          alt="user profile image"
          fill
          className="overflow-clip absolute"
        />
      </div>
      <div className=" w-full h-full pl-2 pr-3 flex justify-center items-center">
        <input
          type="text"
          className="w-full focus:outline-none h-full placeholder:text-neutral-200 bg-blue-950/50 rounded-md text-white p-2 text-[14px]"
          placeholder="Search by title..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
