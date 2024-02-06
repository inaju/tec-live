import React from 'react';
import CarouselItems from './carousel-items';

const CarouselContainer = ({ data }) => {
  console.log(data, data.length, 'data')
  if (data.length == 0) {
    return
  } else
    return (
      <div className="mx-auto flex flex-col items-center justify-center py-20">
        {data && data?.map((item, index) => (
          <div key={index}>
            {item.imageLocation}
            <CarouselItems
              imageLocation={item.imageLocation}
              imageSrc={item.imageSrc}
              subText={item.subText}
              text={item.text}
            />
          </div>
        ))}
      </div>
    );
};

export default CarouselContainer;
