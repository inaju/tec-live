import React from 'react'


const Footer = () => {
    return (
        <div className="bg-[#121519] pb-48 lg:mt-0 mt-[300px] mx-auto  ">
            <div className="bg-[#65656599] h-0.5  items-center flex mx-auto"></div>
            <div className="flex flex-col  gap-10 items-start mx-12 sm:flex-row justify-between max-w-[81rem] lg:mx-auto  mt-10 mb-20">

                <div className='w-[29.25rem] '>
                    <FooterHeader text="The Equipping Center" />
                    <div className="mt-3 grid space-y-[1.25rem] text-sm">
                        <FooterItem text="11832 S. Warner Elliot LoopPhoenix, AZ 85044" />
                        <FooterItem text="Copyright © The Equpping Center All Rights Reserved" />
                    </div>
                </div>
                <div>
                    <FooterHeader text="Quick links" />
                    <div className="mt-3 grid space-y-[1.25rem] text-sm">
                        <FooterItem text="About Us" />
                        <FooterItem text="Sermons" />
                        <FooterItem text="Give" />
                        <FooterItem text="Contact Us" />
                    </div>
                </div>
                <div className=' '>
                    <FooterHeader text="Reach Us" />
                    <div className="mt-3 grid space-y-[1.25rem] text-sm break-word">
                        <FooterItem text="Mobile: +1 (000) 111 2222" />
                        <FooterItem text="Email: theequippingcentreglobal@gmail.com" />
                        <FooterItem text="Give" />
                        <FooterItem text="Contact Us" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

const FooterItem = ({ text }) => {
    return (
        <p><a className="font-inter leading-[32px] font-normal inline-flex text-[24px]  gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">{text}</a></p>
    )
}
const FooterHeader = ({ text }) => {
    return (
        <h4 className="font-mona text-[32px] mb-[1.25rem] text-gray-900 uppercase dark:text-gray-100">{text}</h4>
    )
}