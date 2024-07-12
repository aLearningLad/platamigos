import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import FirstRowCard from "./FirstRowCard";

const LandingLeftSide = () => {
  const falsedata = [1, 2, 3, 4, 5, 6, 7];
  const firstRow = falsedata.slice(0, falsedata.length / 2);
  const secondRow = falsedata.slice(falsedata.length / 2);

  const ReviewCard = ({
    img,
    name,
    username,
    body,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative h-40 w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };

  return (
    <div className=" hidden lg:flex w-4/12 flex-col py-12 items-center overflow-auto lg:h-full ">
      <div className="relative flex h-fit w-full flex-row items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <FirstRowCard />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {secondRow.map((review) => (
            <p>second row here</p>
          ))}
        </Marquee>
        {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div> */}
        {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div> */}
      </div>
    </div>
  );
};

export default LandingLeftSide;
