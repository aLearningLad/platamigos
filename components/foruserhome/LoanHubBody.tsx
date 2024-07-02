import EventsDisplay from "./EventsDisplay";
import LoanDisplay from "./LoanDisplay";

const LoanHubBody = () => {
  return (
    <div className="w-full h-[90%] flex gap-5 p-2 ">
      <LoanDisplay />
      <EventsDisplay />
    </div>
  );
};

export default LoanHubBody;
