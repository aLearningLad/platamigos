"use client";

import { logout } from "@/utils/myFxns/logout";

const SignOutBtn = () => {
  return (
    <button
      onClick={() => logout()}
      className="text-xl text-white rounded-lg border-2 border-white p-2"
    >
      SignOutBtn
    </button>
  );
};

export default SignOutBtn;
