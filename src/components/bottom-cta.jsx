import React from 'react';
import big_footer_image from '../assets/footer_image_overlay.png';
import CustomButton from './custom-button';
// import MailingListForm from './mailing-list-form.jsx';

const BottomCTA = () => {
  return (
    <div className="relative max-h-[100vh] border ">
      <div
        className="max-h-[100vh] mb-[10rem] absolute right-0 top-0 mx-auto flex h-screen w-screen flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${big_footer_image})`,

          backgroundRepeat: 'no-repeat',
          backgroundSize: '100vw 170vh',
          objectFit: 'cover',
        }}
      >
        <div className=" font-mona   text-center text-5xl font-bold text-white">
          Help Advance God’s Work
          <br /> Through The Equipping Center
        </div>
        <div className="font-inter text-md mt-8 max-w-[45rem] text-center font-[550] text-[#D7DDE2]">
          We envision all men celebrating endless life in Christ.Our reach is to
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
