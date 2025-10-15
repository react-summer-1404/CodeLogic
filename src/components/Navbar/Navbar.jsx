import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import SelectComp from "../SelectComp/SelectComp";
import TranslateButton from "../TranslateButton/TranslateButton";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  const [mobileMenu, setMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMobileMenu(!mobileMenu);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav
      className={`${style.mainnav} ${
        darkMode ? style.darknav : ""
      } flex items-center justify-between`}
    >
      <MenuIcon
        onClick={toggleMenu}
        className={`${style.menuicon} cursor-pointer`}
        sx={{ color: darkMode ? "white" : "black", fontSize: 25 }}
      />

      <ul
        className={`${style.ul} flex items-center justify-around gap-6 ${
          mobileMenu ? style.showmenu : style.hidemenu
        } ${isRtl ? "text-right" : "text-left"}`}
      >
        <li className={`${style.li} text-xl font-bold`}>
          {t("navbar.academy")}
        </li>
        <li className={`${style.li} text-lg cursor-pointer font-semibold`}>
          {t("navbar.home")}
        </li>
        <li className={`${style.li} text-lg cursor-pointer font-semibold`}>
          {t("navbar.courses")}
        </li>
        <li className={`${style.li} text-lg cursor-pointer font-semibold`}>
          {t("navbar.news")}
        </li>
      </ul>

      <div className={style.left}>
        <div
          className={style.searchcontainer}
          style={{ direction: isRtl ? "rtl" : "ltr" }}
        >
          <input
            type="text"
            className={style.searchinput}
            placeholder={t("navbar.search_placeholder")}
          />
          <SelectComp
            placeholder={t("navbar.select_placeholder")}
            isRtl={isRtl}
          />
          <button
            className={style.searchbutton}
            style={{
              [isRtl ? "left" : "right"]: "1px",
              [isRtl ? "right" : "left"]: "auto",
            }}
          >
            <SearchIcon sx={{ color: "white", fontSize: 35 }} />
          </button>
        </div>

        <button
          onClick={toggleDarkMode}
          className={`${style.darkModeBtn} ${darkMode ? "active" : ""}`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <TranslateButton />
        <button className={`${style.button} rounded-4xl font-bold`}>
          {t("navbar.login")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
