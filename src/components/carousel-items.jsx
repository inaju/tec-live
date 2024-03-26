const CarouselItems = ({ imageLocation, imageSrc, subText, text, mobileImageSrc }) => {
  return (
    <div
      className={`${imageLocation == 'left' ? 'lg:ml-[20rem] ' : ' lg:mr-[20rem]'} relative 
    mb-[180px] flex lg:flex-row flex-col-reverse xl:w-[800px] lg:w-[300px] pb-[100px] lg:pb-[0px] mx-auto  justify-between border-[5px] border-solid
  border-[rgba(255,114,0,0.20)] p-8 xl:py-[9.5625rem] xl:px-[3.75rem] min-h-[44.375rem] lg:mb-[16.375rem]`}>      <CarouselImage imageLocation={imageLocation} imageSrc={imageSrc} mobileImageSrc={mobileImageSrc} />
      <div className={`${imageLocation == 'left' ? ' lg:pl-[20rem] ' : ''} flex w-full flex-col`}>
        <div className="font-mona  max-w-[38.75rem] text-[33px] lg:text-[3.375rem] font-bold not-italic leading-[120%] tracking-[1px] text-[color:var(--Dark-back-gorund,#0D0E11)]">
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
    return `lg:absolute lg:-right-[20rem] lg:top-[3.9375rem] -bottom-[400px]`;
  }
  if (imageLocation == 'left') {
    return `lg:absolute lg:-left-[15rem] lg:top-[3.9375rem] left-[10px] -bottom-[350px]`;
  }
};

const CarouselImage = ({ imageLocation, imageSrc, mobileImageSrc }) => {
  return (
    <div className={`-mb-[400px]  mt-10  ${getCorrectPosition(imageLocation)}`}>
      <img className={`${imageLocation == 'right' ? "w-[350px]" : "w-[370px]"}  h-full  xl:h-[45.625rem] xl:max-w-[38rem]`} src={mobileImageSrc} />
    </div>
  );
};



