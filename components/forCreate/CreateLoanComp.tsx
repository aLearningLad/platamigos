"use client";

import { ChangeEvent, useState } from "react";
import CreateLeft from "./CreateLeft";
import CreateRight from "./CreateRight";

const CreateLoanComp = () => {
  const [title, setTitle] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<Date>();
  const [principle, setPrinciple] = useState<number>(300);

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
        />
        <div className="w-[2px] h-[90%] bg-neutral-400/20 rounded-lg  " />
        <CreateRight />
      </div>
    </div>
  );
};

export default CreateLoanComp;
