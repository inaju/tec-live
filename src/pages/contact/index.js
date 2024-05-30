import { FooterHeader, FooterItem } from '@/components/bottom-cta'
import CustomInput from '@/components/custom-input'
import HeaderContainer from '@/components/header'
import TextComponent from '@/components/text'

const ContactPage = () => {
    return (
        <div className="bg-[#121519]">
            <div className="text-[14px] relative w-screen bg-no-repeat bg-[-7.25rem_-0.4rem]  md:bg-[-10.25rem_-0.4rem] bg-[length:140vw_155.4375rem] h-[135.5rem]   lg:bg-[length:110vw_120.5rem] bg-mobile-contact-hero-pattern md:bg-contact-hero-pattern">
                <div
                    className='mx-auto  lg:max-w-[68%] max-w-[94%]'
                >
                    <div>
                        <HeaderContainer />
                        <div className='mx-auto max-w-[550px] flex flex-col gap-[1.875rem] pt-[382px] lg:pt-[20.3125rem]'>
                            <TextComponent
                                mode="heading-1"
                                className=""
                                text="Get In Touch" />
                            <TextComponent
                                mode="paragraph-1"
                                className="!text-[1.25rem]"
                                text="We're available Monday to Friday 9am – 6pm and on Saturday to Sunday 10am - 4pm, You can also reach us online via instagram and facebook" />
                            <div className='flex lg:flex-row flex-col gap-6 mx-auto'>
                                <div className='flex gap-2 mx-auto '>
                                    <div className='text-[#C4C4C4] text-[1.5rem]'>
                                        Mobile:
                                    </div>
                                    <div className='text-[#C4C4C4] text-[1.5rem] font-bold'>+447404438882</div>
                                </div>
                                <div className='flex gap-2 mx-auto'>
                                    <div className='text-[#C4C4C4] text-[1.5rem]'>
                                        Email:
                                    </div>
                                    <div className='text-[#C4C4C4] text-[1.5rem] font-bold'> theequippingcenterglobal@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" pt-[25%] lg:pt-[30%]">
                    <div className="mx-auto flex flex-col gap-10 lg:gap-10 justify-center items-center w-full lg:max-w-[68%] max-w-[94%]">
                        <h2 className="text-center text-[32px] lg:text-[3.25rem] lg:mb-[1.75rem] text-white font-bold font-mona ">Send A Message</h2>
                        <form className="lg:bg-[#E6EAEE12] lg:p-[3.75rem]  lg:max-w-[81rem] w-full mb-[10rem] space-y-[1.875rem]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-4 ">
                                <CustomInput className={"!min-w-[19.75rem]"} placeholderText={"Enter your name"} />
                                <CustomInput className={"!min-w-[19.75rem]"} placeholderText={"Enter your email"} />
                                {/* <CustomInput className={"!min-w-[19.75rem]"} placeholderText={"Enter your phone number"} /> */}
                            </div>
                            <CustomInput className={"!h-[7.5rem]"} placeholderText={"Enter your message"} />

                            <button className="bg-[#E8E6E2] py-[8px]  text-[16px] lg:text-[1.125rem] text-black w-full lg:w-fit font-medium px-[10.5rem] rounded-md">
                                Send</button>
                        </form>

                    </div>
                    <div className=" bg-[#121519] h-[50vh] pb-30  ">
                        <div className=" mx-auto  lg:max-w-[68%] max-w-[94%] flex flex-col  gap-12 items-start sm:flex-row justify-between  lg:mx-auto">
                            <div className='w-[29.25rem] '>
                                <FooterHeader text="The Equipping Center" />
                                <div className="mt-3 grid space-y-[1.25rem] text-sm">
                                    <FooterItem text="ST PATRICK'S HALL, Conybere St Albans Academy, B12 0YH" link="https://maps.app.goo.gl/u5WgDtwdBj8RgCL17"/>
                                    <FooterItem text="Copyright © The Equpping Center All Rights Reserved" />
                                </div>
                            </div>
                            <div>
                                <FooterHeader text="Quick links" />
                                <div className="mt-3 grid space-y-[1.25rem] text-sm">
                                    <FooterItem text="About Us" link="/about-us" />
                                    <FooterItem text="Give" link="http://paypal.me/niheagwam" />
                                    <FooterItem text="Contact Us" link="/contact" />
                                </div>
                            </div>
                            <div className=' '>
                                <FooterHeader text="Reach Us" />
                                <div className="mt-3 grid space-y-[1.25rem] text-sm break-word">
                                    <FooterItem text="Mobile: +447404438882" />
                                    <FooterItem text="theequippingcenterglobal@gmail.com" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactPage