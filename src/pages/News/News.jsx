import React, { useEffect, useState } from "react";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import NewsCard from "../../components/NewsCard/NewsCard";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import NewsSelectOne from "../../components/NewsSelectOne/NewsSelectOne";
import NewsSelectTwo from "../../components/NewsSelectTwo/NewsSelectTwo";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageCount = Math.ceil(newsData.length / itemsPerPage);

  const fadeInOnly = (delay) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  });

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#F3F4F6] dark:bg-[#1e1e1e] min-h-screen">
      <motion.div
        variants={fadeInOnly(0.3)}
        initial="hidden"
        animate="visible"
        className="pt-10 flex flex-col justify-center items-center px-4"
      >
        <span className="font-bold mb-5 text-[#008C78] dark:text-[#ccc]">
          {t("newsPage.breadcrumb")}
        </span>

        <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#1E1E1E] dark:text-[#fff] text-center">
          {t("newsPage.headerTitle")}
          <span className="text-sm !ml-2 text-[#848484] dark:text-[#ccc] mr-2">
            {t("newsPage.results")}
          </span>
        </p>
      </motion.div>

      <motion.div className="flex  flex-col sm:flex-row items-start justify-between max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <motion.div
          variants={fadeInOnly(0.3)}
          initial="hidden"
          animate="visible"
          className=" ml-5 w-full  sm:w-1/4 lg:w-[19%] relative mb-6 sm:mb-0 sm:mt-17.5"
        >
          <div className="relative mb-5 w-full">
            <input
              type="text"
              className="shadow-md font-medium text-[#848484] dark:text-[#ccc] bg-[#fff] dark:bg-[#333] rounded-xl px-4 py-3 text-sm outline-none w-full transition-all duration-300 pr-10"
              placeholder={t("newsPage.searchPlaceholder")}
            />

            <button
              className={`absolute top-1/2 -translate-y-1/2 ${
                isRtl ? "left-3" : "right-3"
              }`}
            >
              <SearchIcon
                sx={{ color: "#848484" }}
                className="dark:text-[#ccc]"
              />
            </button>
          </div>

          <CategoryFilter />
        </motion.div>

        <div className="w-full sm:w-3/4 lg:w-[79%] sm:ml-6">
          <motion.div
            variants={fadeInOnly(0.3)}
            initial="hidden"
            animate="visible"
            className="bg-[#fff] dark:bg-[#333] mb-5 mt-5 sm:mt-17 shadow-md rounded-xl px-4 py-3 sm:px-10 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0"
          >
            <div className="flex flex-wrap justify-center sm:justify-start items-center !gap-4">
              <span className=" dark:text-[#fff] text-sm">
                {t("newsPage.sortBy")}
              </span>
              <NewsSelectOne />
              <NewsSelectTwo />
            </div>

            <div className=" !gap-3 flex justify-center items-center">
              <div
                onClick={() => {
                  setSelectedView("list");
                  setCurrentPage(0);
                }}
                className={`mr-3 sm:mr-5 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border transition-all duration-300 cursor-pointer ${
                  selectedView === "list"
                    ? "bg-[#008C78] text-white border-[#008C78]"
                    : "text-[#A6A6A6] border border-[#A6A6A6] dark:border-[#555]"
                }`}
              >
                <FormatListBulletedIcon className="!text-xl sm:!text-2xl" />
              </div>

              <div
                onClick={() => {
                  setSelectedView("grid");
                  setCurrentPage(0);
                }}
                className={`  flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border transition-all duration-300 cursor-pointer ${
                  selectedView === "grid"
                    ? "bg-[#008C78] text-white border-[#008C78]"
                    : "text-[#A6A6A6] border border-[#A6A6A6] dark:border-[#555]"
                }`}
              >
                <GridViewIcon className="!text-xl sm:!text-2xl" />
              </div>
            </div>
          </motion.div>

          <motion.div
            key={` ${currentPage} - ${selectedView}   `}
            variants={cardContainerVariants}
            initial="hidden"
            animate="visible"
            className={`flex flex-wrap gap-4 justify-center sm:justify-start ${
              selectedView === "list" ? "flex-col" : "flex-row"
            }`}
          >
            {currentItems.map((news, index) => (
              <motion.div
                key={index}
                variants={cardItemVariants}
                className={
                  selectedView === "list"
                    ? "w-full"
                    : "w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-10.66px)]"
                }
              >
                <NewsCard
                  titleKey="news.title1"
                  descriptionKey="news.desc1"
                  viewsKey="news.views1"
                  ratingKey="news.rating1"
                  categoryKey="news.category1"
                  dateKey="news.date1"
                  {...news}
                  viewType={selectedView}
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center my-10">
            <ReactPaginate
              breakLabel="..."
              nextLabel=" >"
              previousLabel="< "
              onPageChange={handlePageChange}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              forcePage={currentPage}
              containerClassName="flex flex-wrap justify-center gap-1 sm:gap-2"
              pageClassName="px-3 py-2 sm:px-5 sm:py-3 rounded-[15px] font-semibold shadow-md cursor-pointer text-sm sm:text-xl bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
              activeClassName="!bg-[#008C78] text-white rounded-2xl shadow-md"
              previousClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
              nextClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
              previousLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
              nextLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default News;
