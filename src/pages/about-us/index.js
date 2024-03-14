import BottomCTA from '@/components/bottom-cta'
import Footer from '@/components/footer'
import HeaderContainer from '@/components/header'
import TextComponent from '@/components/text'
import React from 'react'

const AboutUs = () => {
    return (
        <div className="relative w-screen bg-no-repeat bg-[-10px_-10rem] xl:h-[164.625rem] 2xl:bg-[length:100vw_159.5rem] xl:bg-[length:100vw_164.5rem] bg-about-hero-pattern">
            <div className="mx-auto  xl:max-w-[68%] pt-4 ">
                <HeaderContainer />
                <div>

                    <TextComponent
                        className="mt-[30.6875rem] max-w-[70.5625rem] !text-left"
                        text="We Want All Men Saved, Trained and Sent" mode="heading-1" />
                    <TextComponent
                        className="mt-[2.9375rem] max-w-[81rem] !text-left !text-[1.25rem]"
                        mode="paragraph-1"
                        text="The Equipping Center is an apostolic summon and multi-racial church sent to present the gospel to the unsaved, make ministry gifts out of saints and deploy the trained to do all God has said for them to do. We are a ministry with a heart focused on planting churches and building Christian communities everywhere especially across the Western part of the world. " />
                </div>


            </div>
            <div className="mt-[11.875rem] flex space-x-[3.875rem] mb-[6rem]">
                <div className="flex flex-col gap-[6.25rem] ">

                    <img src="/assets/vision_img_0.png" className='h-[38.3125rem] w-[71.1875rem] ' />
                    <div className='bg-white/[0.1]  py-[3.5rem] px-[4.125rem] w-fit h-fit rounded-md self-end'>
                        <TextComponent
                            className=" !text-left ]"
                            mode="heading-1"
                            text="Our Mission" />
                        <div className="flex flex-col gap-[1rem] ">

                            <TextComponent
                                mode="paragraph-1"
                                className="mt-[1.25rem]  max-w-[35.0625rem] !text-left !text-[1.25rem] !font-normal"
                                text="To be an effective evangelical ministry, bringing men to God's family" />
                            <TextComponent
                                mode="paragraph-1"
                                className="  max-w-[35.0625rem] !text-left !text-[1.25rem] !font-normal"
                                text="To be an effective teaching ministry, establishing men in sound doctrine and celebrating God's wisdom in the word" />
                            <TextComponent
                                mode="paragraph-1"
                                className="  max-w-[35.0625rem] !text-left !text-[1.25rem] !font-normal"
                                text="To be an effective training ministry, transforming weak spiritual form to strength by drills in spirituals disciplines" />
                            <TextComponent
                                mode="paragraph-1"
                                className="  max-w-[35.0625rem] !text-left !text-[1.25rem] !font-normal"
                                text="To be an effective sending ministry, launching men to fulfil God's heart in the nations and theworld at arge." />
                        </div>

                    </div>


                </div>

                <div className="flex flex-col gap-[3.8125rem] items-center mt-[10rem]">

                    <div className='bg-white/[0.1] py-[3.5rem] px-[4.125rem] rounded-md w-fit h-fit'>
                        <TextComponent
                            className=" !text-left ]"
                            mode="heading-1"
                            text="Our Vision" />
                        <TextComponent
                            mode="paragraph-1"
                            className="mt-[1.25rem] max-w-[29.5rem] !text-left !text-[1.25rem] !font-normal"
                            text="We envision men everywhere fulfilling ministry and walking in the fulness of God's plans for their" />
                    </div>
                    <img src="/assets/mission_img_0.png" className='h-[49rem] w-[34.6875rem] ' />

                </div>
            </div>
            <div className=" h-[148vh]">

                <BottomCTA />
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs