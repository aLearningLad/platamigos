import { mobilenavdata } from "@/devdata/mobilenavdata";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNav = () => {
  return (
    <nav className="w-full h-[10vh] backdrop-blur-md bg-neutral-700/60 md:h-[12vh] sticky bottom-0 lg:hidden flex justify-around items-center">
      {mobilenavdata.map((link) => (
        <div>{link.icon}</div>
      ))}

      <button>
        <GiHamburgerMenu size={20} color="white" />
      </button>
    </nav>
  );
};

export default MobileNav;
