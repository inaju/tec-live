import React from 'react';

const MailingListForm = () => {
  return (
    <div className=" bg-[#121519] ">
      <div className="mx-auto flex flex-col gap-10 justify-center items-center  w-[screen] p-20 shadow-lg shadow-slate-400">
        <h2 className="mb-2 text-4xl text-white font-bold font-mona ">Join Our Mailing List</h2>
        <form className="bg-[#E6EAEE12] p-10 grid grid-cols-2 gap-4 min-w-[1000px] ">
          <input className="p-2 px-4 bg-[rgba(230,234,238,0.07)] placeholder:text-[#C4C4C4] text-[#C4C4C4]" placeholder="enter your name" />
          <input
            className="p-2 px-4 bg-[#E6EAEE12] placeholder:text-[#C4C4C4] text-[#C4C4C4]"
            placeholder="enter your Phone Number" />
          <input
            className="p-2 px-4 bg-[#E6EAEE12] placeholder:text-[#C4C4C4] text-[#C4C4C4]"
            placeholder="enter your email" />
          <button className="bg-[#E8E6E2] text-black w-full font-medium">
            Send me Updates</button>
        </form>
      </div>
    </div>
  );
};

export default MailingListForm;
