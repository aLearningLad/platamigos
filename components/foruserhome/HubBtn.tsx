"use client";

import useStore from "@/app/(store)/store";
import { Ihubbtn, Istore } from "@/interfaces";
import React from "react";

const HubBtn: React.FC<Ihubbtn> = ({ hubName }) => {
  const setCurrentHub = useStore((store: Istore) => store.setCurrentHub);

  return (
    <button onClick={() => setCurrentHub(hubName.toLowerCase())}>
      {hubName}
    </button>
  );
};

export default HubBtn;
