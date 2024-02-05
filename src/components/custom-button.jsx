import React from 'react';

const CustomButton = ({ onClick, text }) => {
  return (
    <button
      className="w-fit rounded-md border bg-[#fff] px-4 py-2 text-[1rem] font-medium"
      onClick={onClick}
      type="submit"
    >
      {text}
    </button>
  );
};

export default CustomButton;
