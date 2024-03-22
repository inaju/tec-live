import React from 'react'

const CustomInput = ({ placeholderText }) => {
    return (
        <div>
            <input
                className="font-inter py-[15px] px-[27px] lg:py-[0.9375rem] lg:px-[1.6875rem] bg-[#E6EAEE12] text-[20px] xl:text-[1.25rem] w-full xl:min-w-[35.1875rem] xl:placeholder:text-[1.25rem] placeholder:text-[#C4C4C4] text-[#C4C4C4] rounded-md"
                placeholder={placeholderText} />
        </div>
    )
}

export default CustomInput