import React from 'react';
import image_two from '../assets/home_background_img_1.png';
import image_one from '../assets/home_background_img_2.png';
import image_three from '../assets/home_background_img_3.png';
import HeaderContainer from '../components/header.jsx';

const Hero = () => {
  return (
    <div>
      <div className="home-hero background bg-[url('src/assets/hero_background_image.png')] h-[100vh] ">
        <div className="mx-auto w-[68%]  max-w-[98%] pt-4">
          <HeaderContainer />
          
          
          <div className="mt-[32%] flex flex-col items-center gap-4">
            <div
              className="max-w-[50rem] text-center text-[3rem] font-extrabold not-italic leading-[110%] tracking-[0.125rem] text-[color:var(--White,#FFF)]
"
            >
              We See Men In Their Multitude Saved, Trained, And Sent
            </div>
            <div className="  text-center text-[1.2rem] font-medium not-italic leading-[150%] text-[#D7DDE2]">
              We envision all men everywhere fullfilling and walking in the
              fullness of God’s plan for their lives.{' '}
            </div>
            <div className="flex gap-3">
              <div className=" basic-hover-state flex w-fit items-center justify-center gap-1 rounded-md bg-[hsl(251,30%,7%)] px-5 py-2 text-[0.85rem] text-white ">
                Learn More
              </div>
              <div className=" basic-hover-state flex w-fit items-center justify-center gap-1 rounded-md bg-[#E8E6E2] px-5 py-1 text-[0.85rem] text-[#000000]">
                Check Out our latest sermon
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-10 ">
            <div>
              <img className="h-[28rem] w-[24rem]" src={image_three} />
            </div>
            <div>
              <div className="bg-[#E6EAEE12] mb-3 border rounded-full text-[whitesmoke] text-center text-[1.3rem] not-italic font-bold leading-[150%] tracking-[0.125rem] bg-clip-text">*Upcoming Events*</div>
              <img  className="h-[30rem] w-[24rem]"  src={image_two} />
            </div>
            <div>
              <img  className="h-[28rem] w-[24rem]"  src={image_one} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
