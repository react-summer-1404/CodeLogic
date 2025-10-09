import React, { useState } from "react";
import style from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import SelectComp from "../SelectComp/SelectComp";

const Navbar = () => {
  const [mobilemenu, setmobilemenu] = useState(false);

  const togglemenu = () => {
    setmobilemenu(!mobilemenu);
  };

  return (
    <nav className={` ${style.mainnav} flex items-center justify-between `}>
      <div className={` ${style.left}  `}>
        <button className={` ${style.button} rounded-4xl font-bold `}>
          ورود / ثبت نام
        </button>

        <div className={` ${style.searchcontainer}  `}>
          {/* <select className={` ${style.searchselect}  `}>
            <option value="news">اخبار </option>
            <option value="articles"> مقالات</option>
            <option value="courses">دوره ها</option>
          </select> */}
          <SelectComp />
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
      <ul
        className={` ${style.ul} flex items-center justify-around   ${
          mobilemenu ? style.showmenu : style.hidemenu
        }  `}
      >
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
      <MenuIcon
        onClick={togglemenu}
        className={` ${style.menuicon} cursor-pointer `}
        sx={{ color: "black", fontSize: 25 }}
      />
    </nav>
  );
};

export default Navbar;
