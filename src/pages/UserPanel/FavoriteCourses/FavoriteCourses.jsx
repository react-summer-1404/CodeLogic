import React, { useState } from "react";
import CourseHeader from "../../../components/common/favorites/courses/FavoriteCourseHeader/CourseHeader";
import { FavoriteCoursesData } from "../../../components/common/data/Favorites/FavoriteCourses";
import FavoriteCourse from "../../../components/common/favorites/courses/FavoriteCourse";
import { AnimatePresence, motion } from "framer-motion";
import pr from "../../../assets/Icons/A/pr.png";
import pl from "../../../assets/Icons/A/pl.png";
import searchIcon from "../../../assets/Icons/A/search.png";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import loadingIcon from "../../../assets/Images/A/loading.gif";
import { getFavoriteCourses } from "../../../core/services/api/Get/GetFavoriteCourses";
import { toast } from "react-toastify";
import { deleteFavCourses } from "../../../core/services/api/delete/deleteFavCourses";
import FavoritesSkeleton from "../../../components/common/skeleton/favorites/FavoritesSkeleton";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import empty from "../../../assets/Images/empty.json";
import { PersianDateConverter } from "../../../utils/helper/dateConverter";
import rectImage from "../../../assets/Images/A/teachersDetail/1.png";
const FavoriteCourses = () => {
  const { data: coursesData = {}, isPending } = useQuery({
    queryKey: ["FAVCOURSES"],
    queryFn: () => getFavoriteCourses(),
  });
  const favoriteCourses = coursesData?.favoriteCourseDto || [];
  /// i18n ///
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";
  //////delete///////
  const [openModal, setOpenModal] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const deleteItem = (itemId) => {
    setOpenModal(true);
    setSelectedId(itemId);
  };
  const queryClient = useQueryClient();
  const { mutate: deleteCourse, isPending: isDeleting } = useMutation({
    mutationKey: ["DELETECOURSE"],
    mutationFn: (value) => deleteFavCourses(value),
    onError: (err) => {
      toast.error(err.response?.data?.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["FAVCOURSES"]);
    },
  });
  //// pagination ////
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(2);
  const [searchTerm, setSearchTerm] = useState("");
  const [query] = useDebounce(searchTerm, 350);
  const [filterOption, setFilterOption] = useState("all");

  const filteredCourses = favoriteCourses
    .filter((n) => {
      const matchesSearch = n.courseTitle
        .trim()
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesSearch;
    })
    .sort((a, b) => {
      if (filterOption === "جدید ترین ها") {
        return b.lastUpdate - a.lastUpdate;
      } else if (filterOption === "اولین بروزرسانی") {
        return a.lastUpdate - b.lastUpdate;
      } else {
        return 0;
      }
    });

  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const goto = (p) => {
    if (p > totalPages || p < 1) return;
    setCurrentPage(p);
  };
  //// overview ////
  const [showOverviewModal, setShowOverviewModal] = useState(false);
  const [overViewData, setOverViewData] = useState(null);

  const getOverViewData = (courses) => {
    setShowOverviewModal(true);
    setOverViewData(courses);
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
     max-h-[89%] h-full flex-col justify-between mt-4 rounded-4xl "
    >
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between items-center pb-5 md:p-0">
        {/* filters ------- */}
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
            type="text"
            placeholder={t("favoriteCourses.search")}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
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
          className="flex h-full py-4  items-center bg-[#ffff] dark:bg-[#454545] dark:text-[#ffff]
         rounded-xl border shadow md:p-1 border-[#EAEAEA] "
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
            className=" rounded-xl text-sm cursor-pointer py-1 ps-2 text-gray-600
                         dark:bg-[#454545] dark:text-[#ffff] bg-[#ffff]"
          >
            <option value="all">({t("favoriteCourses.all")})</option>
            <option value="جدید ترین ها">
              ({t("favoriteCourses.lastUpdate")})
            </option>
            <option value="اولین بروزرسانی">
              ({t("favoriteCourses.firstUpdate")})
            </option>
          </select>
        </div>
      </div>
      {/* favorite courses -------- */}
      <motion.div
        variants={fadeInUp(0)}
        initial="hidden"
        animate="visible"
        className=" dark:bg-[#454545] dark:text-[#ffff]
             h-[85%] bg-[#ffff] shadow rounded-4xl flex flex-col justify-between"
      >
        <div className="flex flex-col h-[70%]">
          <CourseHeader />
          {isPending &&
            [...Array(coursesPerPage)].map((items, index) => (
              <FavoritesSkeleton key={index + 2} />
            ))}
          {!isPending && (
            <div className="overflow-y-auto h-full">
              {currentCourses.length > 0 ? (
                currentCourses.map((items, index) => (
                  <FavoriteCourse
                    getOverViewData={getOverViewData}
                    deleteItem={deleteItem}
                    items={items}
                    key={index}
                  />
                ))
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
          )}
        </div>
        {/* buttons ------- */}
        <div className="flex flex-col items-center md:items-start gap-3 md:gap-0 md:flex-row md:justify-between p-4 md:p-8">
          <div className="flex items-center gap-2" style={{ direction: "ltr" }}>
            <button
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage((prev) => prev - 1);
              }}
              className=" dark:bg-[#454545] dark:text-[#ffff] cursor-pointer flex gap-3 mr-2 items-center bg-[#ffff] text-[16px] text-[#848484] "
            >
              <img src={pl} alt="" />
              {t("favoriteCourses.back")}
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
              {t("favoriteCourses.next")}
              <img src={pr} alt="" />
            </button>
          </div>
          {/* filtering counts ------ */}
          <div className="flex items-center dark:bg-[#454545] dark:text-[#ffff] rounded-xl border shadow-md p-1 border-[#EAEAEA] ">
            <span className="hidden md:inline text-[16px]">
              {t("favoriteCourses.NumberShows")}
            </span>
            <select
              value={coursesPerPage}
              onChange={(e) => {
                setCoursesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className=" rounded-xl text-sm cursor-pointer px-3 py-1  dark:bg-[#454545] dark:text-[#ffff]"
            >
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={6}>6</option>
            </select>
          </div>
        </div>
      </motion.div>
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
                  deleteCourse(selectedId);
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
            className=" p-4 bg-[#eee] rounded-3xl flex
                flex-col  mt-3 gap-6  py-4 px-6 dark:text-white dark:bg-[#333] "
          >
            <h2 className="text-[19px] text-[#008C78] dark:text-[#008C78] mx-auto font-bold">
              {overViewData.courseTitle}
            </h2>
            <img
              className="rounded-4xl shadow-md w-[70%] mx-auto"
              src={
                !overViewData.course.imageAddress
                  ? rectImage
                  : overViewData.course
              }
              alt=""
            />
            <p className="text-[14px] text-[#848484] dark:text-[#848484] mt-2 mx-auto ">
              {overViewData.course.describe}
            </p>
            <div className="flex justify-center items-center gap-2">
              <span className="font-regular text-lg font-bold text-[#1E1E1E]   dark:text-[#EEEEEE]">
                {t("قیمت")}
              </span>
              <div className="flex">
                <span className="font-bold text-base text-[#008C78]">
                  {t(`${overViewData.course.cost} تومان`)}
                </span>
              </div>
            </div>
            <div className="text-[14px] text-[#848484] dark:text-[#848484] mx-auto">
              {t("favoriteCourses.lastUpdated")}:
              {PersianDateConverter(overViewData.lastUpdate)}
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

export default FavoriteCourses;
