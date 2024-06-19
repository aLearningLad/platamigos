"use client";

import { ChangeEvent, useState } from "react";
import CreateLeft from "./CreateLeft";
import CreateRight from "./CreateRight";
import { TinterestStates } from "@/types";

const CreateLoanComp = () => {
  const [title, setTitle] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<Date>();
  const [principle, setPrinciple] = useState<number>(300);
  const [totalDue, setTotalDue] = useState<number>(0);
  const [interestValue, setInterestValue] = useState<TinterestStates>({
    unitValue: 11,
    decimalValue: 0,
  });
  const [interestRate, setInterestRate] = useState<number>(11);
  const [instalment, setInstalment] = useState<number>(4);
  const [repaymentTerm, setRepaymentTerm] = useState<number>(3);

  return (
    <div className="flex-col  flex justify-center items-center w-full h-full">
      <header className=" w-full flex h-fit py-3 lg:py-4 justify-center items-center">
        <h1 className="text-4xl md:text-3xl lg:text-4xl text-white">
          Create an Offer
        </h1>
      </header>

      <div className=" flex flex-col lg:flex-row w-full h-full items-center justify-center">
        <CreateLeft
          purpose={purpose}
          setPurpose={setPurpose}
          setTitle={setTitle}
          title={title}
          principle={principle}
          setPrinciple={setPrinciple}
          totalDue={totalDue}
          interestValue={interestValue}
          setInterestValue={setInterestValue}
        />
        <div className="w-[2px] h-[90%] bg-neutral-400/20 rounded-lg  " />
        <CreateRight
          instalment={instalment}
          interest={interestRate}
          months={repaymentTerm}
          setInstalment={setInstalment}
          setMonths={setRepaymentTerm}
          principle={principle}
        />
      </div>
    </div>
  );
};

export default CreateLoanComp;
