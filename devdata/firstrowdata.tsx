import { Ifirstrowcard } from "@/interfaces";
import { FaWallet } from "react-icons/fa6";

export const firstrowdata: Ifirstrowcard[] = [
  {
    tileId: 18787,
    heading: "Borrow With Ease",
    blurb:
      "Need funds quickly? Apply for a loan in just a few clicks. Our seamless process ensures you get the funds you need without the hassle.",
    CTA: "Let's Go!",
    tileMedia: <FaWallet size="70%" color="#7cfc00" />,
  },
  {
    tileId: 231126,
    heading: "Engage & Earn!",
    CTA: "Start Lending",
    blurb:
      "Help others achieve their goals while earning attractive returns. Become a lender and watch your money grow.",
  },
  {
    tileId: 87261,
    blurb:
      "Your security is our priority. Enjoy transparent transactions with full confidence in our platform's security measures. We use state-of-the-art encryption to protect your data and ensure safe, worry-free lending and borrowing.",
    CTA: "Learn More",
  },
];
