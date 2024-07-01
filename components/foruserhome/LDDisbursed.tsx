const LDDisbursed = () => {
  return (
    <div className=" flex w-1/2 border-4 border-white p-2 flex-col relative">
      <header className="w-full sticky top-0 z-[5] flex justify-center pb-2">
        <h1 className=" text-lg text-white">Loans {"you've"} granted</h1>
      </header>

      <div className="w-full h-full border-2 border-white overflow-auto flex flex-col justify-center "></div>
    </div>
  );
};

export default LDDisbursed;
