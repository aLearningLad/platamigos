"use client";

import { Ildallbody } from "@/interfaces";
import { Tloanstoshow } from "@/types";

const LDAllBody: React.FC<Ildallbody> = ({ allLoans, loansToShow }) => {
  return (
    <div className=" h-full w-full overflow-auto flex flex-col px-2 pt-3 pb-1 border-4 border-white ">
      {loansToShow.map((loan: Tloanstoshow) => (
        <div className=" text-white text-lg">Type of loan: {loan.APPLIED}</div>
      ))}
    </div>
  );
};

export default LDAllBody;
