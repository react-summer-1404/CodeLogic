import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NewsSideBar = ({ image, title, name, date, id }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className=" shadow-[0px_0px_1px_1px_#EAEAEA] w-[90%] h-[12%] rounded-2xl flex flex-row items-center justify-between mx-auto mt-5 py-2 px-2 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_0px_10px_1px_#008c78] dark:bg-[#333] ">
      {" "}
      <img
        className=" object-cover w-[20%] h-full hidden md:block md:w-[20%] lg:w-[20%] rounded-lg "
        src={image}
      />{" "}
      <div className="w-full flex flex-wrap sm:w-full md:w-[77%] lg:w-[77%]">
        <Link
          to={`/news/${id}`}
          className=" font-semibold text-[black] dark:text-[white]"
        >
          {title}
        </Link>
        <div className="flex justify-between items-center w-full mt-3  ">
          <Link to={`/news/${id}`} className="text-[#848484] font-[10px]">
            {name}
          </Link>
          <p className="text-[#848484] font-[10px]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsSideBar;
