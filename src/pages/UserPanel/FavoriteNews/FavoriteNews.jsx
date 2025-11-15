import React, { useState } from "react";
import NewsHeader from "../../../components/common/favorites/News/newsHeader/NewsHeader";
import { useTranslation } from "react-i18next";
import FavoriteNew from "../../../components/common/favorites/News/FavoriteNew";
import { FavoriteNewsData } from "../../../components/common/data/Favorites/FavoriteNewsData";
import { AnimatePresence, motion, number } from "framer-motion";
import pr from "../../../assets/Icons/A/pr.png";
import pl from "../../../assets/Icons/A/pl.png";
import searchIcon from "../../../assets/Icons/A/search.png";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFavoriteNews } from "../../../core/services/api/Get/GetFavoritesNews";
import { useDebounce } from "use-debounce";
import loadingIcon from "../../../assets/Images/A/loading.gif";
import { toast } from "react-toastify";
import { deleteFavNews } from "../../../core/services/api/Delete/DeleteFavoriteNews";
import openEye from "../../../assets/Icons/A/openEye.png";
import starIcon from "../../../assets/Icons/A/star.png";
import htmlImg from "../../../assets/Images/HTML5Course.png";
import FavoritesSkeleton from "../../../components/common/skeleton/favorites/FavoritesSkeleton";
const FavoriteNews = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";
  /// get data ///
  const { data: favNewsData = {}, isPending } = useQuery({
    queryKey: ["FAVNEWS"],
    queryFn: () => getFavoriteNews(),
  });
  //////delete///////
  const [openModal, setOpenModal] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const deleteItem = (itemId) => {
    setOpenModal(true);
    setSelectedId(itemId);
  };
  const queryClient = useQueryClient();
  const { mutate: deleteNews, isPending: isDeleting } = useMutation({
    mutationKey: ["DELETENEW"],
    mutationFn: (value) => deleteFavNews(value),
    onSettled: (data) => {
      if (data.success) {
        toast.success(data.message);
        queryClient.invalidateQueries(["FAVNEWS"]);
      } else if (!data.success) {
        toast.error(data.message);
      }
      setOpenModal(false);
      setSelectedId(null);
    },
  });
  /// pagination ///
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(2);
  const [searchTerm, setSearchTerm] = useState("");
  const [query] = useDebounce(searchTerm, 350);
  const [filterOption, setFilterOption] = useState("all");

  const favNews = favNewsData?.myFavoriteNews || [];
  const filteredNews = favNews
    .filter((n) =>
      n.news.title.trim().toLowerCase().includes(query.trim().toLowerCase())
    )
    .sort((a, b) => {
      if (filterOption === "بیشترین لایک") {
        return b.likesCount - a.likesCount;
      } else if (filterOption === "بیشترین بازدید") {
        return b.viewsCount - a.viewsCount;
      }
      return 0;
    });

  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);
  const goto = (p) => {
    if (p > totalPages || p < 1) return;
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //// overview ////
  const [showOverviewModal, setShowOverviewModal] = useState(false);
  const [overViewData, setOverViewData] = useState(null);

  const getOverViewData = (news) => {
    setShowOverviewModal(true);
    setOverViewData(news);
  };
  const handleCloseModal = () => {
    setShowOverviewModal(false);
    setOverViewData(null);
  };

  /// motion framer ///
  const fadeInUp = (delay) => ({
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: "easeOut", delay },
    },
  });
  const leftAnimate = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.35, type: "spring", stiffness: 250 },
    },
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
    <div
      className="bg-[#F3F4F6] dark:bg-[#333]  w-full p-5 flex
     max-h-[89%] h-full flex-col justify-between mx-auto mt-4 rounded-4xl "
    >
      <div className="flex justify-between items-center">
        {/* filtering ------ */}
        <motion.div
          variants={rightAnimate}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative max-w-[40%] w-full"
        >
          <input
            className=" dark:bg-[#454545] dark:text-[#ffff] dark:placeholder:text-white
                     w-full h-full shadow py-2 px-3 bg-[#ffff] rounded-[16px] focus:outline-none "
            type="text"
            onChange={(e) => {
              setSearchTerm(e.target.value);
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
        <div className="flex h-full items-center bg-[#ffff] dark:bg-[#454545] dark:text-[#ffff] rounded-xl border shadow md:p-1 border-[#EAEAEA] ">
          <span className="text-[16px] hidden md:inline">
            {t("coursesPayment.filters")}
          </span>
          <select
            value={filterOption}
            onChange={(e) => {
              setFilterOption(e.target.value);
              setCurrentPage(1);
            }}
            className=" rounded-xl text-sm cursor-pointer  ps-2 text-gray-600
                         dark:bg-[#454545] dark:text-[#ffff] bg-[#ffff]"
          >
            <option value="all">({t("favoriteNews.all")})</option>
            <option value="بیشترین لایک">
              ({t("favoriteNews.mostLikes")})
            </option>
            <option value="بیشترین بازدید">
              ({t("favoriteNews.mostViews")})
            </option>
          </select>
        </div>
      </div>
      {/* favorite news ------- */}
      <motion.div
        variants={fadeInUp(0)}
        initial="hidden"
        animate="visible"
        className=" dark:bg-[#454545] dark:text-[#ffff]
             h-[85%] bg-[#ffff] shadow rounded-4xl flex flex-col justify-between"
      >
        <div className="flex flex-col h-[70%]">
          <NewsHeader />
          {isPending &&
            [...Array(newsPerPage)].map((items, index) => (
              <FavoritesSkeleton key={index + 1} />
            ))}
          {!isPending && (
            <div className="overflow-y-auto h-full">
              {currentNews.length > 0 ? (
                currentNews.map((items, index) => (
                  <FavoriteNew
                    getOverViewData={getOverViewData}
                    deleteItem={deleteItem}
                    key={index}
                    items={items}
                  />
                ))
              ) : (
                <h1 className="text-red-600 text-2xl font-bold text-center mt-20 ">
                  {t("favoriteNews.notFound")}
                </h1>
              )}
            </div>
          )}
        </div>
        {/* buttons ------- */}
        <div className="flex justify-between p-4 md:p-8">
          <div className="flex items-center gap-2" style={{ direction: "ltr" }}>
            <button
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage((prev) => prev - 1);
              }}
              className="  dark:bg-[#454545] dark:text-[#ffff] cursor-pointer flex gap-3 mr-2 items-center bg-[#ffff] text-[16px] text-[#848484] "
            >
              <img src={pl} alt="" />
              {t("favoriteNews.back")}
            </button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const active = p === currentPage;
              return (
                <button
                  key={p}
                  onClick={() => goto(p)}
                  className={` w-8 h-8 transition-all duration-200 cursor-pointer text-[16px] text-center text-[#848484] rounded-full ${
                    active ? "bg-[#008C78] text-[#ffff] " : ""
                  } `}
                >
                  {p}
                </button>
              );
            })}
            <button
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage((prev) => prev + 1);
              }}
              className="  dark:bg-[#454545] dark:text-[#ffff] cursor-pointer flex gap-3 ml-2 items-center bg-[#ffff] text-[16px] text-[#848484] "
            >
              {t("favoriteNews.next")}
              <img src={pr} alt="" />
            </button>
          </div>
          {/* filtering counts ------ */}
          <div className="flex items-center dark:bg-[#454545] dark:text-[#ffff] rounded-xl border shadow-md p-1 border-[#EAEAEA] ">
            <span className="text-[16px] hidden md:inline">
              {t("favoriteNews.NumberShows")}
            </span>
            <select
              value={newsPerPage}
              onChange={(e) => {
                setNewsPerPage(Number(e.target.value));
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
      </motion.div>
      {/* ////// delete modal //// */}
      {openModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => {
            setOpenModal(false);
            setSelectedId(null);
          }}
          className=" fixed inset-0 bg-black/50 backdrop-blur flex justify-center items-center "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -100 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 220,
                damping: 18,
                mass: 0.8,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: 40,
              transition: {
                type: "spring",
                stiffness: 180,
                damping: 20,
              },
            }}
            className=" w-[80%] md:w-[30%] h-[30%] md:h-[25%] bg-[#eee] rounded-3xl flex 
          flex-col justify-center mt-3 gap-10 items-center p-4 dark:text-white dark:bg-[#333] "
          >
            <h2 className="font-bold">{t("deleteModal.title")}</h2>
            <div className="flex items-center gap-5 justify-between">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                whileTap={{ scale: 0.98 }}
                disabled={isDeleting}
                onClick={() => {
                  deleteNews(selectedId);
                }}
                className=" cursor-pointer bg-[#008C78] text-white rounded-2xl py-2 px-4"
              >
                {isDeleting
                  ? `${t("deleteModal.Deleting")}`
                  : `${t("deleteModal.ConfirmDeletion")}`}
              </motion.button>
              <button className=" cursor-pointer dark:border dark:border-[#EAEAEA] dark:text-white px-3 py-2 rounded-2xl">
                {t("deleteModal.cancel")}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      {/* ///// overview modal //// */}
      {showOverviewModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => handleCloseModal()}
          className=" fixed inset-0 bg-black/50 backdrop-blur flex justify-center items-center "
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                duration: 300,
              },
            }}
            className=" w-[60%] bg-[#eee] rounded-3xl flex
          flex-col  mt-3 gap-6  py-4 px-6 dark:text-white dark:bg-[#333] "
          >
            <h2 className="text-[19px] text-[#008C78] dark:text-[#008C78] mx-auto font-bold">
              {overViewData.title}
            </h2>
            <img
              className="rounded-4xl shadow-md w-[55%] mx-auto"
              src={
                overViewData.currentImageAddress ===
                  "http://sepehracademy.liara.run/files/undefined" ||
                overViewData.currentImageAddress ===
                  "http://localhost:300/files/Image-1761849433020.png"
                  ? `${htmlImg}`
                  : `${overViewData.currentImageAddress}`
              }
              alt=""
            />
            <p className="text-[14px] text-[#848484] dark:text-[#848484] mt-2 mx-auto ">
              {overViewData.miniDescribe}
            </p>
            <div className=" flex flex-row justify-between items-center w-full md:w-[25%] mx-auto ">
              <div
                style={{ backgroundImage: `url(${openEye})` }}
                className=" text-[14px] text-[#848484] bg-no-repeat bg-[right_center] pr-6 "
              >
                666
              </div>
              <div
                style={{ backgroundImage: `url(${starIcon})` }}
                className=" text-[14px] text-[#F8BC24] bg-no-repeat bg-[left_center] pl-6 "
              >
                34
              </div>
            </div>
            <button
              onClick={() => handleCloseModal()}
              className=" cursor-pointer border dark:border-[#EAEAEA] mx-auto
               dark:text-white px-3 py-2 rounded-2xl hover:shadow-md inline"
            >
              {t("login.Back")}
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default FavoriteNews;
