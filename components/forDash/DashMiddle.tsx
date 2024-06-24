import DashMiddleBottom from "./DashMiddleBottom";
import DashMiddleTop from "./DashMiddleTop";

const DashMiddle = () => {
  return (
    <section className="w-full h-[220vh] border-4 border-red-600 lg:h-[90vh] flex flex-col">
      <DashMiddleTop />
      <DashMiddleBottom />
    </section>
  );
};

export default DashMiddle;
