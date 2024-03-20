import React from 'react';
import HeaderContainer from '../components/header.jsx';
import TextComponent from '../components/text.jsx';
import CustomButton from '../components/custom-button.jsx';

const Hero = () => {
  return (
    <div>
      <div className="text-[14px] relative w-screen bg-no-repeat bg-[-1.25rem_-1rem] md:bg-[-0.625rem_-1rem] bg-[length:110vw_110.4375rem] h-[112.5rem] xl:h-[112.5rem] 2xl:bg-[length:100vw_140.5rem] xl:bg-[length:100vw_120.5rem] bg-mobile-hero-pattern md:bg-hero-pattern">
        <div className="mx-auto xl:max-w-[68%] pt-4 ">
          <HeaderContainer />
          <div className="mt-[374px] md:mt-[40%] xl:mt-[22rem] mx-[12px] xl:px-0 flex flex-col items-center gap-4">
            <div className="">
              <TextComponent text={"We See Men In Their Multitude Saved, Trained, And Sent"} mode="heading-1" />
              <TextComponent
                className="mt-[1rem] xl:mt-[2rem]"
                text={" We envision all men everywhere fullfilling and walking in the fullness of God’s plan for their lives."} mode="paragraph-1" />
            </div>
            <div className="flex w-full lg:w-fit lg:flex-col xl:flex-row gap-3 mt-[2.25rem] xl:mt-[3.375rem]">
              <CustomButton
                text={" Learn More"} mode={"black"}
              />
              <CustomButton
                text={" Check Out our latest sermon"} mode={"light"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 xl:mt-24  xl:px-0 xl:flex-row justify-center xl:bg-transparent bg-[#0F0D18] xl:pt-0 pt-20 pb-10 mt-[20%]  ">
            <div className="xl:hidden block font-mona bg-[#E6EAEE12] mb-3 border rounded-full text-[whitesmoke] text-center text-[1.3rem] not-italic font-bold leading-[150%] tracking-[0.125rem] bg-clip-text">*Upcoming Events*</div>

            <div>
              <img className="h-[39.3125rem] w-[29.375rem]" src={'/assets/home_background_img_3.png'} />
            </div>
            <div>
              <div className="hidden xl:block font-mona bg-[#E6EAEE12] mb-[1.875rem] px-[2.5rem] py-[0.625rem] border rounded-full text-[whitesmoke] text-center text-[1.3rem] not-italic font-bold leading-[150%] tracking-[0.125rem] bg-clip-text">*Upcoming Events*</div>
              <img className="h-[40.6875rem] w-[22.5rem] " src={'/assets/home_background_img_1.png'} />
            </div>
            <div>
              <img className=" h-[35.1875rem] w-[26rem]" src={'/assets/home_background_img_2.png'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
