import React, { useState, useMemo } from "react";
import { Formik, Form, Field } from "formik";
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
import { useQuery } from "@tanstack/react-query";
import getAllNews from "../../core/services/api/Get/News";
import { Link } from "react-router-dom";

const NewsPage = () => {
  const { data, isLoading } = useQuery({
    queryFn: getAllNews,
  });

  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  const [selectedView, setSelectedView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [cardsPerRow, setCardsPerRow] = useState(3);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const itemsPerPage = selectedView === "grid" ? 12 : 5;

  const filteredNews = useMemo(() => {
    if (!data?.news) return [];

    let result = [...data.news];

    if (selectedCategory) {
      result = result.filter(
        (news) => news.newsCatregoryName === selectedCategory
      );
    }

    if (searchQuery.trim()) {
      result = result.filter((news) =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption === "newest") {
      result.sort((a, b) => new Date(b.insertDate) - new Date(a.insertDate));
    } else if (sortOption === "oldest") {
      result.sort((a, b) => new Date(a.insertDate) - new Date(b.insertDate));
    }

    return result;
  }, [data, searchQuery, sortOption, selectedCategory]);

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredNews.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredNews.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(0);
  };

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

  const getCardWidthClass = () => {
    if (selectedView === "list") return "w-full";
    if (cardsPerRow === 2) return "w-full sm:w-[calc(50%-8px)]";
    if (cardsPerRow === 3) return "w-full sm:w-[calc(33.333%-10.66px)]";
    if (cardsPerRow === 4) return "w-full sm:w-[calc(25%-12px)]";
    return "w-full sm:w-[calc(33.333%-10.66px)]";
  };
  if (isLoading) return <div>loading</div>;
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

      <motion.div className="flex flex-col sm:flex-row items-start justify-between max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <motion.div
          variants={fadeInOnly(0.3)}
          initial="hidden"
          animate="visible"
          className="ml-5 w-full sm:w-1/4 lg:w-[19%] relative mb-6 sm:mb-0 sm:mt-17.5"
        >
          <Formik
            initialValues={{ search: "" }}
            onSubmit={(values) => {
              setSearchQuery(values.search);
              setCurrentPage(0);
            }}
          >
            {() => (
              <Form className="relative mb-5 w-full">
                <Field
                  name="search"
                  type="text"
                  placeholder={t("newsPage.searchPlaceholder")}
                  className="shadow-md font-medium text-[#848484] dark:text-[#ccc] bg-[#fff] dark:bg-[#333] rounded-xl px-4 py-3 text-sm outline-none w-full transition-all duration-300 pr-10"
                />

                <button
                  type="submit"
                  className={`absolute top-1/2 -translate-y-1/2 ${
                    isRtl ? "left-3" : "right-3"
                  }`}
                >
                  <SearchIcon
                    sx={{ color: "#848484" }}
                    className="dark:text-[#ccc]"
                  />
                </button>
              </Form>
            )}
          </Formik>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </motion.div>

        <div className="w-full sm:w-3/4 lg:w-[79%] sm:ml-6">
          <motion.div
            variants={fadeInOnly(0.3)}
            initial="hidden"
            animate="visible"
            className="bg-[#fff] dark:bg-[#333] mb-5 mt-5 sm:mt-17 shadow-md rounded-xl px-4 py-3 sm:px-10 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0"
          >
            <div className="flex flex-wrap justify-center sm:justify-start items-center !gap-4">
              <span className="dark:text-[#fff] text-sm">
                {t("newsPage.sortBy")}
              </span>

              <NewsSelectOne
                onChange={(val) => {
                  setSortOption(val);
                  setCurrentPage(0);
                }}
              />

              {selectedView === "grid" && (
                <NewsSelectTwo
                  value={cardsPerRow}
                  onChange={(val) => {
                    const number = parseInt(val);
                    if (!isNaN(number)) setCardsPerRow(number);
                  }}
                />
              )}
            </div>

            <div className="!gap-3 flex justify-center items-center">
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
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border transition-all duration-300 cursor-pointer ${
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
            key={`${currentPage}-${selectedView}-${searchQuery}-${cardsPerRow}-${sortOption}-${selectedCategory}`}
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
                className={getCardWidthClass()}
              >
                <Link to={`/news/${news.id}`}>
                  <NewsCard
                    image={news.currentImageAddressTumb}
                    title={news.title}
                    description={news.miniDescribe}
                    views={news.currentView}
                    rating={3.2}
                    category={news.newsCatregoryName}
                    date={new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(news.insertDate))}
                    viewType={selectedView}
                  />
                </Link>
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

export default NewsPage;
