import React, { useState } from "react";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import NewsCard from "../../components/NewsCard/NewsCard";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import NewsSelectOne from "../../components/NewsSelectOne/NewsSelectOne";
import NewsSelectTwo from "../../components/NewsSelectTwo/NewsSelectTwo";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";

const newsData = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "پایتون + ماینکرفت = یادگیری برنامه‌نویسی با بازی!",
    description:
      "پایتون یکی از محبوب‌ترین زبان‌های برنامه‌نویسی دنیاست؛ ساده، قابل فهم و در عین حال قدرتمند! ماین...",
    views: 22,
    rating: 3.1,
    category: "آموزشی",
    date: "1404/03/13",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "جاوااسکریپت از صفر تا صد",
    description: "جاوااسکریپت یکی از زبان‌های پرکاربرد در توسعه وب است...",
    views: 55,
    rating: 4.5,
    category: "آموزشی",
    date: "1404/05/20",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "آموزش ری‌اکت از مقدماتی تا پیشرفته",
    description:
      "ری‌اکت یکی از محبوب‌ترین کتابخانه‌های فرانت‌اند است و در دنیای وب کاربرد زیادی دارد...",
    views: 120,
    rating: 4.8,
    category: "آموزشی",
    date: "1404/07/11",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "پایتون + ماینکرفت = یادگیری برنامه‌نویسی با بازی!",
    description:
      "پایتون یکی از محبوب‌ترین زبان‌های برنامه‌نویسی دنیاست؛ ساده، قابل فهم و در عین حال قدرتمند! ماین...",
    views: 22,
    rating: 3.1,
    category: "آموزشی",
    date: "1404/03/13",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "جاوااسکریپت از صفر تا صد",
    description: "جاوااسکریپت یکی از زبان‌های پرکاربرد در توسعه وب است...",
    views: 55,
    rating: 4.5,
    category: "آموزشی",
    date: "1404/05/20",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "آموزش ری‌اکت از مقدماتی تا پیشرفته",
    description:
      "ری‌اکت یکی از محبوب‌ترین کتابخانه‌های فرانت‌اند است و در دنیای وب کاربرد زیادی دارد...",
    views: 120,
    rating: 4.8,
    category: "آموزشی",
    date: "1404/07/11",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "پایتون + ماینکرفت = یادگیری برنامه‌نویسی با بازی!",
    description:
      "پایتون یکی از محبوب‌ترین زبان‌های برنامه‌نویسی دنیاست؛ ساده، قابل فهم و در عین حال قدرتمند! ماین...",
    views: 22,
    rating: 3.1,
    category: "آموزشی",
    date: "1404/03/13",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "جاوااسکریپت از صفر تا صد",
    description: "جاوااسکریپت یکی از زبان‌های پرکاربرد در توسعه وب است...",
    views: 55,
    rating: 4.5,
    category: "آموزشی",
    date: "1404/05/20",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "آموزش ری‌اکت از مقدماتی تا پیشرفته",
    description:
      "ری‌اکت یکی از محبوب‌ترین کتابخانه‌های فرانت‌اند است و در دنیای وب کاربرد زیادی دارد...",
    views: 120,
    rating: 4.8,
    category: "آموزشی",
    date: "1404/07/11",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "پایتون + ماینکرفت = یادگیری برنامه‌نویسی با بازی!",
    description:
      "پایتون یکی از محبوب‌ترین زبان‌های برنامه‌نویسی دنیاست؛ ساده، قابل فهم و در عین حال قدرتمند! ماین...",
    views: 22,
    rating: 3.1,
    category: "آموزشی",
    date: "1404/03/13",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "جاوااسکریپت از صفر تا صد",
    description: "جاوااسکریپت یکی از زبان‌های پرکاربرد در توسعه وب است...",
    views: 55,
    rating: 4.5,
    category: "آموزشی",
    date: "1404/05/20",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "آموزش ری‌اکت از مقدماتی تا پیشرفته",
    description:
      "ری‌اکت یکی از محبوب‌ترین کتابخانه‌های فرانت‌اند است و در دنیای وب کاربرد زیادی دارد...",
    views: 120,
    rating: 4.8,
    category: "آموزشی",
    date: "1404/07/11",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "پایتون + ماینکرفت = یادگیری برنامه‌نویسی با بازی!",
    description:
      "پایتون یکی از محبوب‌ترین زبان‌های برنامه‌نویسی دنیاست؛ ساده، قابل فهم و در عین حال قدرتمند! ماین...",
    views: 22,
    rating: 3.1,
    category: "آموزشی",
    date: "1404/03/13",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "جاوااسکریپت از صفر تا صد",
    description: "جاوااسکریپت یکی از زبان‌های پرکاربرد در توسعه وب است...",
    views: 55,
    rating: 4.5,
    category: "آموزشی",
    date: "1404/05/20",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "آموزش ری‌اکت از مقدماتی تا پیشرفته",
    description:
      "ری‌اکت یکی از محبوب‌ترین کتابخانه‌های فرانت‌اند است و در دنیای وب کاربرد زیادی دارد...",
    views: 120,
    rating: 4.8,
    category: "آموزشی",
    date: "1404/07/11",
  },
];

const News = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  const [selectedView, setSelectedView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = selectedView === "grid" ? 12 : 5;

  const offset = currentPage * itemsPerPage;
  const currentItems = newsData.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(newsData.length / itemsPerPage);

  return (
    <div className="bg-[#F3F4F6] dark:bg-[#1e1e1e] min-h-screen">
      <div className="pt-10 flex flex-col justify-center items-center">
        <span className="font-bold mb-5 text-[#008C78] dark:text-[#ccc]">
          {t("newsPage.breadcrumb")}
        </span>
        <p className="font-bold text-3xl text-[#1E1E1E] dark:text-[#fff]">
          {t("newsPage.headerTitle")}
          <span className="text-sm text-[#848484] dark:text-[#ccc] mr-2">
            {t("newsPage.results")}
          </span>
        </p>
      </div>

      <div className="flex items-start justify-between px-25">
        <div className="w-[19%] relative mt-17.5 ">
          <input
            type="text"
            className="shadow-md mb-5 font-medium text-[#848484] dark:text-[#ccc] bg-[#fff] dark:bg-[#333] rounded-xl px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm md:text-base outline-none w-[100px] sm:w-[140px] md:w-[200px] lg:w-[250px] transition-all duration-300"
            placeholder={t("newsPage.searchPlaceholder")}
          />
          <button
            className={`absolute top-2 left-3  ${
              isRtl ? "" : "absolute top-2 left-52"
            }  `}
          >
            <SearchIcon
              sx={{ color: "#848484" }}
              className="dark:text-[#ccc]"
            />
          </button>
          <CategoryFilter />
        </div>

        <div className="w-[79%]">
          <div className="bg-[#fff] dark:bg-[#333] mb-5 mt-17 shadow-md rounded-xl px-10 py-3 flex justify-between items-center">
            <div className="flex !gap-4">
              <span className="mt-2.5 dark:text-[#fff]">
                {t("newsPage.sortBy")}
              </span>
              <NewsSelectOne />
              <NewsSelectTwo />
            </div>

            <div className="flex justify-center items-center">
              <div
                onClick={() => {
                  setSelectedView("list");
                  setCurrentPage(0);
                }}
                className={`mr-5 flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 cursor-pointer
                  ${
                    selectedView === "list"
                      ? "bg-[#008C78] text-white border-[#008C78]"
                      : "text-[#A6A6A6] border border-[#A6A6A6] dark:border-[#555]"
                  }`}
              >
                <FormatListBulletedIcon className="!text-2xl" />
              </div>

              <div
                onClick={() => {
                  setSelectedView("grid");
                  setCurrentPage(0);
                }}
                className={`mr-5 flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 cursor-pointer
                  ${
                    selectedView === "grid"
                      ? "bg-[#008C78] text-white border-[#008C78]"
                      : "text-[#A6A6A6] border border-[#A6A6A6] dark:border-[#555]"
                  }`}
              >
                <GridViewIcon className="!text-2xl" />
              </div>
            </div>
          </div>

          <div
            className={`flex flex-wrap gap-4 ${
              selectedView === "list" ? "flex-col" : ""
            }`}
          >
            {currentItems.map((news, index) => (
              <NewsCard
                titleKey="news.title1"
                descriptionKey="news.desc1"
                viewsKey="news.views1"
                ratingKey="news.rating1"
                categoryKey="news.category1"
                dateKey="news.date1"
                key={index}
                {...news}
                viewType={selectedView}
              />
            ))}
          </div>

          <div className="flex justify-center my-10">
            <ReactPaginate
              breakLabel="..."
              nextLabel=" >"
              previousLabel="< "
              onPageChange={handlePageChange}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              containerClassName="flex gap-2"
              pageClassName="px-5 py-3 rounded-[15px] font-semibold shadow-md cursor-pointer text-xl bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
              activeClassName="!bg-[#008C78] text-white rounded-2xl shadow-md"
              previousClassName="px-3 py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
              nextClassName="px-3 py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
              previousLinkClassName="font-bold text-2xl px-2 py-1 flex items-center justify-center h-full w-full"
              nextLinkClassName="font-bold text-2xl px-2 py-1 flex items-center justify-center h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
