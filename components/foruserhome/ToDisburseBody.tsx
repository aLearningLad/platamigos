"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Ttodisburse } from "@/types";

const ToDisburseBody = () => {
  const [toDisburse, setToDisburse] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getResult = async () => {
      const supabase = createClient();
      const googleid = (await supabase.auth.getUser()).data.user?.id;
      try {
        const { data: toDisburseData, error: toDisburseError } = await supabase
          .from("to_disburse")
          .select("*")
          .eq("userid", googleid);

        if (toDisburseError) {
          throw new Error(toDisburseError.details);
        }

        if (toDisburseData) {
          setIsLoading(false);
          console.log("This is data to disburse: ", toDisburseData);
          setToDisburse(toDisburseData);
        }
      } catch (error) {
        console.log("Error fetching to disburse: ", error);
      }
    };

    getResult();
  }, []);

  const handleToDisburseModal = () => {
    alert("clicked!");
  };

  if (isLoading) {
    return (
      <div className=" w-full h-full flex justify-center items-center text-lg text-neutral-200 rounded-2xl  ">
        Just a second...
      </div>
    );
  }

  if (toDisburse && toDisburse.length > 0) {
    return (
      <div className="w-full h-full rounded-2xl flex flex-col items-center gap-7 overflow-auto text-white p-3">
        {toDisburse?.map((item: Ttodisburse) => (
          <div className="w-full min-h-[25vh] bg-gradient-to-b from-transparent via-pink-400/30 to-pink-600/70  rounded-2xl p-3 text-center flex flex-col items-center justify-center">
            <h1>{}</h1>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className=" w-full h-full flex justify-center items-center text-lg text-white bg-gradient-to-tl from-pink-600/60 via-pink-300/30 to-transparent rounded-2xl ">
      Nobody has applied for your loans yet
    </div>
  );
};

export default ToDisburseBody;
