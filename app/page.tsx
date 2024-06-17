import { GoogleAuthBtn } from "@/components/utilComps";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col bg-black items-center justify-center ">
      <p>This is just an auth Test Page for now</p>
      <GoogleAuthBtn />
    </main>
  );
}
