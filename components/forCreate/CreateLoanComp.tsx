"use client";

import CreateLeft from "./CreateLeft";
import CreateRight from "./CreateRight";

const CreateLoanComp = () => {
  return (
    <div className="flex-col lg:flex-row flex justify-center items-center w-full h-full bg-red-600">
      <CreateLeft />
      <CreateRight />
    </div>
  );
};

export default CreateLoanComp;
