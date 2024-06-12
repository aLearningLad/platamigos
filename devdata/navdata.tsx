import { Tnavdata } from "@/types";
import { PiCrownBold } from "react-icons/pi";

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
    icon: <p></p>,
  },
  {
    linkId: 3,
    linkname: "Disbursed Loans",
    linkref: "/disbursed",
    icon: <p></p>,
  },
  {
    linkId: 4,
    linkname: "Bookmarks",
    linkref: "/bookmarks",
    icon: <p></p>,
  },
  {
    linkId: 5,
    linkname: "Peers",
    linkref: "/peers",
    icon: <p></p>,
  },
  // REMEMBER, IGNORE ICON ABOVE SETTINGS. NOT INCLUDING IT HERE
  {
    linkId: 6,
    linkname: "Settings",
    linkref: "/alerts",
    icon: <p></p>,
  },
  {
    linkId: 7,
    linkname: "Create Listing",
    linkref: "/create",
    icon: <p></p>,
  },
];
