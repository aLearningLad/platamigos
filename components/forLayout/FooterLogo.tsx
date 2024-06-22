import Image from "next/image";

const FooterLogo = () => {
  return (
    <div className="w-4/12 flex-col lg:w-3/12 xl:w-1/12 h-full flex justify-center items-center ">
      <Image
        src="/assets/1.png"
        width={50}
        height={50}
        className=" overflow-clip rounded-md lg:rounded-lg"
        alt="Platamigos Logo"
      />
      <p className=" text-[10px] text-neutral-200 mt-1 ">
        Platamigos&copy; 2024
      </p>
    </div>
  );
};

export default FooterLogo;
