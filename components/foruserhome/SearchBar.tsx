"use client";

import { getGoogleDetailsClient } from "@/utils/myFxns/getGoogleDetailsClient";
import Image from "next/image";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [userDP, setUserDP] = useState("");

  useEffect(() => {
    const getProfilePic = async () => {
      try {
        const result = await getGoogleDetailsClient();
        const googleProfilePic = result?.user_metadata.avatar_url;

        setUserDP(googleProfilePic);
      } catch (error) {
        console.log("Error getting profile picture: ", error);
      }
    };

    getProfilePic();
  }, []);

  const googleDetails = getGoogleDetailsClient();

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
          className="w-full focus:outline-none h-full placeholder:text-neutral-200 bg-blue-950 rounded-md text-white p-2 text-[14px]"
          placeholder="Search by title..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
