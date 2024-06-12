import { Inavcompbtn } from "@/interfaces";
import Link from "next/link";

const NavCompBtn: React.FC<Inavcompbtn> = ({ uniqueLink, linkName }) => {
  return (
    <Link href={uniqueLink}>
      <p>{linkName}</p>
    </Link>
  );
};

export default NavCompBtn;
