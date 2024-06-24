import { Iminitab } from "@/interfaces";
import { FaUserFriends } from "react-icons/fa";
import { GiCash } from "react-icons/gi";

export const minitabdata: Iminitab[] = [
  {
    tabId: 1,
    tabData: 28,
    tabIcon: <FaUserFriends size="40%" />,
    tabLabel: "Peers to find",
  },
  {
    tabId: 2,
    tabData: 431,
    tabIcon: <GiCash size="40%" />,
    tabLabel: "A+ Loan Offers",
  },
];
