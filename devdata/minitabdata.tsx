import { Iminitab } from "@/interfaces";
import { FaUserFriends } from "react-icons/fa";
import { GiCash } from "react-icons/gi";

export const minitabdata: Iminitab[] = [
  {
    tabId: 1,
    tabData: 23.4,
    tabIcon: <FaUserFriends size={30} color="#00ff00" />,
    tabLabel: "Peers to find",
  },
  {
    tabId: 2,
    tabData: 4.6,
    tabIcon: <GiCash size={30} color="#ffae1a" />,
    tabLabel: "A+ Loan Offers",
  },
];
