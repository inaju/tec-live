import BottomCTA from '@/components/bottom-cta'
import Footer from '@/components/footer'
import HeaderContainer from '@/components/header'
import TextComponent from '@/components/text'
import React from 'react'

const Sermons = () => {
    return (
        <div className="relative w-screen bg-no-repeat bg-[-10px_-10rem] xl:h-[112.5rem] 2xl:bg-[length:100vw_150.5rem] xl:bg-[length:100vw_150.5rem] bg-sermons-hero-pattern">
            <div className="mx-auto  xl:max-w-[68%] pt-4 ">
                <HeaderContainer />
                <div className="mt-[23.8125rem] max-w-[78.5rem] mx-auto  mb-[51rem]">

                    <TextComponent text="Stay up to date with our latest sermons and get blessed" mode="heading-1" />
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