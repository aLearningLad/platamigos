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
      <div className=" w-full h-full flex justify-center items-center text-lg text-neutral-200  ">
        Just a second...
      </div>
    );
  }

  if (toDisburse && toDisburse.length > 0) {
    return (
      <div className="w-full h-[80%] border-4 border-white flex flex-col items-center gap-7 overflow-auto text-white">
        {toDisburse?.map((item: Ttodisburse) => (
          <div className=" w-full min-h-[15vh] bg-white  ">
            This is an individual application
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
