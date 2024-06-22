import { footersocialsdata } from "@/devdata/footersocialsdata";

const FooterSocials = () => {
  return (
    <div className="hidden lg:flex w-full flex-row justify-center gap-3 lg:gap-12 xl:gap-16 items-center h-full">
      {footersocialsdata.map((social) => (
        <div
          className="flex justify-center cursor-pointer items-center gap-[2px] p-2 group border-2 border-transparent hover:border-neutral-200 rounded-md transition-all duration-500 ease-in-out "
          key={social.id}
        >
          {social.socialImg}
          <p className="text-[12px] text-neutral-200">{social.socialtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default FooterSocials;
