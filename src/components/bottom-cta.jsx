import React from 'react';
// import big_footer_image from '../assets/footer_image_overlay.png';
import CustomButton from './custom-button';
// import MailingListForm from './mailing-list-form.jsx';

const BottomCTA = () => {
  return (
    <div className="relative max-h-[100vh] border ">
      <div
        className="bg-cta-background-image bg-[length:180vw_170vh] xl:bg-[length:100vw_170vh] px-10 xl:px-0 max-h-[100vh] mb-[10rem] absolute right-0 top-0 mx-auto flex h-screen w-screen flex-col items-left xl:items-center justify-center"

      >
        <div className=" font-mona   text-left text-3xl xl:text-center xl:text-5xl font-bold text-white">
          Help Advance God’s Work
          <br /> Through The Equipping Center
        </div>
        <div className="font-inter text-left text-sm mt-4 leading-6 xl:text-[1rem] xl:mt-8 xl:max-w-[45rem] xl:text-center font-[550] text-[#D7DDE2]">
          We envision all men celebrating endless life in Christ. Our reach is to
          the ends of the earth, we are redeploying people in Christ, for
          Christ, with Joy.
        </div>
        <div className="mt-10">
          <CustomButton text="Give Now" />
        </div>
      </div>
    </div>
  );
};

export default BottomCTA;
