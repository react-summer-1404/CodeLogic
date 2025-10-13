import React, { useState } from "react";
import style from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import SelectComp from "../SelectComp/SelectComp";

const Navbar = () => {
  const [mobilemenu, setmobilemenu] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const togglemenu = () => {
    setmobilemenu(!mobilemenu);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  
  return (
    <nav
      className={`${style.mainnav} ${
        darkMode ? style.darknav : ""
      } flex items-center justify-between`}
    >
      <ul
        className={` ${style.ul} flex items-center justify-around   ${
          mobilemenu ? style.showmenu : style.hidemenu
        }  `}
      >
        <li className={` ${style.li}    text-xl font-bold`}>آکادمی بحر</li>

        <li className={`  ${style.li} text-lg cursor-pointer font-semibold`}>
          صفحه اصلی
        </li>
        <li className={`  ${style.li} text-lg cursor-pointer font-semibold`}>
          دوره ها
        </li>
        <li className={`  ${style.li} text-lg cursor-pointer font-semibold`}>
          {" "}
          اخبار
        </li>
      </ul>
      <div className={` ${style.left}  `}>
        <div className={` ${style.searchcontainer}  `}>
          <input
            type="text"
            className={` ${style.searchinput}  `}
            placeholder="    جستجو کنید..."
          />
          <SelectComp />
          <button className={` ${style.searchbutton}  `}>
            <SearchIcon sx={{ color: "white", fontSize: 35 }} />
          </button>
        </div>
        <button onClick={toggleDarkMode} className={`${style.darkModeBtn} `}>
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button className={` ${style.button} rounded-4xl font-bold `}>
          ورود / ثبت نام
        </button>
      </div>
      <MenuIcon
        onClick={togglemenu}
        className={` ${style.menuicon} cursor-pointer `}
        sx={{ color: "black", fontSize: 25 }}
      />
    </nav>
  );
};

export default Navbar;
