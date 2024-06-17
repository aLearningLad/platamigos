import { GoogleAuthBtn } from "@/components/utilComps";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export default async function Home() {
  const supabase = createClient();

  const userIs = await (await supabase.auth.getUser()).data.user?.user_metadata;
  console.log("Here's the user from home page: ", userIs);
  return (
    <main className="flex w-full h-full flex-col bg-black items-center justify-center ">
      <p className=" text-3xl text-white">
        This is just an auth Test Page for now
      </p>
      <GoogleAuthBtn />
      <p></p>
    </main>
  );
}
