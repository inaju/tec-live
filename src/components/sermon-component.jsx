import React from 'react'

const SermonComponent = () => {
    return (
        <div className="max-h-[43rem] max-w-[26rem]  flex flex-col gap-[1rem] px-3 py-2 hover:cursor-pointer hover:outline hover:outline-white hover:outline-1 rounded-md">
            <img src="/assets/message-1.png" className='h-[25rem] w-[26rem]  ' />
            <div className=' font-mona font-bold text-[1.7606rem] text-left text-white'>Let’s Talk Bible </div>
            <div className=' font-inter font-normal text-[1.25rem] text-left text-[#E8E6E2]'>When it comes to the Prophetic, many Christians have maintained varying stances that it is mysterious, and the Scriptures do not say much about it. </div>
            <div className=" max-w-[26rem]  flex justify-between">
                <div className="flex gap-[1.25rem]">

                    <img src="/apple-pod.svg" className='  ' />
                    <img src="/yt.svg" className='  ' />
                    <img src="/spotify.svg" className='  ' />
                    <img src="/telegram.svg" className='  ' />
                </div>
                <img src="/link-svg.svg" className='  ' />
            </div>

        </div>
    )
}

export default SermonComponent







