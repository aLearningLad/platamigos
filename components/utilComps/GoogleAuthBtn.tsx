"use client";

import { signInViaGoogle } from "@/utils/myFxns/signIn";

const GoogleAuthBtn = () => {
  return (
    <button
      onClick={signInViaGoogle}
      className=" text-white border-2 border-white px-3 py-2 rounded-lg"
    >
      GoogleAuthBtn
    </button>
  );
};

export default GoogleAuthBtn;
