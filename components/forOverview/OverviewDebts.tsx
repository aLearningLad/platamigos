import React from "react";
import DebtTab from "./DebtTab";

const OverviewDebts = async () => {
  const falsedata = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className=" w-full relative lg:w-1/2 flex flex-col items-center lg:items-start px-2 md:px-3 lg:px-5 xl:px-7 py-3 lg:py-5">
      <header className=" w-full sticky top-0 bg-black">
        <h1 className=" text-3xl font-semibold">Debts</h1>
      </header>
      <div className="grid h-full w-full grid-cols-1 gap-6 md:gap-4 p-2 md:p-4 lg:p-8 overflow-auto border-4 border-white">
        {falsedata.map((tab) => (
          <DebtTab />
        ))}
      </div>
    </div>
  );
};

export default OverviewDebts;
