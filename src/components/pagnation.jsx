import React from 'react'

const Pagnation = () => {
    return (
        <div className="w-[27.375rem] bg-[#363B6414] flex   justify-between items-center rounded-lg px-4 mt-20">
            <div>
                Prev
            </div>
            {([1, 2, 3, 4, 5]).map((item) => (

                <div className="hover:bg-white  hover:text-black py-3 px-4 rounded-2xl text-[#A3A3A3] cursor-pointer">
                    {item}
                </div>
            ))
            }
            <div>
                Next
            </div>
        </div >
    )
}

export default Pagnation