import React from 'react';
import image_two from '../assets/home_background_img_1.png';
import image_one from '../assets/home_background_img_2.png';
import image_three from '../assets/home_background_img_3.png';
import HeaderContainer from '../components/header.jsx';

const Hero = () => {
  return (
    <div>
      <div className=" relative w-screen bg-no-repeat bg-[length:180vw_190vh] bg-[-150px_-1rem] xl:bg-[-340px_-1rem] xl:h-[173vh] xl:bg-[length:150vw_290vh] bg-hero-pattern">
        <div className="mx-auto xl:w-[68%] xl:max-w-[98%] pt-4 ">
          <HeaderContainer />

          <div className="mt-[40%] xl:mt-[25%] px-10 xl:px-0 flex flex-col items-left xl:items-center gap-4">
            <div
              className="font-mona  text-left xl:text-center text-4xl xl:text-[3rem] font-extrabold not-italic leading-[110%] tracking-[0.125rem] text-[color:var(--White,#FFF)]
"
            >
              We See Men In Their Multitude Saved, Trained, And Sent
            </div>
            <div className="font-inter text-left text-sm xl:text-center xl:text-[1rem] font-medium not-italic leading-[150%] text-[#D7DDE2]">
              We envision all men everywhere fullfilling and walking in the
              fullness of God’s plan for their lives.{' '}
            </div>
            <div className="flex flex-col xl:flex-row gap-3 xl:mt-6 mt-10">
              <div className=" basic-hover-state flex xl:w-fit items-center justify-center gap-1 rounded-md bg-[hsl(251,30%,7%)] px-5 py-2 text-[0.85rem] text-white ">
                Learn More
              </div>
              <div className=" basic-hover-state flex xl:w-fit items-center justify-center gap-1 rounded-md bg-[#E8E6E2] px-5 py-2 text-[0.85rem] text-[#000000]">
                Check Out our latest sermon
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 xl:mt-24 px-10 xl:px-0 xl:flex-row xl:bg-transparent bg-[#0F0D18] xl:pt-0 pt-20 pb-10 mt-[20%] ">
            <div className="xl:hidden block font-mona bg-[#E6EAEE12] mb-3 border rounded-full text-[whitesmoke] text-center text-[1.3rem] not-italic font-bold leading-[150%] tracking-[0.125rem] bg-clip-text">*Upcoming Events*</div>

            <div>
              <img className="h-[26rem] w-[24rem] xl:h-[26rem] xl:w-[24rem]" src={image_three} />
            </div>
            <div>
              <div className="hidden xl:block font-mona bg-[#E6EAEE12] mb-3 border rounded-full text-[whitesmoke] text-center text-[1.3rem] not-italic font-bold leading-[150%] tracking-[0.125rem] bg-clip-text">*Upcoming Events*</div>
              <img className=" h-[26rem] w-[24rem] xl:h-[28rem] xl:w-[24rem]" src={image_two} />
            </div>
            <div>
              <img className=" h-[26rem] w-[24rem] xl:h-[26rem] xl:w-[24rem]" src={image_one} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
