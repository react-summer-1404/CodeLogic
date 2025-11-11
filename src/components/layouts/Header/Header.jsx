import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import SelectComp from "../../SelectComp/SelectComp";
import TranslateButton from "../../TranslateButton/TranslateButton";
import { useTheme } from "../../../utils/hooks/useTheme/useTheme";
import { getItem } from "../../../utils/helper/storage.services";
import getAllNews from "../../../core/services/api/Get/News";

const Header = () => {
  const [searchType, setSearchType] = useState("news");
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const [newsResults, setNewsResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearch = () => {
    if (searchType === "news") {
      navigate(`/news?search=${encodeURIComponent(searchValue)}`);
    } else if (searchType === "courses") {
      navigate(`/courseList?search=${encodeURIComponent(searchValue)}`);
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      if (searchType !== "news" || searchValue.trim().length < 2) {
        setNewsResults([]);
        setIsDropdownVisible(false);
        return;
      }

      try {
        const res = await getAllNews();
        const filtered = res.news.filter((n) =>
          n.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setNewsResults(filtered.slice(0, 5));
        setIsDropdownVisible(true);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };

    clearTimeout(typingTimeout);
    const timeout = setTimeout(fetchNews, 500);
    setTypingTimeout(timeout);

    return () => clearTimeout(timeout);
  }, [searchValue, searchType]);

  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  const [mobileMenu, setMobileMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const isLogin = getItem("token");

  return (
    <nav
      className={`flex items-center justify-around p-2 sm:p-3 md:px-6 lg:px-7 transition-all duration-300 relative
        ${isDark ? "bg-[#1e1e1e]" : "bg-[#eefffc]"}`}
    >
      <div
        className="block md:hidden cursor-pointer"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <MenuIcon sx={{ color: isDark ? "white" : "black", fontSize: 28 }} />
      </div>

      <ul className="hidden sm:hidden md:flex flex-row items-center gap-6">
        <li
          className={` cursor-pointer text-sm md:text-base lg:text-lg font-bold transition-colors duration-200 hover:text-[#008c78] ${
            isDark ? "text-white hover:text-[#00bfa5]" : ""
          }`}
        >
          {t("navbar.academy")}
        </li>
        <Link
          to={"/"}
          className={` cursor-pointer text-sm md:text-base lg:text-lg font-semibold transition-colors duration-200 hover:text-[#008c78] ${
            isDark ? "text-white hover:text-[#00bfa5]" : ""
          }`}
        >
          {t("navbar.home")}
        </Link>
        <Link
          to={"/courseList"}
          className={` cursor-pointer  text-sm md:text-base lg:text-lg font-semibold transition-colors duration-200 hover:text-[#008c78] ${
            isDark ? "text-white hover:text-[#00bfa5]" : ""
          }`}
        >
          {t("navbar.courses")}
        </Link>
        <Link
          to={"/news"}
          className={` cursor-pointer text-sm md:text-base lg:text-lg font-semibold transition-colors duration-200 hover:text-[#008c78] ${
            isDark ? "text-white hover:text-[#00bfa5]" : ""
          }`}
        >
          {t("navbar.news")}
        </Link>
      </ul>

      <div className="flex items-center gap-2 relative">
        <div
          className={`hidden md:flex relative items-center bg-white dark:bg-[#2a2a2a] rounded-[28px] transition-shadow duration-300 ${
            isRtl ? "flex-row-reverse" : "flex-row-reverse"
          }`}
        >
          <SelectComp
            placeholder={t("navbar.select_placeholder")}
            isRtl={isRtl}
            onChange={(val) => setSearchType(val)}
          />

          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => {
              if (newsResults.length > 0) setIsDropdownVisible(true);
            }}
            onBlur={() => setTimeout(() => setIsDropdownVisible(false), 200)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="font-medium text-[#7e7e7e] dark:text-white bg-transparent rounded-[28px] px-2 py-1 outline-none w-[150px]"
            placeholder={t("navbar.search_placeholder")}
          />

          <button
            onClick={handleSearch}
            className="absolute top-1/2 transform -translate-y-1/2 left-1 dark:bg-[#008c78] bg-[#008c78] p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#007563]"
            style={{
              [isRtl ? "left" : "right"]: "1px",
              [isRtl ? "right" : "left"]: "auto",
            }}
          >
            <SearchIcon sx={{ color: "white", fontSize: 24 }} />
          </button>
        </div>

        {isDropdownVisible &&
          searchType === "news" &&
          newsResults.length > 0 && (
            <ul className="absolute top-[50px] right-0 w-[60%] bg-white dark:bg-[#2a2a2a] rounded-lg shadow-lg z-50 border border-[#008c78]/30 max-h-60 overflow-y-auto">
              {newsResults.map((news) => (
                <li
                  key={news.id}
                  onClick={() => {
                    navigate(`/news/${news.id}`);
                    setIsDropdownVisible(false);
                    setSearchValue("");
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-[#008c7822] dark:hover:bg-[#008c7844] text-sm text-[#333] dark:text-white"
                >
                  {news.title}
                </li>
              ))}
            </ul>
          )}

        {isDropdownVisible &&
          searchType === "news" &&
          newsResults.length === 0 &&
          searchValue.length > 1 && (
            <div className="absolute top-[50px] right-0 w-[60%] bg-white dark:bg-[#2a2a2a] rounded-lg shadow-lg z-50 border border-[#008c78]/30 text-center text-sm p-2 text-[#777]">
              {t("navbar.notfound")}
            </div>
          )}

        <button
          onClick={toggleTheme}
          className={` cursor-pointer w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300
            ${
              isDark ? "bg-[#333] text-[#ffe600]" : "bg-[#008c78] text-white"
            } hover:scale-105 hover:bg-[#007563]`}
          aria-pressed={isDark}
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <TranslateButton />

        <Link to={isLogin ? "/UserPanel" : "/Login"}>
          <button className=" cursor-pointer  bg-[#008c78] text-white font-bold rounded-full px-2 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base transition-colors duration-300 hover:bg-[#007563]">
            {isLogin ? t("navbar.userpanel") : t("navbar.login")}{" "}
          </button>
        </Link>
      </div>

      {mobileMenu && (
        <ul className="fixed top-0 right-0 h-full w-1/3 sm:w-1/2 bg-white dark:bg-[#1e1e1e] shadow-lg p-4 flex flex-col gap-4 z-50">
          <div
            className={`relative flex items-center bg-white dark:bg-[#2a2a2a] rounded-[28px] transition-shadow duration-300 mt-2 ${
              isRtl ? "flex-row-reverse" : "flex-row-reverse"
            }`}
          >
            <input
              type="text"
              className={`font-medium text-[#7e7e7e] dark:text-white bg-transparent rounded-[28px] px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm md:text-base outline-none flex-grow transition-all duration-300`}
              placeholder={t("navbar.search_placeholder")}
            />

            <button
              className="absolute top-1/2 transform -translate-y-1/2 dark:bg-[#008c78] bg-[#008c78] p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#007563]"
              style={{
                [isRtl ? "left" : "right"]: "1px",
                [isRtl ? "right" : "left"]: "auto",
              }}
            >
              <SearchIcon sx={{ color: "white", fontSize: 24 }} />
            </button>
          </div>

          <li
            className={`text-sm font-bold transition-colors duration-200 hover:text-[#008c78] ${
              isDark ? "text-white hover:text-[#00bfa5]" : ""
            }`}
          >
            {t("navbar.academy")}
          </li>
          <Link
            to={"/"}
            className={`text-sm font-semibold transition-colors duration-200 hover:text-[#008c78] ${
              isDark ? "text-white hover:text-[#00bfa5]" : ""
            }`}
          >
            {t("navbar.home")}
          </Link>
          <Link
            to={"/courselist"}
            className={`text-sm font-semibold transition-colors duration-200 hover:text-[#008c78] ${
              isDark ? "text-white hover:text-[#00bfa5]" : ""
            }`}
          >
            {t("navbar.courses")}
          </Link>
          <Link
            to={"/newslist"}
            className={`text-sm font-semibold transition-colors duration-200 hover:text-[#008c78] ${
              isDark ? "text-white hover:text-[#00bfa5]" : ""
            }`}
          >
            {t("navbar.news")}
          </Link>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-2xl bg-[black] text-white mt-4 p-1 cursor-pointer"
          >
            بازگشت
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Header;
