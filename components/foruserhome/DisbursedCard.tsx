import { Idisbursedcard } from "@/interfaces";
import { IoGiftSharp } from "react-icons/io5";

const DisbursedCard: React.FC<Idisbursedcard> = ({
  applicant_name,
  index,
  total_due,
}) => {
  return (
    <div className=" w-full min-h-[25vh] bg-neutral-700/80 flex flex-col justify-center items-center p-3 text-center ">
      <h1 className=" text-lg  ">
        {applicant_name ? applicant_name : "Anonymous"}
      </h1>
      <div className=" w-full flex justify-center items-center border-2 border-white">
        <IoGiftSharp size={70} />
      </div>
      <div className=" w-full justify-center items-center gap-1 text-center flex-col">
        <p className="text-[14px]">owes you</p>
        <h2 className=" text-[18px] text-pink-400 ">R{total_due}</h2>
      </div>
    </div>
  );
};

export default DisbursedCard;
