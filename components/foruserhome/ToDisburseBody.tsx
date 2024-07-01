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

  const handleToDisburseModal = () => {
    alert("clicked!");
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-7 overflow-auto  ">
      {toDisburse?.map((card: Ttodisburse) => (
        <div
          key={card.loanid}
          className="w-full min-h-[15vh] flex flex-col items-center justify-center border-2 border-neutral-300 "
        >
          <section className=" w-full h-[75%] flex ">
            <div className=" w-full h-full flex justify-center items-center flex-col">
              <p>R{card.principal_amount}</p>
              <p>to disburse</p>
            </div>
            <div className="w-full h-full flex justify-center items-center flex-col">
              <p>{card.interest_rate}%</p>
              <p>interest</p>
            </div>
            <div className=" w-full h-full flex justify-center items-center flex-col">
              <p>you stand to make</p>
              <p>R{card.total_due}</p>
            </div>
            <div className=" w-full h-full flex justify-center items-center flex-col">
              <p>{card.term}</p>
              <p>months</p>
            </div>
          </section>
          {card.number_of_applicants > 0 ? (
            <section className=" w-full h-[25%] flex justify-center gap-3">
              <p>Number of applicants:</p>
              <p>{card.number_of_applicants}</p>
            </section>
          ) : (
            <section className=" w-full h-[25%] flex justify-center gap-3 items-center">
              <p>No applicants yet</p>
              <IoIosInformationCircle
                size={20}
                onClick={handleToDisburseModal}
                className=" cursor-pointer"
              />
            </section>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToDisburseBody;
