import React from "react";
import LoanHubNav from "./LoanHubNav";
import LoanHubBody from "./LoanHubBody";

const HomeMiddleTabs = () => {
  return (
    <div className=" w-full min-h-[60vh] pt-4 md:pt-6 lg:pt-8 flex flex-col lg:flex-col items-center text-white border-4 border-white">
      <header className=" w-full py-2 flex justify-center items-center flex-col">
        <h1>Loan Hub</h1>
        <LoanHubNav />
      </header>
      <LoanHubBody />
    </div>
  );
};

export default HomeMiddleTabs;
