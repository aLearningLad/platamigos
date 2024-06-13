import React from "react";

const PriorityLeft = () => {
  return (
    <div className="h-full w-full lg:w-[70%] p-1 lg:p-3 flex flex-col lg:flex-row text-white">
      {/* FAR LEFT */}
      <section className="w-full lg:w-[70%] h-1/2 lg:h-full flex flex-col items-start justify-between">
        <div className=" w-full py-1 flex justify-start ">
          <h1 className=" text-[12px] font-[700] text-neutral-50 ">
            Next Lending Fest
          </h1>
        </div>
        <div className=" w-full flex justify-start items-center py-3 lg:py-5  gap-1">
          <span className="flex justify-start items-center w-fit flex-col  ">
            <p className=" text-3xl font-semibold">03</p>
            <p className=" text-[12px]">days</p>
          </span>
          <p>:</p>
          <span className="flex justify-start items-center w-fit flex-col ">
            <p className="text-3xl font-semibold">17</p>
            <p className="text-[12px]">hours</p>
          </span>
        </div>

        <div className="w-full h-[60%] border-2 border-white flex flex-col items-start">
          {/* TOP 2 LOAN RECOMMENDATIONS */}
          <div className=" w-full h-[20%] border-2 border-white flex justify-start items-center">
            <div className=" relative h-full border-2 border-green-400 lg:w-2/12 flex">
              <div className=" w-[50px] h-[50px] rounded-full bg-white absolute left-0" />
              <div className=" w-[50px] h-[50px] rounded-full bg-neutral-400 absolute left-7" />
            </div>
            <div className=" w-full flex justify-start ">
              <h3 className=" text-lg font-semibold">See recommended peers</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAR RIGHT */}
      <section className=" w-full lg:w-[30%] h-1/2 lg:h-full bg-red-600 "></section>
    </div>
  );
};

export default PriorityLeft;
