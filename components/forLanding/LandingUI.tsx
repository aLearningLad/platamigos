import InfoModal from "./InfoModal";
import LandingFooter from "./LandingFooter";
import LandingMain from "./LandingMain";
import LandingNav from "./LandingNav";

const LandingUI = () => {
  return (
    <div className=" w-full relative lg:h-full min-h-[100vh] max-h-fit text-white ">
      <InfoModal />
      <LandingMain />
      <LandingFooter />
    </div>
  );
};

export default LandingUI;
