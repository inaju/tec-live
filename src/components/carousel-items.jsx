const CarouselItems = ({ imageLocation, imageSrc, subText, text }) => {
  return (
    <div
      className="relative 
    mt-10 flex w-[800px] mx-auto  justify-between border-[5px] border-solid
  border-[rgba(255,114,0,0.20)] p-14 py-28 min-h-[500px]  "
    >
      <CarouselImage imageLocation={imageLocation} imageSrc={imageSrc} />
      <div
        className={`${imageLocation == 'left' ? ' pl-[14rem] ' : ''} flex w-full flex-col`}
      >
        <div
          className="font-mona  max-w-[450px] text-[2.5rem] font-extrabold not-italic leading-[110%] tracking-[1px] text-[color:var(--Dark-back-gorund,#0D0E11)]"
        >
          {text}
        </div>
        <div
          className="font-inter text-md mt-8 max-w-[450px] font-normal not-italic leading-[24px] tracking-[0.24px] text-[color:var(--Grayscale-900,#121519)]"
        >
          {subText}
        </div>
      </div>

    </div>
  );
};
export default CarouselItems;

const getCorrectPosition = (imageLocation) => {
  if (imageLocation == 'right') {
    return `absolute -right-28 top-6`;
  }
  if (imageLocation == 'left') {
    return `absolute -left-28 top-6`;
  }
};
const CarouselImage = ({ imageLocation, imageSrc }) => {
  return (
    <div className={getCorrectPosition(imageLocation)}>
      <img className="h-[430px] min-w-[350px]" src={imageSrc} />
    </div>
  );
};
