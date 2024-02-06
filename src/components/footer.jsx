import React from 'react'


const Footer = () => {
    return (
        <div className="bg-[#121519] pb-20">
            <div className="bg-[#65656599] h-0.5 max-w-[1000px] items-center flex mx-auto"></div>
            <div className="flex justify-between max-w-[1000px] mx-auto mt-10 mb-20">

                <div>
                    <FooterHeader text="The Equipping Center" />
                    <div className="mt-3 grid space-y-3 text-sm">
                        <FooterItem text="11832 S. Warner Elliot LoopPhoenix, AZ 85044" />
                        <FooterItem text="Copyright © The Equpping Center All Rights Reserved" />
                    </div>
                </div>
                <div>
                    <FooterHeader text="Quick links" />
                    <div className="mt-3 grid space-y-3 text-sm">
                        <FooterItem text="About Us" />
                        <FooterItem text="Sermons" />
                        <FooterItem text="Give" />
                        <FooterItem text="Contact Us" />
                    </div>
                </div>
                <div>
                    <FooterHeader text="Reach Us" />
                    <div className="mt-3 grid space-y-3 text-sm">
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
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">{text}</a></p>

    )
}
const FooterHeader = ({ text }) => {
    return (
        <h4 className="font-mona text-lg font-semibold text-gray-900 uppercase dark:text-gray-100">{text}</h4>

    )
}