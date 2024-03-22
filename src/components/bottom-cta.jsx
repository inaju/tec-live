import React from 'react';
// import big_footer_image from '../assets/footer_image_overlay.png';
import CustomButton from './custom-button';
import CustomInput from './custom-input.jsx';
// import MailingListForm from './mailing-list-form.jsx';

const BottomCTA = () => {
  return (
    <div className="relative ">
      <div
        className="bg-mobile-cta-background-image lg:bg-cta-background-image bg-no-repeat bg-[-4.25rem_-0.4rem] lg:bg-[0rem_-0rem]   bg-[length:120vw_220vh] xl:bg-[length:100vw_150vh] px-10 xl:px-0  absolute right-0 top-0 mx-auto flex  pt-[100px] lg:h-[180vh] w-screen flex-col items-left xl:items-center justify-center"
      >
        <div className="flex flex-col items-center mb-[15rem] max-w-[63.75rem] gap-2 my-auto mt-[32px] lg:mt-0">

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

        <div className="mx-auto flex flex-col gap-10 lg:gap-10 justify-center items-center w-full lg:w-[screen] lg:p-20 ">
          <h2 className="text-center text-[32px] xl:text-[3.25rem] xl:mb-[1.75rem] text-white font-bold font-mona ">Join Our Mailing List</h2>
          <form className="lg:bg-[#E6EAEE12] lg:p-[3.75rem] grid grid-cols-1 xl:grid-cols-2 gap-[16px] lg:gap-4  xl:max-w-[81rem] w-full mb-[10rem]">
            <CustomInput placeholderText={"Enter your name"} />
            <CustomInput placeholderText={"Enter your phone number"} />
            <CustomInput placeholderText={"Enter your email"} />

            <button className="bg-[#E8E6E2]   py-[15px]  text-[16px] xl:text-[1.125rem] text-black w-full font-medium p-2 rounded-md">
              Send me updates</button>
          </form>

        </div>
      </div>


    </div>
  );
};

export default BottomCTA;
