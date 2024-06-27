"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";

const ApplyModal = () => {
  const modalToApply = useStore((store: Istore) => store.modalToApply);
  const setModalToApply = useStore((store: Istore) => store.setModalToApply);

  return (
    <div
      className={`${
        modalToApply ? "flex z-40" : "hidden z-[-1]"
      }  bg-black/60 w-full h-screen fixed backdrop-blur-md text-white justify-center items-center `}
    >
      ApplyModal
      <button onClick={() => setModalToApply()}>Close</button>
    </div>
  );
};

export default ApplyModal;
