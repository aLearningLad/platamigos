import { Ifirstrowcard } from "@/interfaces";
import React from "react";

const FirstRowCard: React.FC<Ifirstrowcard> = ({
  CTA,
  tileId,
  blurb,
  heading,
  tileMedia,
}) => {
  if (tileMedia) {
    return (
      <div className="w-full h-fit border-2 rounded-xl border-white flex flex-col items-start">
        <h2 className=" text-[18px] min-h-[5vh] p-2 font-extrabold text-neutral-300">
          {heading}
        </h2>
        <div className="min-h-[20vh] w-full flex gap-2 items-center ">
          <span className=" w-full h-full flex text-start text-[14px] ">
            <p className=" min-h-fit w-8/12">{blurb}</p>
            <div className=" w-4/12 min-h-full flex justify-center items-center">
              {tileMedia}
            </div>
          </span>
        </div>
      </div>
    );
  }
};

export default FirstRowCard;
