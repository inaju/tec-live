import React from 'react';
// import big_footer_image from '../assets/footer_image_overlay.png';
import CustomButton from './custom-button';
import CustomInput from './custom-input.jsx';
// import MailingListForm from './mailing-list-form.jsx';

const BottomCTA = () => {
  return (
    <div className="relative ">
      <div
        className=" bg-cta-background-image bg-no-repeat xl:bg-[length:100vw_150vh] px-10 xl:px-0  absolute right-0 top-0 mx-auto flex h-[200vh] w-screen flex-col items-left xl:items-center justify-center"
      >
        <div className="flex flex-col items-center  mb-[15rem]">

          <div className=" font-mona leading-[4rem] tracking-[0.3rem] text-left text-3xl xl:text-center xl:text-[3.375rem] font-bold text-white">
            Help Advance God’s Work
            <br /> Through The Equipping Center
          </div>
          <div className="font-inter text-left text-sm mt-4 leading-[2rem] xl:text-[1.25rem] xl:mt-[1.25rem] xl:max-w-[61.875rem] xl:text-center font-[550] text-[#D7DDE2]">
            We envision all men celebrating endless life in Christ. Our reach is to
            the ends of the earth, we are redeploying people in Christ, for
            Christ, with Joy.
          </div>
          <div className="mt-10  ">
            <CustomButton text="Give Now" />
          </div>
        </div>


        <div className="mx-auto  flex flex-col gap-10 justify-center items-center  w-[screen] p-20 ">
          <h2 className="mb-2 text-xl xl:text-[3.25rem] xl:mb-[1.75rem] text-white font-bold font-mona ">Join Our Mailing List</h2>
          <form className="bg-[#E6EAEE12] p-[3.75rem] grid grid-cols-1 xl:grid-cols-2 gap-4  xl:max-w-[81rem] mb-[10rem]">
            <CustomInput placeholderText={"Enter your name"} />
            <CustomInput placeholderText={"Enter your phone number"} />
            <CustomInput placeholderText={"Enter your email"} />

            <button className="bg-[#E8E6E2] text-xs xl:text-[1.125rem] text-black w-full font-medium p-2 rounded-md">
              Send me updates</button>
          </form>

        </div>
      </div>


    </div>
  );
};

export default BottomCTA;
