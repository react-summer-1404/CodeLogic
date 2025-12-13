import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UserPanelSearch from "../../../components/common/UserPanelSearch/UserPanelSearch";
import UserPanelTitle from "../../../components/common/UserPanelTitle/UserPanelTitle";
import MyCourseComment from "../../../components/userPanel/MyCourseComment/MyCourseComment";
import myCourseComments from "../../../core/services/api/get/MyCourseComments";
import ReactPaginate from "react-paginate";
import { t } from "i18next";
import Lottie from "lottie-react";
import empty from "../../../assets/Images/empty.json";
import FavoritesSkeleton from "../../../components/common/skeleton/favorites/FavoritesSkeleton";
import { useDebounce } from "use-debounce";
import { motion } from "framer-motion";
import searchIcon from "../../../assets/Icons/A/search.png";
import { useTranslation } from "react-i18next";
const MyCourseComments = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "fa";
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage, setCommentsPerPage] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");
  const [query] = useDebounce(searchQuery, 700);
  const [filterOption, setFilterOption] = useState("all");

  const { data: myCourseCommentsData, isLoading: isPending } = useQuery({
    queryKey: ["MYCOURSECOMMENTS"],
    queryFn: () => myCourseComments(),
  });

  const allComments = myCourseCommentsData?.myCommentsDtos || [];
  const filteredComments = allComments.filter((comment) => {
    const courseName = comment?.courseTitle ?? "";
    const commentName = comment?.title ?? "";
    const matchesTitle = courseName
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const matchesCm = commentName
      .toLowerCase()
      .includes(query.trim().toLowerCase());

    if (filterOption === "all") {
      return matchesTitle || matchesCm;
    }

    const bool = filterOption === "true";
    return comment.accept === bool && matchesTitle;
  });

  const startIndex = (currentPage - 1) * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;
  const currentComments = filteredComments.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredComments.length / commentsPerPage);

  const handlePageChange = (p) => {
    const selectedPage = p.selected + 1;
    setCurrentPage(selectedPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (searchTerm) => {
    setSearchQuery(searchTerm);
    setCurrentPage(1);
  };
  const rightAnimate = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 250, duration: 0.35 },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.35, type: "spring", stiffness: 250 },
    },
  };

  return (
    <div className="flex flex-col gap-10 h-[84%] mt-4 p-8 bg-[#F3F4F6] rounded-4xl   dark:bg-[#333333]">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center">
        <motion.div
          variants={rightAnimate}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative [w-50%] md:max-w-[40%] md:w-full"
        >
          <input
            className=" dark:bg-[#454545] dark:text-[#ffff] dark:placeholder:text-white
                     w-full h-full shadow py-2 px-3 bg-[#ffff] rounded-[16px] focus:outline-none "
            value={searchQuery}
            type="text"
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder={t("favoriteNews.search")}
          />
          <img
            className={` absolute ${
              isRTL ? "left-3" : "right-3"
            } top-[50%] translate-y-[-50%] `}
            src={searchIcon}
            alt=""
          />
        </motion.div>
        <div
          className="flex h-full items-center bg-[#ffff] dark:bg-[#454545] dark:text-[#ffff]
          rounded-xl border shadow p-2 md:p-1 border-[#EAEAEA] "
        >
          <span className="text-[16px] hidden md:inline ps-3">
            {t("coursesPayment.filters")}
          </span>
          <select
            value={filterOption}
            onChange={(e) => {
              setFilterOption(e.target.value);
              setCurrentPage(1);
            }}
            className=" rounded-xl text-sm cursor-pointer ps-2 text-gray-600   dark:bg-[#454545] dark:text-[#ffff] bg-[#ffff]"
          >
            <option value="all">({t("favoriteNews.all")})</option>
            <option value="false">
              ({t("coursesPayment.AwaitingConfirmation")})
            </option>
            <option value="true">({t("coursesPayment.confirmed")})</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col justify-between h-[440px] p-6 bg-[#FFFFFF] rounded-2xl   dark:bg-[#454545] ">
        <div className="flex flex-col gap-4  relative ">
          <UserPanelTitle
            titleData={{
              title1: t("myCourseComments.title1"),
              justify1: "justify-start",
              w1: "w-60",
              title2: t("myCourseComments.title2"),
              justify2: "justify-start",
              w2: "w-52",
              title3: t("myCourseComments.title3"),
              justify3: "justify-start",
              w3: "w-52",
              title4: t("myCourseComments.title4"),
              justify4: "justify-center",
              w4: "w-28",
              title5: t("myCourseComments.title5"),
              justify5: "justify-center",
              w5: "w-30",
              title6: t("myCourseComments.title6"),
              justify6: "justify-center",
              w6: "w-24",
            }}
          />
          <div className="flex flex-col max-h-66 overflow-y-auto  ">
            {isPending ? (
              [...Array(commentsPerPage)].map((items, index) => (
                <FavoritesSkeleton key={index + 2} />
              ))
            ) : currentComments.length > 0 ? (
              <div>
                {currentComments.map((item, index) => {
                  return <MyCourseComment item={item} key={index} />;
                })}
              </div>
            ) : (
              <div className="w-full">
                <Lottie
                  className="w-[200px] h-[170px] my-4 mx-auto"
                  animationData={empty}
                  loop={true}
                />
                <p className="font-semibold text-[black] text-[20px] text-center dark:text-[#848484]">
                  {t("navbar.notfound")}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            previousLabel="< "
            onPageChange={handlePageChange}
            pageCount={totalPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            forcePage={currentPage - 1}
            containerClassName="flex flex-wrap justify-center gap-1 sm:gap-2"
            pageClassName="px-3 py-2 sm:px-5 sm:py-3 rounded-[15px] font-semibold shadow-md cursor-pointer text-sm sm:text-xl bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
            activeClassName="!bg-[#008C78] text-white rounded-2xl shadow-md"
            previousClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
            nextClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
            previousLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
            nextLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
          />

          <div className="flex items-center dark:bg-[#454545] dark:text-[#ffff] rounded-xl border shadow-md p-1 border-[#EAEAEA] ">
            <span className="text-[16px] hidden md:inline">
              {t("favoriteNews.NumberShows")}
            </span>
            <select
              value={commentsPerPage}
              onChange={(e) => {
                setCommentsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className=" rounded-xl text-sm cursor-pointer px-3 py-1 dark:bg-[#454545] dark:text-[#ffff]"
            >
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={6}>6</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourseComments;
