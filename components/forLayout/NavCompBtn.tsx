import { Inavcompbtn } from "@/interfaces";
import Link from "next/link";

const NavCompBtn: React.FC<Inavcompbtn> = ({
  uniqueLink,
  linkName,
  compImg,
}) => {
  return (
    <Link
      className=" w-full h-fit py-2 flex flex-col items-center justify-center"
      href={uniqueLink}
    >
      {compImg}
    </Link>
  );
};

export default NavCompBtn;
