import { footercontactdata } from "@/devdata/footercontactdata";
import React from "react";

const FooterContact = () => {
  return (
    <div className=" w-full lg:w-2/12 xl:w-1/12 gap-1 h-full flex flex-row lg:flex-col lg:justify-center justify-center items-center">
      <h3 className=" w-full justify-start hidden lg:flex text-white font-semibold text-[16px]">
        Company
      </h3>
      {footercontactdata.map((item) => (
        <span className="text-neutral-200 lg:text-neutral-400 group w-full">
          <p
            className=" text-lg flex justify-center items-center lg:justify-start lg:text-[12px] group-hover:scale-95 group-hover:text-white transition duration-500 ease-in-out cursor-pointer"
            key={item}
          >
            {item}
          </p>
        </span>
      ))}
    </div>
  );
};

export default FooterContact;
