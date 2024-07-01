import React from "react";
import LoanHubNav from "./LoanHubNav";
import LoanHubBody from "./LoanHubBody";

const HomeMiddleTabs = () => {
  return (
    <div className=" w-full min-h-[60vh] px-20 pt-8 lg:flex hidden flex-col items-center text-white border-4 border-white">
      <header className="w-full py-5 flex justify-center items-center flex-col">
        <h1 className=" text-3xl font-extrabold ">Loan Hub</h1>
        <LoanHubNav />
      </header>
      <LoanHubBody />
    </div>
  );
};

export default HomeMiddleTabs;
