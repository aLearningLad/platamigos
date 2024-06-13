import { Tnavdata } from "@/types";
import { FaBookmark } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import { PiCrownBold } from "react-icons/pi";
import { SiCodeblocks } from "react-icons/si";
import { TiHome } from "react-icons/ti";

export const navdata: Tnavdata[] = [
  {
    linkId: 1,
    linkname: "Alerts",
    linkref: "/alerts",
    icon: <PiCrownBold size={20} color="white" />,
  },
  {
    linkId: 2,
    linkname: "Home",
    linkref: "/home",
    icon: <TiHome size={20} color="white" />,
  },
  {
    linkId: 3,
    linkname: "Disbursed Loans",
    linkref: "/disbursed",
    icon: <SiCodeblocks size={20} color="white" />,
  },
  {
    linkId: 4,
    linkname: "Bookmarks",
    linkref: "/bookmarks",
    icon: <FaBookmark size={20} color="white" />,
  },
  {
    linkId: 5,
    linkname: "Peers",
    linkref: "/peers",
    icon: <IoIosPersonAdd size={20} color="white" />,
  },
  // REMEMBER, IGNORE ICON ABOVE SETTINGS. NOT INCLUDING IT HERE
  {
    linkId: 6,
    linkname: "Settings",
    linkref: "/usersettings",
    icon: <IoSettings size={20} color="white" />,
  },
  {
    linkId: 7,
    linkname: "Create Listing",
    linkref: "/create",
    icon: <MdCreateNewFolder size={20} color="white" />,
  },
];
