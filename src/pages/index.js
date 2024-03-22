import BottomCTA from '../components/bottom-cta.jsx';
import SimpleCarousel from '../components/simple-carousel.jsx';
import Footer from '../components/footer.jsx';
import Hero from '../containers/hero.jsx';

const carouselItemDataRight = [
  {
    imageLocation: 'right',
    imageSrc: 'assets/carousel_image_1.png',
    mobileImageSrc: 'assets/mobile_carousel_image_1.png',
    subText: 'At The Equipping Center, God has put us on display in Christ to the nations. We operate with the message of reconciliation on our lips. Preaching the Gospel to all, till the whole world calls on and believes in the Name of Jesus. ',
    text: 'Spreading the Knowledge of God in Every Place',
  },
  {
    imageLocation: 'right',
    imageSrc: 'assets/carousel_image_1.png',
    subText: 'At The Equipping Center, God has put us on display in Christ to the nations. We operate with the message of reconciliation on our lips. Preaching the Gospel to all, till the whole world calls on and believes in the Name of Jesus. ',
    text: 'Second Carousel',
  },
  {
    imageLocation: 'left',
    imageSrc: 'assets/carousel_image_2.png',
    subText:
      'Through teachings and active discipleship, we are committed to raising faithful men who are sound in truth, able to give a defence for the faith and will be able to teach others also. ',
    text: 'First Left',
  },
  {
    imageLocation: 'right',
    imageSrc: 'assets/carousel_image_1.png',
    subText:
      'At The Equipping Center, God has put us on display in Christ to the nations. We operate with the message of reconciliation on our lips. Preaching the Gospel to all, till the whole world calls on and believes in the Name of Jesus. ',
    text: 'Third Carousel',
  },
];


const carouselItemDataLeft = [
  {
    imageLocation: 'left',
    imageSrc: 'assets/carousel_image_2.png',
    mobileImageSrc: 'assets/mobile_carousel_image_2.png',
    subText: 'Through teachings and active discipleship, we are committed to raising faithful men who are sound in truth, able to give a defence for the faith and will be able to teach others also. ',
    text: 'Reaching The Unsaved',
  },
  {
    imageLocation: 'right',
    imageSrc: 'assets/carousel_image_1.png',
    subText:
      'At The Equipping Center, God has put us on display in Christ to the nations. We operate with the message of reconciliation on our lips. Preaching the Gospel to all, till the whole world calls on and believes in the Name of Jesus. ',
    text: 'Spreading the Knowledge of God in Every Place',
  },
  {
    imageLocation: 'left',
    imageSrc: 'assets/carousel_image_2.png',
    subText:
      'Through teachings and active discipleship, we are committed to raising faithful men who are sound in truth, able to give a defence for the faith and will be able to teach others also. ',
    text: 'Second Left',
  },
];



export default function Home() {
  return (
    <div className="relative">
      <div>
        <Hero />
      </div>
      <div className="bg-[#E8E6E2] pb-24 pt-40 ">
        <div className="flex flex-col lg:gap-28 space-y-[320px] lg:space-y-[0px] mb-[300px] max-w-[94%] mx-auto">
          <SimpleCarousel data={carouselItemDataRight} />
          <SimpleCarousel data={carouselItemDataLeft} />
        </div>
        <div className=" relative mx-auto flex flex-col items-center justify-center py-2  max-w-[94%] lg:max-w-[1200px] ">
          {/* {"mobile"} */}
          <div className=" xl:hidden  border  lg:px-6 pb-8">
            <div className="font-mona blend-container text-[40px] text-3xl font-extrabold lg:font-bold  leading-[45px] lg:leading-[2.5rem]">
              A Family Bound Together With Love
            </div>
            <div className="blend-container mt-[16px] lg:mt-4 max-w-[500px] text-[16px] lg:text-[1rem] font-inter ">
              We seek to promote brotherly love and affection as we{' '}
              fellowship. Serving{' '}
              God together with one passion, and knit in love as
              family. Put a picture of a lovely setting or people
              smiling sha at a meeting.
            </div>
          </div>
          {/* {"desktop"} */}

          <div className="absolute left-[5%]  top-[10.0625rem] hidden xl:block ">
            <div className="font-mona blend-container max-w-[46.9375rem] text-[4rem] font-bold leading-[5rem]">
              A Fami<span>ly Bound</span> Togeth<span>er With Love</span>
            </div>
            <div className="blend-container mt-4 max-w-[43.25rem]  text-[1.5rem] font-inter ">
              We seek to promote b<span>rotherly love and affection as we{' '}</span>
              fellowship. Serving{' '}
              G<span>od together with one passion, and knit</span> in love as
              family. Put a <span>picture of a lovely setting or people</span>  {" "}
              smiling sha at a meeti<span>ng</span>
            </div>
          </div>
          <div className=" xl:h-[38.5rem] xl:w-[70.375rem]  xl:border-[10px]  ">

            <img src={'/assets/PNI-mic.png'} className=" w-[380px] h-[220px] xl:h-full xl:w-full xl:px-1  xl:object-fill object-fill lg:object-cover lg:px-6  " />
          </div>
        </div>


        <div className=" font-mona max-w-[94%] mx-auto px-8 flex mt-10  mb-[10rem] xl:w-[70.375rem] flex-col items-center justify-center border-[0.35rem] border-white bg-[#F78E00] lg:px-[4.6875rem] py-[3.125rem] text-white ">
          <div className="mx-auto space-y-4 text-[2rem] xl:text-[2rem] ">
            <div>
              <span className="font-light">
                Join Us Every Sunday{' '}
              </span>
              <span className="mx-2 font-semibold">
                9:00am, 10:45am, & 4:30pm
              </span>
            </div>
            <div>
              Address
              <span className="mx-2 font-semibold">
                11832 S. Warner Elliot LoopPhoenix, AZ 85044
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[148vh]">

        <BottomCTA />
      </div>
      <Footer />
    </div>
  );
}
