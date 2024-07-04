import { mobilenavdata } from "@/devdata/mobilenavdata";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileOptionsBtn from "./MobileOptionsBtn";

const MobileNav = () => {
  return (
    <nav className="w-full h-[10vh] backdrop-blur-md bg-neutral-700/60 md:h-[12vh] sticky bottom-0 lg:hidden flex justify-around items-center">
      {mobilenavdata.map((link) => (
        <Link
          className=" w-fit h-full flex flex-col items-center justify-center gap-1 text-center "
          href={link.linkref}
          key={link.linkID}
        >
          {link.icon}
          <p className=" text-lg text-white ">{link.linkname}</p>
        </Link>
      ))}

      <MobileOptionsBtn />
    </nav>
  );
};

export default MobileNav;
