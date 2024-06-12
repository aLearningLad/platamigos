import { TlowerSBdata, Tnavdata } from "@/types";

export const lowerSBdata: TlowerSBdata[] = [
  {
    btnId: 2347653221,
    btnFxn: () => console.log("Hi there"),
    btnIcon: <h3></h3>,
    btnName: "Search",
  },
  {
    btnId: 2003873,
    btnFxn: () => console.log("Hi deploy the calender, bruv!"),
    btnIcon: <h3></h3>,
    btnName: "Planner",
  },
  {
    btnId: 1982,
    btnFxn: () =>
      console.log(
        "Will have red dot to indicate new chats. Onclick will open the chats section, bruv. It will be a modal with blurred, slightly darkened background"
      ),
    btnIcon: <h3></h3>,
    btnName: "Negotiate",
  },
  {
    btnId: 2112,
    btnFxn: () =>
      console.log(
        "Open all alerts via modal, order by date and importance rating as signal bars. Have a heading at top stating this for intuitive UX"
      ),
    btnIcon: <h3></h3>,
    btnName: "All Alerts",
  },
  {
    btnId: 2342,
    btnLink: "/profile",
    btnIcon: <h3></h3>,
    btnName: "Profile",
  },
];
