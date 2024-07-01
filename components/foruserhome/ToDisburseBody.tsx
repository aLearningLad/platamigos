"use client";

import { clientToDisburse } from "@/utils/myFxns/clientToDisburse";
import { useEffect, useState } from "react";

const ToDisburseBody = () => {
  const [toDisburse, setToDisburse] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getResult = async () => {
      try {
        const disbursedData = await clientToDisburse();
        setToDisburse(disbursedData);
        console.log(disbursedData);
      } catch (error) {
        console.log("Error fetching loans to disburse: ", error);
      }
    };

    getResult();
  }, []);

  return (
    <div className="w-full h-full overflow-auto flex flex-col items-center gap-3  ">
      {toDisburse?.map((card: any) => (
        <div className=" text-white">This is a loan</div>
      ))}
    </div>
  );
};

export default ToDisburseBody;
