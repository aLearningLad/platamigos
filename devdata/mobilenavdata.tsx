import { Tmobilenavdata } from "@/types";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCreateNewFolder } from "react-icons/md";
import { TiHome } from "react-icons/ti";

export const mobilenavdata: Tmobilenavdata[] = [
  {
    linkID: 273111,
    linkname: "New",
    linkref: "/create",
    icon: <MdCreateNewFolder size={40} color="white" />,
  },

  {
    linkID: 2878,
    linkname: "Home",
    icon: <TiHome size={40} color="white" />,
    linkref: "/home",
  },
];
