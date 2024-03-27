import React from 'react';
// import big_footer_image from '../assets/footer_image_overlay.png';
import CustomButton from './custom-button';
import CustomInput from './custom-input.jsx';
import Footer from './footer';
// import MailingListForm from './mailing-list-form.jsx';

const BottomCTA = () => {
  return (
    <div className="relative">
      <div
        className="bg-mobile-cta-background-image lg:bg-cta-background-image bg-no-repeat bg-[-20.25rem_-0.4rem] lg:bg-[0rem_-0rem]   bg-[length:180vw_140vh] xl:bg-[length:100vw_150vh] px-10 xl:px-0  absolute right-0 top-0 mx-auto flex  pt-[100px] lg:h-[180vh] w-screen flex-col items-left xl:items-center justify-center"
      >
        <div className="flex flex-col items-center mb-[15rem] max-w-[63.75rem] gap-2 my-auto mt-[32px] lg:mt-[35rem]">

          <div className="font-mona leading-[38px] lg:leading-[4rem] tracking-[0.1rem]  lg:tracking-[0.1rem] text-center lg:text-left text-[32px] xl:text-center xl:text-[3.375rem] font-bold text-white">
            Help Advance God’s Work
            Through The Equipping Center
          </div>
          <div className="font-inter text-center lg:text-left text-[16px]  leading-[25px] mt-4 lg:leading-[2rem] xl:text-[1.25rem] xl:mt-[1.25rem] xl:max-w-[61.875rem] xl:text-center  text-[#D7DDE2]">
            We envision all men celebrating endless life in Christ. Our reach is to
            the ends of the earth, we are redeploying people in Christ, for
            Christ, with Joy.
          </div>
          <div className="mt-10  ">
            <CustomButton
              className="!px-[1.6rem]"
              text="Give Now" />
          </div>
        </div>
        <div className="mx-auto  flex flex-col gap-10 lg:gap-10 justify-center items-center w-full lg:w-[screen] lg:p-20 ">
          <h2 className="text-center text-[32px] xl:text-[3.25rem] xl:mb-[1.75rem] text-white font-bold font-mona ">Join Our Mailing List</h2>
          <form className="lg:bg-[#E6EAEE12] lg:p-[3.75rem] grid grid-cols-1 xl:grid-cols-2 gap-[16px] lg:gap-4  xl:max-w-[81rem] w-full mb-[10rem]">
            <CustomInput placeholderText={"Enter your name"} />
            <CustomInput placeholderText={"Enter your phone number"} />
            <CustomInput placeholderText={"Enter your email"} />

            <button className="bg-[#E8E6E2] py-[8px]  text-[16px] xl:text-[1.125rem] text-black w-full font-medium p-2 rounded-md">
              Send me updates</button>
          </form>

        </div>
        <div className=" flex flex-col  gap-12 items-start mx-1 sm:flex-row justify-between  lg:mx-auto  mt-10 mb-20 ">

          <div className='w-[29.25rem] '>
            <FooterHeader text="The Equipping Center" />
            <div className="mt-3 grid space-y-[1.25rem] text-sm">
              <FooterItem text="11832 S. Warner Elliot LoopPhoenix, AZ 85044" />
              <FooterItem text="Copyright © The Equpping Center All Rights Reserved" />
            </div>
          </div>
          <div>
            <FooterHeader text="Quick links" />
            <div className="mt-3 grid space-y-[1.25rem] text-sm">
              <FooterItem text="About Us" />
              <FooterItem text="Sermons" />
              <FooterItem text="Give" />
              <FooterItem text="Contact Us" />
            </div>
          </div>
          <div className=' '>
            <FooterHeader text="Reach Us" />
            <div className="mt-3 grid space-y-[1.25rem] text-sm break-word">
              <FooterItem text="Mobile: +1 (000) 111 2222" />
              <FooterItem text="theequippingcentreglobal@gmail.com" />
              <FooterItem text="Give" />
              <FooterItem text="Contact Us" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BottomCTA;


const FooterItem = ({ text }) => {
  return (
    <p><a className="font-inter leading-[32px] font-normal inline-flex lg:text-[1.5rem] text-[24px]  gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">{text}</a></p>
  )
}
const FooterHeader = ({ text }) => {
  return (
    <h4 className="font-mona text-[32px] lg:text-[2rem] mb-[1.25rem] text-gray-900 uppercase dark:text-gray-100">{text}</h4>
  )
}