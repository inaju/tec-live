import BottomCTA from '@/components/bottom-cta'
import Footer from '@/components/footer'
import HeaderContainer from '@/components/header'
import Pagnation from '@/components/pagnation'
import SermonComponent from '@/components/sermon-component'
import TextComponent from '@/components/text'
import React from 'react'

const Sermons = () => {
    const sermonData = [{
        image: "/assets/message-1.png",
        title: "Let’s Talk Bible ",
        text: "When it comes to the Prophetic, many Christians have maintained varying stances that it is mysterious, and the Scriptures do not say much about it."
    }]
    return (
        <div className="relative w-screen bg-no-repeat bg-[-10px_-10rem]  bg-sermons-hero-pattern">
            <div className="mx-auto  xl:max-w-[68%] pt-4 ">
                <HeaderContainer />
                <div className="mt-[23.8125rem] max-w-[78.5rem] mx-auto  mb-[51rem]">

                    <TextComponent text="Stay up to date with our latest sermons and get blessed" mode="heading-1" />
                    <div className='flex gap-4 w-full bg-[#E6EAEE12] py-[0.875rem] px-[1.875rem] rounded-md mt-[5.625rem]'>
                        <SearchIcon />
                        <input placeholder='Search messages here' className='w-full bg-transparent outline-none placeholder:text-[1rem] text-[1rem] text-white font-inter' />
                    </div>
                    <div className="mt-[3.375rem] ">
                        <div className="flex justify-between flex-wrap gap-y-[6.875rem]">

                            <SermonComponent />
                            <SermonComponent />
                            <SermonComponent />
                            <SermonComponent />
                            <SermonComponent />
                            <SermonComponent />
                            <SermonComponent />
                            <SermonComponent />
                            <SermonComponent />
                        </div>
                        <Pagnation />


                    </div>
                </div>
            </div>
            <div className="h-[148vh]">

                <BottomCTA />
            </div>
            <Footer />
        </div>
    )
}

export default Sermons


const SearchIcon = ({ onClick, className }) => {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9714 22.947C18.0308 22.947 22.9429 18.034 22.9429 11.9735C22.9429 5.91303 18.0308 1 11.9714 1C5.91207 1 1 5.91303 1 11.9735C1 18.034 5.91207 22.947 11.9714 22.947Z" stroke="#A3A3A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M25.0003 25.0003L21.5718 21.5752" stroke="#A3A3A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}