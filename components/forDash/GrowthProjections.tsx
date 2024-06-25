"use client";

import { ResponsiveBar } from "@nivo/bar";
import { SiSololearn } from "react-icons/si";

const GrowthProjections = () => {
  const data = [
    {
      country: "AD",
      "hot dog": 100,
      "hot dogColor": "white",
      burger: 128,
      burgerColor: "white",
      sandwich: 35,
      sandwichColor: "hsl(253, 70%, 50%)",
      kebab: 71,
      kebabColor: "hsl(48, 70%, 50%)",
      fries: 26,
      friesColor: "hsl(352, 70%, 50%)",
      donut: 107,
      donutColor: "white",
    },
    {
      country: "AE",
      "hot dog": 132,
      "hot dogColor": "hsl(184, 70%, 50%)",
      burger: 73,
      burgerColor: "hsl(256, 70%, 50%)",
      sandwich: 137,
      sandwichColor: "hsl(48, 70%, 50%)",
      kebab: 178,
      kebabColor: "hsl(208, 70%, 50%)",
      fries: 154,
      friesColor: "hsl(242, 70%, 50%)",
      donut: 155,
      donutColor: "hsl(316, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 124,
      "hot dogColor": "hsl(195, 70%, 50%)",
      burger: 114,
      burgerColor: "hsl(125, 70%, 50%)",
      sandwich: 100,
      sandwichColor: "hsl(130, 70%, 50%)",
      kebab: 150,
      kebabColor: "hsl(27, 70%, 50%)",
      fries: 90,
      friesColor: "hsl(65, 70%, 50%)",
      donut: 172,
      donutColor: "hsl(157, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 185,
      "hot dogColor": "hsl(203, 70%, 50%)",
      burger: 9,
      burgerColor: "hsl(270, 70%, 50%)",
      sandwich: 133,
      sandwichColor: "hsl(187, 70%, 50%)",
      kebab: 81,
      kebabColor: "hsl(60, 70%, 50%)",
      fries: 135,
      friesColor: "hsl(93, 70%, 50%)",
      donut: 91,
      donutColor: "hsl(290, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 76,
      "hot dogColor": "hsl(191, 70%, 50%)",
      burger: 99,
      burgerColor: "hsl(356, 70%, 50%)",
      sandwich: 102,
      sandwichColor: "hsl(198, 70%, 50%)",
      kebab: 112,
      kebabColor: "hsl(58, 70%, 50%)",
      fries: 74,
      friesColor: "hsl(299, 70%, 50%)",
      donut: 48,
      donutColor: "hsl(217, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 51,
      "hot dogColor": "hsl(134, 70%, 50%)",
      burger: 90,
      burgerColor: "hsl(133, 70%, 50%)",
      sandwich: 6,
      sandwichColor: "hsl(202, 70%, 50%)",
      kebab: 187,
      kebabColor: "hsl(10, 70%, 50%)",
      fries: 46,
      friesColor: "hsl(139, 70%, 50%)",
      donut: 100,
      donutColor: "hsl(104, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 135,
      "hot dogColor": "hsl(345, 70%, 50%)",
      burger: 41,
      burgerColor: "hsl(259, 70%, 50%)",
      sandwich: 199,
      sandwichColor: "hsl(72, 70%, 50%)",
      kebab: 157,
      kebabColor: "hsl(167, 70%, 50%)",
      fries: 149,
      friesColor: "hsl(76, 70%, 50%)",
      donut: 88,
      donutColor: "hsl(216, 70%, 50%)",
    },
  ];

  return (
    <div className="w-full h-full group-hover:scale-95 transition-all duration-300 ease-in-out flex flex-col text-start bg-gradient-to-br p-2 from-blue-950 via-purple-950/40 to-blue-900/20 rounded-lg">
      <div className=" w-full h-full absolute top-0 bottom-0 left-0 right-0 rounded-lg flex-col bg-neutral-100/20 backdrop-blur-md hidden transition-all duration-300 ease-in-out cursor-pointer group-hover:flex justify-center items-center z-[4]">
        <SiSololearn size={30} color="white" />
        <button className="text-white text-[18px] mt-2 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out hover:scale-95 rounded-md p-2 ">
          Learn more
        </button>
      </div>
      <h1 className=" text-[12px] text-white ">Avg. Community Returns</h1>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 10, right: 80, bottom: 10, left: 80 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </div>
  );
};

export default GrowthProjections;
