"use client";

import { getAllApplied } from "@/utils/myFxns/getAllApplied";
import { useEffect, useState } from "react";

const LDApplied = () => {
  const [allApplied, setAllApplied] = useState<any[]>();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllApplied();
        console.log("This is the data for all applied: ", data);
        setAllApplied(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className=" flex w-1/2 border-4 border-white flex-col text-white relative">
      <header className=" w-full flex justify-center py-2">
        <h1 className=" text-lg ">Loans {"you've"} applied for</h1>
      </header>
      <div className=" w-full h-full border-2 border-yellow-300 flex flex-col "></div>
    </div>
  );
};

export default LDApplied;
