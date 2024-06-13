import { TlowerSBdata, Tnavdata } from "@/types";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";

export const lowerSBdata: TlowerSBdata[] = [
  {
    btnId: 2347653221,
    btnFxn: () => console.log("Hi there"),
    btnIcon: <BiSearchAlt2 size={20} color="white" />,
    btnName: "Search",
  },
  {
    btnId: 2003873,
    btnFxn: () => console.log("Hi deploy the calender, bruv!"),
    btnIcon: <BsCalendarDateFill size={20} color="white" />,
    btnName: "Planner",
  },
  {
    btnId: 1982,
    btnFxn: () =>
      console.log(
        "Will have red dot to indicate new chats. Onclick will open the chats section, bruv. It will be a modal with blurred, slightly darkened background"
      ),
    btnIcon: <IoMdChatbubbles size={20} color="white" />,
    btnName: "Negotiate",
  },
  {
    btnId: 2112,
    btnFxn: () =>
      console.log(
        "Open all alerts via modal, order by date and importance rating as signal bars. Have a heading at top stating this for intuitive UX"
      ),
    btnIcon: <FaBell size={20} color="white" />,
    btnName: "All Alerts",
  },
  {
    btnId: 2342,
    btnLink: "/settings",
    btnIcon: <p className=" text-white text-[10px]">User Img</p>,
    btnName: "Profile",
  },
];
