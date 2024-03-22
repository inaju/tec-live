import { useEffect, useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import CarouselItems from './carousel-items';


function SimpleCarousel({ data }) {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    // useEffect(() => {
    //     if (data.length < activeSlideIndex) {
    //         setInterval(() => setActiveSlideIndex(activeSlideIndex + 1), 1000)
    //     }
    //     else setInterval(() => setActiveSlideIndex(0), 1000)

    // }, [data, activeSlideIndex])
    return (
        <div>
            <div className="xl:max-w-[1110px] cursor-pointer  mx-auto"  >
                <CarouselItems
                    imageLocation={data[0].imageLocation}
                    mobileImageSrc={data[0].mobileImageSrc}
                    imageSrc={data[0].imageSrc}
                    subText={data[0].subText}
                    text={data[0].text}
                />
            </div>
            {/* <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                infinite={true}
                itemsToScroll={1}
                itemsToShow={1}
                onRequestChange={setActiveSlideIndex}
                speed={100}
                forwardBtnProps={{
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        paddingInline: "0.5rem",
                        borderRadius: "50%",
                        marginTop: "1.5rem",
                        bottom: "10rem",

                        paddingBlock: "0.2rem",
                    },
                    children: <span className="font-mona">{`>`}</span>,
                }}
                backwardBtnProps={{
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        paddingInline: "0.5rem",
                        paddingBlock: "0.2rem",

                    },
                    children: <span className="font-mona">{`<`}</span>,
                }}
                responsiveProps={[
                    {
                        itemsToScroll: 1,
                        itemsToShow: 1,
                        minWidth: 120,
                    },
                ]}
            >
                {data && data?.map((item, index) => (
                    <div className=" xl:min-w-[1100px] cursor-pointer  mr-[16.9375rem]" key={index} >
                        <CarouselItems
                            imageLocation={item.imageLocation}
                            imageSrc={item.imageSrc}
                            subText={item.subText}
                            text={item.text}
                        />
                    </div>
                ))}
            </ReactSimplyCarousel> */}
        </div>
    );
}

export default SimpleCarousel;