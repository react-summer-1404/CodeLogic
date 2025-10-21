import React from "react";

const NewsSideBar = ({ image, title, name, date }) => {
  return (
    <div className=" shadow-[0px_0px_1px_1px_#EAEAEA] w-[90%] rounded-2xl flex flex-row items-center justify-between mx-auto mt-5 py-3 px-2 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_0px_10px_1px_#008c78] dark:bg-[#333] ">
      <img
        className="object-fill w-[20%] hidden md:block md:w-[20%] lg:w-[20%]"
        src={image}
      />

      <div className="w-full flex flex-wrap sm:w-full md:w-[77%] lg:w-[77%]">
        <p className="font-bold font-[12px] text-[#1E1E1E] dark:text-[white] ">
          {title}
        </p>

        <div className="flex justify-between items-center w-full mt-3  ">
          <p className="text-[#848484] font-[10px]">{name}</p>
          <p className="text-[#848484] font-[10px]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsSideBar;
