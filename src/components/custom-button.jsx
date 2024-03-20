import React from 'react';

const CustomButton = ({ onClick, text, mode }) => {

  return (
    <button
      className={`${mode == "black" ? "bg-[#0F0D18] text-[#FFF]" : "bg-[#E8E6E2] text-[#000000]"} font-inter w-full lg:w-fit rounded-md px-[1.25rem] py-[1rem] text-[10.6px] lg:text-[1rem] font-medium`}
      onClick={onClick}
      type="submit"
    >
      {text}
    </button>
  );
};

export default CustomButton;
