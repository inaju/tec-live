const CarouselItems = ({ imageLocation, imageSrc, subText, text }) => {
  return (
    <div
      className={`${imageLocation == 'left' ? ' ml-[20rem] ' : ' mr-[20rem]'} relative 
    mt-10 flex xl:w-[800px] w-[300px]  mx-auto  justify-between border-[5px] border-solid
  border-[rgba(255,114,0,0.20)] p-8 xl:py-[9.5625rem] xl:px-[3.75rem] min-h-[44.375rem] mb-[16.375rem]  `}
    >
      <CarouselImage imageLocation={imageLocation} imageSrc={imageSrc} />
      <div
        className={`${imageLocation == 'left' ? ' pl-[20rem] ' : ''} flex w-full flex-col`}
      >
        <div
          className="font-mona  max-w-[38.75rem] text-[3.375rem] font-bold not-italic leading-[110%] tracking-[1px] text-[color:var(--Dark-back-gorund,#0D0E11)]"
        >
          {text}
        </div>
        <div
          className="font-inter text-[1.5rem] mt-8 max-w-[45rem] font-normal not-italic leading-[24px] tracking-[0.24px] text-[#121519]"
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
    return `absolute -right-[20rem] top-[3.9375rem]`;
  }
  if (imageLocation == 'left') {
    return `absolute -left-[15rem] top-[3.9375rem]`;
  }
};
const CarouselImage = ({ imageLocation, imageSrc }) => {
  return (
    <div className={getCorrectPosition(imageLocation)}>
      <img className=" hidden xl:block xl:h-[45.625rem] xl:max-w-[38rem] " src={imageSrc} />
    </div>
  );
};
