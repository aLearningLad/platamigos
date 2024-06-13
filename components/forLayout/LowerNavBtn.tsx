"use client";

import { TlowerSBdata } from "@/types";

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
      {btnIcon}
    </button>
  );
};

export default LowerNavBtn;
