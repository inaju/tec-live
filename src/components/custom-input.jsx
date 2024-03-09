import React from 'react'

const CustomInput = ({ placeholderText }) => {
    return (
        <div>
            <input
                className="font-inter py-[0.9375rem] px-[1.6875rem] bg-[#E6EAEE12] text-xs xl:text-[1.25rem] xl:min-w-[35.1875rem] xl:placeholder:text-[1.25rem] placeholder:text-[#C4C4C4] text-[#C4C4C4] rounded-md"
                placeholder={placeholderText} />
        </div>
    )
}

export default CustomInput