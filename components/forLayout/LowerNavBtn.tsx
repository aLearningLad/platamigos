"use client";

import { TlowerSBdata } from "@/types";
import Image from "next/image";

const LowerNavBtn: React.FC<TlowerSBdata> = ({
  btnIcon,
  btnId,
  btnName,
  btnFxn,
  btnLink,
}) => {
  return (
    <button
      onClick={
        btnFxn
          ? btnFxn
          : () => {
              alert("This is actually a link");
            }
      }
    >
      {/* <p className=" text-white">{typeof btnIcon}</p> */}
      {btnId === 2342 ? (
        <Image
          src={btnIcon as string}
          alt="Authenticated User's Google Profile Picture"
          width={50}
          height={50}
        />
      ) : (
        <div>{btnIcon}</div>
      )}
    </button>
  );
};

export default LowerNavBtn;
