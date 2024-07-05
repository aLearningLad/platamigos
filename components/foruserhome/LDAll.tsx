import { Ildallbody } from "@/interfaces";
import LDAllBody from "./LDAllBody";
import SearchBar from "./SearchBar";

const LDAll: React.FC<Ildallbody> = ({ allLoans, loansToShow, userDP }) => {
  return (
    <div className="flex w-1/2 flex-col justify-center p-3 relative">
      <SearchBar userDP={userDP || ""} />
      <LDAllBody allLoans={allLoans} loansToShow={loansToShow} />
    </div>
  );
};

export default LDAll;
