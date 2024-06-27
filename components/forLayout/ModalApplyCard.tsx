import { Tloansfromdb } from "@/types";
import CancelBtn from "./CancelBtn";
import SubmitApplication from "./SubmitApplication";

const ModalApplyCard: React.FC<Tloansfromdb> = ({ ...params }) => {
  return (
    <div className=" w-full h-full p-1 md:p-2 lg:p-5 xl:p-7 flex flex-col items-center justify-center">
      <header>
        <h1>{params.title}</h1>
      </header>

      <SubmitApplication />
      <CancelBtn />
    </div>
  );
};

export default ModalApplyCard;
