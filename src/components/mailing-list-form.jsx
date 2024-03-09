import React from 'react';
import CustomInput from './custom-input.jsx';

const MailingListForm = () => {
  return (
    <div className=" xl:bg-transparent ">
      <div className="mx-auto  flex flex-col gap-10 justify-center items-center  w-[screen] p-20 shadow-lg shadow-slate-400">
        <h2 className="mb-2 text-xl xl:text-[3.25rem] xl:mb-[3.75rem] text-white font-bold font-mona ">Join Our Mailing List</h2>
        <form className="bg-[#E6EAEE12] p-10 grid grid-cols-1 xl:grid-cols-2 gap-4  xl:max-w-[81rem] ">
          <CustomInput placeholderText={"Enter your name"} />
          <CustomInput placeholderText={"Enter your phone number"} />
          <CustomInput placeholderText={"Enter your email"} />

          <button className="bg-[#E8E6E2] text-xs xl:text-[1.125rem] text-black w-full font-medium p-2 rounded-md">
            Send me updates</button>
        </form>
      </div>
    </div>
  );
};

export default MailingListForm;
