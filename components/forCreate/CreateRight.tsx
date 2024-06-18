"use client";

const CreateRight = () => {
  const calculateInstalment = (
    principle: number,
    interest: number,
    months: number
  ) => {
    const answer =
      (principle + principle * (interest / 100) * (months / 12)) / months;

    alert(`This is the instalment amount: ${answer}`);
  };

  return (
    <section className=" w-full h-[70vh] md:h-[65vh] lg:h-full lg:w-1/2 flex flex-col items-center justify-around p-1 md:p-2 lg:p-4 xl:p-7 border-2 border-white ">
      {/* MONTHS TO REPAY */}

      <div className=" w-full h-[15vh] lg:h-[20%] border-2 border-white  "></div>

      {/* INSTALMENT AMOUNT */}

      <div className=" w-full h-[20vh] lg:h-[30%] border-2  "></div>

      {/* TOTAL DUE */}

      <section className=" w-full flex flex-col h-[30%] items-center rounded-lg md:rounded-xl xl:rounded-2xl justify-center bg-gradient-to-bl border-2 border-neutral-400/20 from-pink-400/20 via-black to-black">
        <div className="w-full h-fit p-1 lg:p-2 flex justify-center items-center gap-1">
          <p className=" text-neutral-200 text-[16px] lg:text-[14px]">
            est. repayment
          </p>
          <h2 className=" text-3xl lg:text-2xl text-white font-semibold">
            R2399.44
          </h2>
        </div>
        <button className=" w-full md:w-10/12 py-1 lg:py-2 bg-gradient-to-r rounded-md md:rounded-lg from-purple-600/40 via-cyan-600 to-cyan-800 text-white text-3xl  lg:text-2xl ">
          Publish
        </button>
      </section>
    </section>
  );
};

export default CreateRight;
