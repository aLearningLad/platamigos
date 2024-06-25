import { getAllPublished } from "@/utils/myFxns/getAllPublished";
import DisbursedTab from "./DisbursedTab";
import { IoverviewDisbursedData } from "@/types";
import { GiCash } from "react-icons/gi";
import { FaBalanceScaleRight } from "react-icons/fa";
import { FcCurrencyExchange } from "react-icons/fc";

const OverviewDisbursed = async () => {
  const disbursed = await getAllPublished();
  console.log(disbursed);

  let tab;
  let totalDisbursed: number = 0;
  let interestTab;
  let combinedInterest: number = 0;
  let avgInterest: number = 0;
  let earnedInterest: number = 0;
  let earnedTab;

  // CALCULATE TOTAL DISBURSED AS PRINCIPLE
  if (disbursed && disbursed?.length > 0) {
    for (tab of disbursed) {
      totalDisbursed = totalDisbursed + tab.principal_offer;
    }
    console.log("This is the toal amount given out: ", Number(totalDisbursed));
  }

  // CALCULATE AVG INTEREST
  if (disbursed && disbursed.length > 0) {
    for (interestTab of disbursed) {
      combinedInterest = combinedInterest + interestTab.interest_rate;
    }

    avgInterest = Number((combinedInterest / disbursed.length).toFixed(2));
    console.log("This is the avg. interest rate: ", avgInterest);
  }

  if (disbursed && disbursed.length > 0) {
    for (earnedTab of disbursed) {
      earnedInterest =
        earnedInterest + (earnedTab.total_due - earnedTab.principal_offer);
    }

    console.log("Total interest earned: ", earnedInterest);
  }

  const overviewDisbursedData: IoverviewDisbursedData[] = [
    {
      id: 2767,
      icon: <GiCash size="60%" color="#7cfc00" />,
      figure: totalDisbursed,
      label: "Total Loaned Out",
      blurb: (
        <span className="w-full text-center gap-1 flex justify-center items-end">
          <p className="text-[10px]">around</p>
          <h3 className="text-xl font-bold w-fit px-1 italic bg-gradient-to-r from-fuchsia-300 to-pink-600 bg-clip-text text-transparent">
            R{totalDisbursed}
          </h3>
          <p className="text-[10px]">so far</p>
        </span>
      ),
    },
    {
      id: 78712,
      icon: <FaBalanceScaleRight size="60%" color="#ff3096" />,
      figure: avgInterest,
      label: "Avg. Interest",
      blurb: (
        <span className="w-full text-center gap-1 flex justify-center items-center">
          <p className="text-[12px]">circa.</p>
          <h3 className="text-xl font-bold italic px-1 bg-gradient-to-r from-lime-400 to-cyan-600 bg-clip-text text-transparent">
            {avgInterest}%
          </h3>
        </span>
      ),
    },
    {
      id: 47187,
      icon: <FcCurrencyExchange size="60%" />,
      figure: avgInterest,
      label: "Interest Earned",
      blurb: (
        <span className="w-full text-center gap-1 flex justify-center items-center">
          <p className="text-[12px]">close to</p>
          <h3 className="text-xl font-bold italic px-1 bg-gradient-to-r from-lime-400 to-cyan-600 bg-clip-text text-transparent">
            R{earnedInterest}
          </h3>
        </span>
      ),
    },
  ];

  return (
    <div className="w-full relative lg:w-1/2 flex flex-col items-center lg:items-start px-2 md:px-3 lg:px-5 xl:px-7 py-3 lg:py-5">
      <header className=" w-full sticky top-0 bg-black border-4 border-white py-3">
        <h1 className=" text-3xl font-semibold">Disbursed</h1>
      </header>
      <div className="grid h-full w-full grid-cols-1 gap-6 md:gap-4 lg:grid-cols-2 p-2 md:p-4 lg:p-8 xl:p-12 overflow-auto border-4 border-white">
        {disbursed && disbursed.length > 0 ? (
          overviewDisbursedData.map((tab, index) => (
            <DisbursedTab
              id={tab.id}
              figure={tab.figure}
              icon={tab.icon}
              label={tab.label}
              key={tab.id}
              blurb={tab.blurb}
            />
          ))
        ) : (
          <>No loans disbursed yet</>
        )}
      </div>
    </div>
  );
};

export default OverviewDisbursed;
