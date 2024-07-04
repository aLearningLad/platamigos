import type { Metadata } from "next";
import "./globals.css";
import { Taviraj } from "next/font/google";
import {
  ApplyModal,
  FooterComp,
  MobileNav,
  MobileOptionsModal,
  SideBar,
} from "@/components/forLayout";
import { Toaster } from "react-hot-toast";

const tav = Taviraj({ subsets: ["latin"], weight: ["200"] });

export const metadata: Metadata = {
  title: "Platamigos",
  description: "Your trusty, free peer-to-peer lending site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/assets/1.png"
        type="image/<generated>"
        className=" rounded-full"
      />
      <body className={tav.className}>
        <div className="min-h-screen max-h-fit flex flex-col lg:flex-row relative bg-gradient-to-br from-black to-black">
          <MobileOptionsModal />
          <ApplyModal />
          <Toaster
            position="top-right"
            toastOptions={{
              success: {
                style: {
                  background: "#white",
                  color: "black",
                  fontWeight: 600,
                },
              },
              error: {
                style: {
                  background: "#b30000",
                  color: "white",
                  fontWeight: 600,
                },
              },
            }}
          />
          <SideBar />
          <div className="w-full lg:w-[95%] xl:w-[97%] h-fit lg:h-[140vh] bg-transparent">
            {children}

            {/* <FooterComp /> */}
          </div>
          <MobileNav />
        </div>
      </body>
    </html>
  );
}
