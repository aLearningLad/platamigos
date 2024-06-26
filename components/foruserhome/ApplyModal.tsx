"use client";

const ApplyModal = () => {
  const handleApplyModal = () => {
    alert("Modal will open now!");
  };

  return (
    <button
      onClick={handleApplyModal}
      className="text-lg px-1 group-hover:bg-white group-hover:text-black transition-all duration-300 ease-in-out lg:px-2 bg-pink-600 rounded-md text-white lg:text-[12px] "
    >
      Apply
    </button>
  );
};

export default ApplyModal;
