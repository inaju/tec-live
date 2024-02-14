import React from 'react';

const MailingListForm = () => {
  return (
    <div className=" bg-[#121519] ">
      <div className="mx-auto  flex flex-col gap-10 justify-center items-center  w-[screen] p-20 shadow-lg shadow-slate-400">
        <h2 className="mb-2 text-xl xl:text-4xl text-white font-bold font-mona ">Join Our Mailing List</h2>
        <form className="bg-[#E6EAEE12] p-10 grid grid-cols-1 xl:grid-cols-2 gap-4 min-w-[96vw] lg:min-w-[1000px] ">
          <input className="p-2 px-4 text-xs xl:text-md bg-[rgba(230,234,238,0.07)] placeholder:text-[#C4C4C4]  text-[#C4C4C4] rounded-md" placeholder="Enter your name" />
          <input
            className="p-2 px-4 bg-[#E6EAEE12] text-xs xl:text-md placeholder:text-[#C4C4C4] text-[#C4C4C4] rounded-md"
            placeholder="Enter your phone number" />
          <input
            className="p-2 px-4 bg-[#E6EAEE12] text-xs xl:text-md placeholder:text-[#C4C4C4] text-[#C4C4C4] rounded-md"
            placeholder="Enter your email" />
          <button className="bg-[#E8E6E2] text-xs xl:text-md text-black w-full font-medium p-2 rounded-md">
            Send me Updates</button>
        </form>
      </div>
    </div>
  );
};

export default MailingListForm;
