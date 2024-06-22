import React from "react";
import FooterLogo from "./FooterLogo";
import FooterContact from "./FooterContact";
import FooterSocials from "./FooterSocials";
import FooterFeatures from "./FooterFeatures";
import FindUsHere from "./FindUsHere";

const FooterComp = () => {
  return (
    <footer className="w-full h-[20vh] md:h-[22vh] lg:h-[30vh] flex-col flex absolute lg:bottom-0 bottom-[10vh] md:bottom-[12vh] border-4 border-white">
      <section className="w-full h-[80%] flex justify-center items-start gap-3 lg:gap-12 xl:gap-24 py-1 md:py-2 lg:py-5 xl:py-6">
        <FooterLogo />
        <FooterContact />
        <FooterFeatures />
        <FindUsHere />
      </section>
      <div className=" w-full h-[15%] ">
        <FooterSocials />
      </div>
    </footer>
  );
};

export default FooterComp;
