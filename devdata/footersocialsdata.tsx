import { Tfootersocialsdata } from "@/types";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const footersocialsdata: Tfootersocialsdata[] = [
  {
    id: 2898,
    socialImg: <FaXTwitter size={16} color="white" />,
    socialtitle: "X.com",
  },
  {
    id: 26711,
    socialImg: <FaFacebook size={16} color="white" />,
    socialtitle: "Facebook",
  },
  {
    id: 8883781,
    socialImg: <AiFillInstagram size={16} color="white" className="" />,
    socialtitle: "Instagram",
  },
  {
    id: 677221,
    socialImg: <FaLinkedin size={16} color="white" />,
    socialtitle: "LinkedIn",
  },
];
