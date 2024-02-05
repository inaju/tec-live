import PNI_Mic from './assets/PNI-mic.png';
import BottomCTA from './components/bottom-cta.jsx';
import MailingListForm from './components/mailing-list-form.jsx';
import CarouselContainer from './components/carousel-container.jsx';
import Hero from './containers/hero.jsx';


const carouselItemData = [
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
    text: 'Raising Faithful Believers',
  },
];
export default function App() {
  return (
    <div>
      <div className="background">
        {/* <div className=" ">
      </div> */}
        <div className="hero">
          <Hero />
          <div className="flex h-[50vh]"></div>
        </div>
      </div>
      <div className="bg-[#E8E6E2] pb-24">
        <div>
          <CarouselContainer data={carouselItemData[0]} />
        </div>
        <div>
          <CarouselContainer data={carouselItemData[1]} />
        </div>

        <div className=" relative mx-auto flex flex-col items-center justify-center py-20">
          {/* <div className="bg-white top-10 left-10 w-[450px] h-[300px] -z-1000 absolute"></div> */}
          <div className=" absolute left-[6.6%] ">
            <div className="blend-container max-w-[600px] text-[3.5rem] font-bold leading-[5rem]">
              A Fam<span>ily Bound </span>Togeth<span>er With Love</span>
            </div>
            <div className="blend-container mt-4 max-w-[500px] text-[1.2rem]">
              We seek to promo<span>te brotherly love and affection as we</span>{' '}
              fellowship. Serving{' '}
              <span>God together with one passion, and</span> knit in love as 
              famil<span>y.  Put a picture of a lovely setting or</span> people
              smiling sha<span>at a meeting</span>
            </div>
          </div>
          <div className="h-[416px] w-[826px] border-[10px]">
            <img src={PNI_Mic} />
          </div>
        </div>

        <div className=" mx-auto  flex w-[800px] flex-col items-center justify-center border-[4px] border-white bg-[#F78E00] p-6 text-white ">
          <div className="mx-auto max-w-[697px] text-[1.5rem] ">
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
      <BottomCTA />
      <MailingListForm />
    </div>
  );
}