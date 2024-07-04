"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";

const MobileOptionsModal = () => {
  const showMobileOptionsModal = useStore(
    (store: Istore) => store.showMobileOptionsModal
  );
  const setMobileOptionsModal = useStore(
    (store: Istore) => store.setMobileOptionsModal
  );
  // OPTIONS: /usersettings, /peers, /bookmarks, /all, /alerts

  return (
    <div
      className={`${
        showMobileOptionsModal ? "flex fixed z-50" : "hidden z-[-10]"
      } top-0 bottom-0 left-0 h-full right-0 bg-black/60 backdrop-blur-md flex justify-center items-center flex-col `}
    >
      <button
        onClick={() => setMobileOptionsModal(false)}
        className=" text-2xl text-white"
      >
        Close
      </button>
    </div>
  );
};

export default MobileOptionsModal;
