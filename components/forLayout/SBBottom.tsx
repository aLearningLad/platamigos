"use client";

import { lowerSBdata } from "@/devdata/lowerSBdata";
import React, { useEffect, useState } from "react";
import LowerNavBtn from "./LowerNavBtn";
import { getGoogleDetailsClient } from "@/utils/myFxns/getGoogleDetailsClient";

const SBBottom = () => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [authenticatedUserId, setAuthenticatedUserId] = useState<
    string | null
  >();

  useEffect(() => {
    const getImageLink = async () => {
      const result = await getGoogleDetailsClient();
      setImgUrl(result?.user_metadata.avatar_url);
    };

    const fetchUser = async () => {
      try {
        const result = await getGoogleDetailsClient();

        if (result?.id) {
          setAuthenticatedUserId(result.id);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getImageLink();
    fetchUser();
  }, [authenticatedUserId]);

  return (
    <section
      className={`w-full h-[30%] ${
        authenticatedUserId ? "flex" : "hidden"
      } flex-col items-center justify-around`}
    >
      {lowerSBdata.map((btn) => (
        <LowerNavBtn
          key={btn.btnId}
          btnIcon={btn.btnId === 2342 ? imgUrl : btn.btnIcon}
          btnId={btn.btnId}
          btnName={btn.btnName}
          btnFxn={btn.btnFxn}
          btnLink={btn.btnLink}
        />
      ))}
    </section>
  );
};

export default SBBottom;
