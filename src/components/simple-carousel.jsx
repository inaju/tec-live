import { useEffect, useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import CarouselItems from './carousel-items';


function SimpleCarousel({ data }) {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    useEffect(() => {
        if (data.length < activeSlideIndex) {
            setInterval(() => setActiveSlideIndex(activeSlideIndex + 1), 1000)
        }
        else setInterval(() => setActiveSlideIndex(0), 1000)

    }, [data, activeSlideIndex])
    return (
        <div>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                infinite={true}
                itemsToScroll={1}
                itemsToShow={1}
                onRequestChange={setActiveSlideIndex}
                speed={100}
                forwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        paddingInline: "0.5rem",
                        borderRadius: "50%",
                        marginTop: "1.5rem",
                        paddingBlock: "0.2rem",
                    },
                    children: <span className="font-mona">{`>`}</span>,
                }}
                backwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        paddingInline: "0.5rem",
                        paddingBlock: "0.2rem",
                        borderRadius: "50%"

                    },
                    children: <span className="font-mona">{`<`}</span>,
                }}
                responsiveProps={[
                    {
                        // border: '1px solid red',
                        itemsToScroll: 1,
                        itemsToShow: 1,
                        // minWidth: 120,
                    },
                ]}
            >

                {data && data?.map((item, index) => (
                    <div className=" min-w-[1100px] cursor-pointer" key={index} >
                        <CarouselItems
                            imageLocation={item.imageLocation}
                            imageSrc={item.imageSrc}
                            subText={item.subText}
                            text={item.text}
                        />
                    </div>
                ))}
            </ReactSimplyCarousel>
        </div>
    );
}

export default SimpleCarousel;