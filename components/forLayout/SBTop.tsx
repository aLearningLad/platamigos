import { navdata } from "@/devdata/navdata";
import React from "react";
import NavCompBtn from "./NavCompBtn";

const SBTop = () => {
  return (
    <section className="w-full h-[55%] bg-white flex flex-col items-center justify-start ">
      <ul>
        {navdata.map((navlink) => (
          <NavCompBtn
            linkName={navlink.linkname}
            uniqueLink={navlink.linkref}
            key={navlink.linkId}
          />
        ))}
      </ul>
    </section>
  );
};

export default SBTop;
