import CustomButton from '../components/custom-button.jsx';
import HeaderContainer from '../components/header.jsx';
import TextComponent from '../components/text.jsx';

const Hero = () => {
  return (
    <div>
      <div className="text-[14px] relative w-screen bg-no-repeat bg-[-7.85rem_-0.4rem] md:bg-[-0.625rem_-1rem] bg-[length:130vw_155.4375rem] h-[135.5rem]  xl:h-[112.5rem] 2xl:bg-[length:100vw_140.5rem] xl:bg-[length:100vw_120.5rem] bg-mobile-hero-pattern md:bg-hero-pattern">
        <div className="mx-auto max-w-[94%] xl:max-w-[68%] pt-4">
          <HeaderContainer />
          <div className="mt-[374px] md:mt-[40%] xl:mt-[22rem] xl:px-0 flex flex-col items-center gap-4">
            <div className="">
              <TextComponent text={"We See Men In Their Multitude Saved, Trained, And Sent"} mode="heading-1" />
              <TextComponent
                className="mt-[1rem] xl:mt-[2rem]"
                text={" We envision all men everywhere fullfilling and walking in the fullness of God’s plan for their lives."} mode="paragraph-1" />
            </div>
            <div className="flex w-full lg:w-fit lg:flex-col xl:flex-row gap-3 mt-[2.25rem] xl:mt-[3.375rem]">
              <CustomButton
                link={"/about-us"}
                className="!pl-[15%] lg:hidden"
                text={" Learn More"} mode={"black"}
              />
              <CustomButton
                link={"/about-us"}
                className=" hidden lg:block"
                text={" Learn More"} mode={"black"}
              />
              <CustomButton
                link={"https://t.me/nelsoniheagwam"}
                className="hidden lg:block"
                text={"Check Out our latest sermon"} mode={"light"}
              />
              <CustomButton
                link={"https://t.me/nelsoniheagwam"}
                className="!w-full lg:hidden block !pl-[13%]"
                text={"Latest sermon"} mode={"light"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-[64px] xl:mt-24 xl:px-0 xl:flex-row justify-center xl:bg-transparent lg:bg-[#0F0D18] xl:pt-0 pt-20 pb-10 ">
            <div className="xl:hidden block font-mona bg-[#E6EAEE12] mb-3 border rounded-full text-[whitesmoke] text-center text-[21px] lg:text-[1.3rem] not-italic font-bold leading-[150%] tracking-[0.125rem] bg-clip-text">*Upcoming Events*</div>
            <div>
              <img className="lg:h-[39.3125rem] lg:w-[29.375rem] w-full h-full object-fit " src={'/assets/home_background_img_3.png'} />
            </div>
            <div>
              <div className="hidden xl:block font-mona bg-[#E6EAEE12] mb-[1.875rem] px-[2.5rem] py-[0.625rem] border rounded-full text-[whitesmoke] text-center text-[1.3rem] not-italic font-bold leading-[150%] tracking-[0.125rem] bg-clip-text">*Upcoming Events*</div>
              <img className="hidden lg:block h-[40.6875rem] w-[22.5rem] " src={'/assets/home_background_img_1.png'} />
            </div>
            <div>
              <img className="hidden lg:block  h-[35.1875rem] w-[26rem]" src={'/assets/home_background_img_2.png'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
