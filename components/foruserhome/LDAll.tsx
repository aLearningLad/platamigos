import LDAllBody from "./LDAllBody";
import SearchBar from "./SearchBar";

const LDAll = () => {
  return (
    <div className="flex w-1/2 flex-col justify-center p-3 relative">
      <SearchBar />
      <LDAllBody />
    </div>
  );
};

export default LDAll;
