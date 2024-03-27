/* eslint-disable sort-keys-fix/sort-keys-fix */

import Link from 'next/link';
import { usePathname } from "next/navigation.js";
import { useState } from "react";
import CustomButton from "./custom-button.jsx";

const headerData = {
  links: [
    {
      link: '/',
      name: 'Home',
    },
    {
      name: 'About Us',
      link: '/about-us',
    },
    // {
    //   name: 'Sermons',
    //   link: '/sermons',
    // },
  ],
  logo: './src/assets/logo.svg',
  buttons: [
    {
      text: 'Partner',
      link: 'http://paypal.me/niheagwam',
      color: '#0F0D18',
      textColor: '#FFFFFF',
      mode: "black"
    },
    {
      text: 'Contact Us',
      link: '/contact',
      color: '#E8E6E2',
      textColor: '#000000',
      mode: "light"
    },
  ],
};

const HeaderContainer = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname()
  return (
    <nav className="">
      {/* Desktop Navigation */}
      <div className=" sm:flex hidden w-full items-center justify-between text-[0.85rem] py-[2rem]">
        <div>
          <Link href="/">
            <img className="h-[3.5rem] w-[3.5rem] cursor-pointer" src={"/assets/logo.svg"} />
          </Link>
        </div>
        <div className="flex gap-[2.5rem]  text-[#FFFFFF] ">
          {headerData.links.map((item, index) => (
            <div className={`hover:cursor-pointer hover:opacity-55 text-[1.25rem] pb-2`} key={index}>
              {/* <div className={`hover:cursor-pointer hover:opacity-55 text-[1.25rem] pb-2 ${item.link == window?.location?.pathname ? 'font-semibold  border-b-[2px]' : 'font-medium'}`} key={index}> */}
              <Link
                className={`hover:cursor-pointer hover:opacity-55 text-[1.25rem] pb-2 ${item.link == pathname ? 'font-semibold  border-b-[2px]' : 'font-medium'}`}
                href={item?.link}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex gap-4 ">
          {headerData.buttons.map((item, index) => (
            <Link href={item.link}>
              <CustomButton
                key={index}
                text={item.text} mode={item.mode}
              />
            </Link>
          ))}
        </div>
      </div>
      {/*End Desktop Navigation */}
      {/* Mobile Navigation */}
      <div className={`${toggle ? "bg-white" : " backdrop-blur-xl backdrop-filter"} z-[1000rem] sm:hidden flex items-center top-[0px] left-0 fixed  w-screen h-[64px] `}>
        <Link href="/">
          <img className="object-contain w-[4.125rem] h-[4.125rem] absolute top-4 left-4" src={"/assets/logo.svg"} />
        </Link>
        {toggle ? <CloseIcon className="object-contain w-[24px] h-[24px] absolute top-4 right-4 text-[#0F0D18]"
          onClick={() => setToggle(!toggle)} /> : <MenuIcon className="text-white object-contain w-[3.2rem] h-[4rem] absolute top-4 right-4"
            onClick={() => setToggle(!toggle)} />}
        {/* Sidebar */}
        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-[#0F0D18] fixed z-10 top-16 right-0 left-0  w-screen h-screen sidebar`}
        >
          <ul className="list-none flex flex-1 flex-col ">
            <div className="flex flex-col gap-4 font-semibold text-[#FFFFFF] ">
              {headerData.links.map((item, index) => (
                <Link href={item?.link} className="hover:cursor-pointer hover:opacity-55 text-2xl" key={index}>
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4 mt-10">
              {headerData.buttons.map((item, index) => (
                <div
                  link={item.link}
                  className={`border flex items-center justify-center py-4 w-full bg-[${item.color}] text-[${item.textColor}] rounded-lg   font-semibold hover:cursor-pointer hover:opacity-55 `}
                  key={index}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
      {/*End Mobile Navigation */}

    </nav>

  );
};

export default HeaderContainer;


const CloseIcon = ({ onClick, className }) => {
  return (
    <svg onClick={onClick} className={className} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"></path> </g></svg>)
}
const MenuIcon = ({ onClick, className }) => {
  return (<svg onClick={onClick} className={className} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7333 6.6665H1.26667C0.567106 6.6665 0 7.23361 0 7.93317V8.0665C0 8.76606 0.567106 9.33317 1.26667 9.33317H22.7333C23.4329 9.33317 24 8.76606 24 8.0665V7.93317C24 7.23361 23.4329 6.6665 22.7333 6.6665Z" fill="#FBFAFE" />
    <path d="M22.7333 13.3335H1.26667C0.567106 13.3335 0 13.9006 0 14.6002V14.7335C0 15.4331 0.567106 16.0002 1.26667 16.0002H22.7333C23.4329 16.0002 24 15.4331 24 14.7335V14.6002C24 13.9006 23.4329 13.3335 22.7333 13.3335Z" fill="#FBFAFE" />
    <path d="M22.7333 0H1.26667C0.567106 0 0 0.567106 0 1.26667V1.4C0 2.09956 0.567106 2.66667 1.26667 2.66667H22.7333C23.4329 2.66667 24 2.09956 24 1.4V1.26667C24 0.567106 23.4329 0 22.7333 0Z" fill="#FBFAFE" />
  </svg>
  )
  // return (<svg onClick={onClick} className={className} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>)
}