import { getGoogleDetailsServer } from "@/server-actions/googleDetails";
import Image from "next/image";
import React from "react";

const SearchBar = async () => {
  const googleProfilePic = await getGoogleDetailsServer();
  return (
    <div className=" w-full sticky top-0 flex flex-col border-2 border-white h-[15%]">
      <Image
        src={googleProfilePic || "/assets/defaultdp.png"}
        alt="user profile image"
        width={50}
        height={50}
        className=" rounded-md overflow-clip"
      />
    </div>
  );
};

export default SearchBar;
