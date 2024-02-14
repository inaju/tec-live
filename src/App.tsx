import PNI_Mic from './assets/PNI-mic.png';
import BottomCTA from './components/bottom-cta.jsx';
import MailingListForm from './components/mailing-list-form.jsx';
import SimpleCarousel from './components/simple-carousel.jsx';
import Footer from './components/footer.jsx';
import Hero from './containers/hero.jsx';

const carouselItemDataRight = [
  {
    imageLocation: 'right',
    imageSrc: 'assets/carousel_image_1.png',
    subText:
      'At The Equipping Center, God has put us on display in Christ to the nations. We operate with the message of reconciliation on our lips. Preaching the Gospel to all, till the whole world calls on and believes in the Name of Jesus. ',
    text: 'Spreading the Knowledge of God in Every Place',
  },
  {
    imageLocation: 'right',
    imageSrc: 'assets/carousel_image_1.png',
    subText:
      'At The Equipping Center, God has put us on display in Christ to the nations. We operate with the message of reconciliation on our lips. Preaching the Gospel to all, till the whole world calls on and believes in the Name of Jesus. ',
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
    subText:
      'Through teachings and active discipleship, we are committed to raising faithful men who are sound in truth, able to give a defence for the faith and will be able to teach others also. ',
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
export default function App() {
  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com"
          rel="preconnect" />
        <link href="https://fonts.gstatic.com"
          rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <div className="relative">
        <div className="">
          <Hero />
        </div>
        <div className="bg-[#E8E6E2] pb-24 pt-40">
          <div className="flex flex-col gap-28">
            <SimpleCarousel data={carouselItemDataRight} />
            <SimpleCarousel data={carouselItemDataLeft} />
          </div>
          <div className=" relative mx-auto flex flex-col items-center justify-center py-20">
            <div className=" xl:hidden px-6 pb-8">
              <div className="font-mona blend-container text-3xl font-bold leading-[2.5rem]">
                A Fam<span>ily Bound </span>Togeth<span>er With Love</span>
              </div>
              <div className="blend-container mt-4 max-w-[500px] text-[1rem] font-inter ">
                We seek to promote brotherly love and affection as we{' '}
                fellowship. Serving{' '}
                God together with one passion, and knit in love as
                family. Put a picture of a lovely setting or people
                smiling sha at a meeting
              </div>
            </div>
            <div className="absolute left-[6.6%] hidden xl:block ">
              <div className="font-mona blend-container max-w-[600px] text-[3.5rem] font-bold leading-[5rem]">
                A Fam<span>ily Bound </span>Togeth<span>er With Love</span>
              </div>
              <div className="blend-container mt-4 max-w-[500px] text-[1rem] font-inter ">
                We seek to promote b<span>rotherly love and affection as we{' '}
                  fellowship.</span> Serving{' '}
                God together <span>with one passion, and knit in love as
                  family.</span> Put a picture of a love<span>ly setting or people
                    smiling sha at a meeting</span>
              </div>
            </div>
            <div className="xl:h-[416px] xl:w-[826px]  xl:border-[10px] ">
              <img src={PNI_Mic} className="xl:h-full xl:w-full xl:px-1 h-[50vh] w-[150vw] xl:object-fill object-cover px-6 " />
            </div>
          </div>

          <div className=" font-mona mx-auto  flex mt-10 xl:w-[800px] flex-col items-center justify-center border-[4px] border-white bg-[#F78E00] p-6 text-white ">
            <div className="mx-auto max-w-[697px] space-y-4 text-lg xl:text-[1.5rem] ">
              <div>
                Join Us Every Sunday{' '}
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
        <div className="max-h-[100vh] ">
          <BottomCTA />
        </div>
        <div className=" relative top-[97vh] ">
          <MailingListForm />
          <Footer />
        </div>
      </div>
    </html>
  );
}
