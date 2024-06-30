import EventsDisplay from "./EventsDisplay";
import LoanDisplay from "./LoanDisplay";

const LoanHubBody = () => {
  return (
    <div className=" w-full h-full bg-red-600 flex">
      <LoanDisplay />
      <EventsDisplay />
    </div>
  );
};

export default LoanHubBody;
