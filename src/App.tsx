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
      <div>
        <CarouselContainer data={carouselItemData[0]} />
      </div>
      <div>
        <CarouselContainer data={carouselItemData[1]} />
      </div>
    </div>
  );
}
