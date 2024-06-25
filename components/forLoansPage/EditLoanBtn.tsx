"use client";

const EditLoanBtn = () => {
  const handleEditModal = () => {
    alert("Edit modal open!");
  };

  return (
    <button
      onClick={handleEditModal}
      className="text-2xl w-full py-2 mt-2 md:mt-4 lg:mt-6 rounded-md lg:rounded-lg bg-orange-400 text-white"
    >
      Tweak
    </button>
  );
};

export default EditLoanBtn;
