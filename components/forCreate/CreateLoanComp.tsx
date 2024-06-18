"use client";

import CreateLeft from "./CreateLeft";
import CreateRight from "./CreateRight";

const CreateLoanComp = () => {
  return (
    <div className="flex-col  flex justify-center items-center w-full h-full">
      <header className=" w-full flex h-fit py-3 lg:py-4 justify-center items-center">
        <h1 className=" text-4xl md:text-3xl lg:text-4xl text-white">
          Create an Offer
        </h1>
      </header>
      <div className=" flex flex-col lg:flex-row w-full h-full">
        <CreateLeft />
        <CreateRight />
      </div>
    </div>
  );
};

export default CreateLoanComp;
