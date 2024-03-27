import React from 'react';
import Link from 'next/link'

const CustomButton = ({ onClick, text, mode, className, link }) => {

  return (
    <button
      className={`${className} ${mode == "black" ? "bg-[#0F0D18] text-[#FFF]" : "bg-[#E8E6E2] text-[#000000]"} ${text == " Check Out our latest sermon" ? "px-[1.25rem]" : "px-[0rem] lg:px-[1.25rem]"}  font-inter w-full lg:w-fit rounded-md py-[1rem] text-[10.5px] lg:text-[1rem] font-semibold lg:font-medium`}
      onClick={onClick}
      type="submit"
    >
      {link ?
        <Link href={link}>
          {text}
        </Link> :
        <>
          {link}
        </>
      }
    </button>
  );
};

export default CustomButton;
