import { hubnames } from "@/devdata/hubnames";
import React from "react";
import HubBtn from "./HubBtn";

const LoanHubNav = () => {
  return (
    <nav className=" flex justify-center items-center w-full">
      <ul className="w-full flex justify-center items-center h-full gap-5 xl:gap-7">
        {hubnames.map((btn) => (
          <HubBtn
            hubName={btn.charAt(0).toUpperCase() + btn.slice(1)}
            key={btn}
          />
        ))}
      </ul>
    </nav>
  );
};

export default LoanHubNav;
