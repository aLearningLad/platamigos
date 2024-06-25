import { getAllPublished } from "@/utils/myFxns/getAllPublished";
import DisbursedTab from "./DisbursedTab";
import { IoverviewDisbursedData } from "@/types";
import { GiCash } from "react-icons/gi";

const OverviewDisbursed = async () => {
  const disbursed = await getAllPublished();
  let tab;
  let totalDisbursed: number = 0;

  // CALCULATE TOTAL DISBURSED AS PRINCIPLE
  if (disbursed && disbursed?.length > 0) {
    for (tab of disbursed) {
      totalDisbursed = totalDisbursed + tab.principal_offer;
    }
    console.log("This is the toal amount given out: ", Number(totalDisbursed));
  }

  const overviewDisbursedData: IoverviewDisbursedData[] = [
    {
      id: 2767,
      icon: <GiCash size="60%" />,
      figure: totalDisbursed,
      label: "Total Loaned Out",
    },
  ];

  return (
    <div className="w-full relative lg:w-1/2 flex flex-col items-center lg:items-start px-2 md:px-3 lg:px-5 xl:px-7 py-3 lg:py-5">
      <header className=" w-full sticky top-0 bg-black border-4 border-white py-3">
        <h1 className=" text-3xl font-semibold">Disbursed</h1>
      </header>
      <div className="grid h-full w-full grid-cols-1 gap-2 md:gap-4 lg:grid-cols-2 p-2 md:p-4 lg:p-8 xl:p-12 overflow-auto border-4 border-white">
        {disbursed && disbursed.length > 0 ? (
          overviewDisbursedData.map((tab) => (
            <DisbursedTab
              id={tab.id}
              figure={tab.figure}
              icon={tab.icon}
              label={tab.label}
              key={tab.id}
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
