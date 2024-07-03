import { Idisbursedcard } from "@/interfaces";
import { IoGiftSharp } from "react-icons/io5";

const DisbursedCard: React.FC<Idisbursedcard> = ({
  applicant_name,
  index,
  total_due,
}) => {
  return (
    <div
      className={` w-[80%] min-h-[25vh] ${
        index % 2 === 0
          ? "bg-gradient-to-b from-cyan-600 via-cyan-600/40 to-transparent"
          : "bg-gradient-to-b from-orange-500 via-orange-600/40 to-transparent"
      } flex rounded-full  flex-col hover:scale-95 transition-all duration-500 ease-in-out cursor-pointer justify-center items-center p-3 text-center`}
    >
      <h1 className=" text-lg  ">
        {applicant_name ? applicant_name : "Anonymous"}
      </h1>
      <div className=" w-full flex justify-center items-center">
        <IoGiftSharp size={70} color="#fc007c" />
      </div>
      <div className=" w-full justify-center items-center gap-1 text-center flex-col">
        <p className="text-[14px]">owes you</p>
        <h2 className=" text-[22px] text-pink-300 ">R{total_due}</h2>
      </div>
    </div>
  );
};

export default DisbursedCard;
