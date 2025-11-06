import React, { useMemo, useRef } from "react";
import img1 from "../../assets/Images/Ellipsee.png";
import img2 from "../../assets/Images/Groupp.png";
import NewsSideBar from "../../components/NewsDetails/NewsSideBar/NewsSideBar";
import TitleImage from "../../components/NewsDetails/TitleImage/TitleImage";
import NewsComment from "../../components/NewsDetails/NewsComment/NewsComment";
import NewsCard from "../../components/NewsCard/NewsCard";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import getAllNews from "../../core/services/api/Get/News";
import { Link } from "react-router-dom";

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

const NewsDetails = () => {
  const { data } = useQuery({
    queryFn: getAllNews,
  });

  const sortedNews = useMemo(() => {
    if (!data?.news) return [];
    return [...data.news]
      .sort((a, b) => new Date(b.insertDate) - new Date(a.insertDate))
      .slice(0, 6);
  }, [data]);

  const { t } = useTranslation();
  const sliderRef = useRef(null);

  const scrollHandler = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const scrollAmount = container.scrollWidth * 0.07;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === "right") {
      const newPosition = Math.min(
        container.scrollLeft + scrollAmount,
        maxScrollLeft
      );
      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    } else if (direction === "left") {
      const newPosition = Math.max(container.scrollLeft - scrollAmount, 0);
      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="bg-[#F3F4F6] dark:bg-[#1e1e1e] w-full">
        {" "}
        <div className="pt-10 flex flex-col justify-center items-center px-4">
          <motion.span
            className="font-bold mb-5 text-[#008C78] dark:text-[#ccc]"
            variants={itemVariants}
          >
            {t("NewsDetails.breadcrumbs")}
          </motion.span>

          <motion.p
            className="font-bold text-xl sm:text-2xl md:text-3xl text-[#1E1E1E] dark:text-[#fff] text-center"
            variants={itemVariants}
          >
            f
          </motion.p>
        </div>
        <div className="flex flex-col sm:flex-row items-start justify-between max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <motion.div
            className="ml-5 w-full flex flex-wrap gap-10 sm:w-1/4 lg:w-[29%] relative mb-6 sm:mb-0"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col w-full gap-2 items-center justify-center bg-[white] shadow-md rounded-3xl py-5 dark:bg-[#333]"
              variants={itemVariants}
            >
              <img src={img1} />
              <span className="font-[16px] text-[#848484] ">
                {" "}
                {t("NewsDetails.authorLabel")}
              </span>
              <span className="font-[18px] font-bold text-[#1E1E1E] dark:text-[white] ">
                {" "}
                {t("NewsDetails.authorName")}
              </span>
            </motion.div>

            <motion.div
              className="w-full flex flex-wrap rounded-3xl shadow-md bg-[white] py-5 dark:bg-[#333]"
              variants={itemVariants}
            >
              <span className="font-bold w-full text-[#1E1E1E] font-[18px] px-4 dark:text-[white] ">
                {t("NewsDetails.userSatisfaction")}
              </span>
              <div className="flex items-center w-full mt-7 justify-start lg:justify-between px-4">
                <img src={img2} />
                <span className="font-[16px] text-[#848484] hidden lg:block">
                  {t("NewsDetails.ratingValue")}
                </span>
              </div>
            </motion.div>

            <motion.div
              className="w-full flex flex-wrap rounded-3xl shadow-md bg-[white] py-5 dark:bg-[#333]"
              variants={itemVariants}
            >
              <span className="text-[#1E1E1E] font-[18px] font-bold px-4 dark:text-[white] ">
                {t("NewsDetails.latestNews")}
              </span>

              {sortedNews.map((news) => (
                <Link to={`/news/${news.id}`}>
                  <NewsSideBar
                    key={news.id}
                    image={news.currentImageAddressTumb}
                    title={news.title}
                    name={news.addUserFullName}
                    date={new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(news.insertDate))}
                  />
                </Link>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full flex flex-wrap sm:w-3/4 lg:w-[69%] sm:ml-6"
            variants={itemVariants}
          >
            <TitleImage />
            <NewsComment />
          </motion.div>
        </div>
      </div>

      <div className="w-full flex flex-wrap bg-[#F3F4F6] dark:bg-[#1e1e1e] ">
        <div className="w-full flex items-center justify-between py-2 px-15">
          <p className="font-bold text-[#008C78] text-[24px]">
            {" "}
            {t("NewsDetails.relatedNews")}
          </p>
          <div className="flex justify-between gap-5">
            <div
              onClick={() => scrollHandler("right")}
              className="cursor-pointer text-[#008C78] rounded-full p-1 hover:bg-[#008C78] hover:text-white transition-all duration-300"
            >
              <EastIcon className="!text-[34px] font-bold" />
            </div>
            <div
              onClick={() => scrollHandler("left")}
              className="cursor-pointer text-[#008C78] rounded-full p-1 hover:bg-[#008C78] hover:text-white transition-all duration-300"
            >
              <WestIcon className="!text-[34px] font-bold" />
            </div>
          </div>
        </div>

        <motion.div
          ref={sliderRef}
          className="w-full flex flex-row-reverse gap-4 md:gap-6 lg:gap-8 overflow-x-auto overflow-y-hidden scroll-smooth px-4 sm:px-6 md:px-8 lg:px-10 mb-20 scrollbar-none"
          variants={containerVariants}
        >
          {newsData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex-shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <NewsCard
                titleKey="news.title1"
                descriptionKey="news.desc1"
                viewsKey="news.views1"
                ratingKey="news.rating1"
                categoryKey="news.category1"
                dateKey="news.date1"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewsDetails;
