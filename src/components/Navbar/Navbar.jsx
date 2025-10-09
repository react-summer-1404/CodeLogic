import React from "react";
import style from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <nav className={` ${style.main} flex items-center justify-between `}>
      <div className={` ${style.left}  `}>
        <button className={` ${style.button} rounded-4xl font-bold `}>
          ورود / ثبت نام
        </button>

        <div className={` ${style.searchcontainer}  `}>
          <input
            type="text"
            className={` ${style.searchinput}  `}
            placeholder="    جستجو کنید..."
          />
          <button className={` ${style.searchbutton}  `}>
            <SearchIcon sx={{ color: "white", fontSize: 35 }} />
          </button>
        </div>
      </div>
      <ul className={` ${style.ul} flex items-center justify-around `}>
        <li className={`  ${style.li} text-lg cursor-pointer font-semibold`}>
          {" "}
          اخبار
        </li>
        <li className={`  ${style.li} text-lg cursor-pointer font-semibold`}>
          دوره ها
        </li>
        <li className={`  ${style.li} text-lg cursor-pointer font-semibold`}>
          صفحه اصلی
        </li>
        <li className="text-xl font-bold">آکادمی بحر</li>
      </ul>
    </nav>
  );
};

export default Navbar;
