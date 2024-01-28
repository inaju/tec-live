import React from 'react';
import CarouselItems from './carousel-items';

const CarouselContainer = ({ data }) => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center py-20">
      <CarouselItems
        imageLocation={data?.imageLocation}
        imageSrc={data?.imageSrc}
        subText={data?.subText}
        text={data?.text}
      />
      
      {/* {carouselItemData.map((item, index) => (
        <div key={index}>
          <CarouselItems
            imageLocation={item.imageLocation}
            imageSrc={item.imageSrc}
            subText={item.subText}
            text={item.text}
          />
        </div>
      ))} */}
    </div>
  );
};

export default CarouselContainer;
