"use client";

import { Ttodisburse } from "@/types";
import { clientToDisburse } from "@/utils/myFxns/clientToDisburse";
import { useEffect, useState } from "react";
import DisburseBtn from "./DisburseBtn";
import { IoIosInformationCircle } from "react-icons/io";

const ToDisburseBody = () => {
  const [toDisburse, setToDisburse] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getResult = async () => {};

    getResult();
  }, []);

  const handleToDisburseModal = () => {
    alert("clicked!");
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-7 overflow-auto  ">
      show applicants here
    </div>
  );
};

export default ToDisburseBody;
