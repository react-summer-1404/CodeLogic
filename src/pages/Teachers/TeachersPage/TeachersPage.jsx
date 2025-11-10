import { AnimatePresence, motion, number } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SliderTeacher from "../../../components/landing/SliderTeachers/SliderTeacher/SliderTeacher";
import SliderButtons from "../../../components/common/sliders/buttons/sliderButtons";
import { Atom } from "react-loading-indicators";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import GetAllTeachers from "../../../core/services/api/Get/GetAllTeachers";
import loading from "../../../assets/Images/A/loading.gif";
import buttom from "../../../assets/Icons/A/buttom.png";
import leftIcon from "../../../assets/Icons/A/left.png";
import rightIcon from "../../../assets/Icons/A/right.png";
import searchIcon from "../../../assets/Icons/A/search.png";
import TeachersSkeleton from "../../../components/common/skeleton/Teachers/TeachersSkeleton";

const TeachersPage = () => {
  //// get teachers data ////
  const { data: teachersData = [], isPending } = useQuery({
    queryKey: ["GETALLTEACHERS"],
    queryFn: () => GetAllTeachers(),
  });
  //// i18n ////
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";
  //// pagination ////
  const [TempSearch, setTempSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [TempCount, setTempCount] = useState(16);
  const [TeachersPerPage, setTeachersPerPage] = useState(16);
  const [searchActivated, setSearchActivated] = useState(true);
  const startIndex = (currentPage - 1) * TeachersPerPage;
  const endIndex = startIndex + TeachersPerPage;
  const filteredTeachers = teachersData.filter((teachers) =>
    teachers.fullName.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  const currentTeachers = filteredTeachers.slice(startIndex, endIndex);
  const totalPage = Math.max(
    1,
    Math.ceil(filteredTeachers.length / TeachersPerPage)
  );
  //// functions ////
  const handleSelectCount = (num) => {
    setTempCount(num);
    setDropDownPage(false);
    setSearchActivated(false);
  };

  const applySearch = () => {
    setcurrentPage(1);
    setSearchTerm(TempSearch);
    setTeachersPerPage(TempCount);
    setSearchActivated(true);
  };

  const goToPage = (page) => {
    if (page < 1 || page >= totalPage) return;
    setcurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //// animations ////
  const fadeInUp = (delay) => ({
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  });
  const fadeOutUp = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  });

  const sliderRef = useRef(null);
  useEffect(() => {
    if (currentPage > totalPage) {
      setcurrentPage(1);
    }
  }, [totalPage, currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AnimatePresence>
        <motion.div
          variants={fadeInUp(0.35)}
          exit="hidden"
          initial="hidden"
          animate="visible"
          className="flex flex-col p-[16px] dark:bg-[#1E1E1E] "
        >
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex gap-8 text-[#008C78] text-[14px] ">
              <Link
                to={"/"}
                className="hover:text-blue-500 transition duration-300"
              >
                {t("teachersPage.titles.HomePage")}
              </Link>
              <span>&gt;</span>
              <Link className="hover:text-blue-500 transition duration-300">
                {t("teachersPage.titles.Teachers")}
              </Link>
            </div>
            <h2 className="text-[#1E1E1E] text-[32px] font-bold dark:text-white ">
              {t("teachersPage.titles.Teachers")}
            </h2>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-1 pb-20 ">
            <div
              className="mt-12 dark:text-[#EEEEEE] dark:border dark:border-[#EAEAEA]   dark:bg-[#1E1E1E] flex bg-[#ffff] 
                            h-[72px] w-full shadow-md  rounded-[15px] items-center justify-between px-5 py-3 "
            >
              {/* ///// filtering //// */}
              <div className="flex gap-4 w-[60%] h-full items-center justify-between ">
                <div className=" w-[80%] h-full   ">
                  <motion.input
                    whileFocus={{
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                    transition={{ duration: 0.3 }}
                    className={` px-3 w-full h-full outline-none border-[#EAEAEA] 
                                            bg-no-repeat ${
                                              isRTL
                                                ? "bg-[left_15px_center]"
                                                : "bg-[right_15px_center]"
                                            } border-[1px] rounded-2xl `}
                    style={{ backgroundImage: `url(${searchIcon})` }}
                    placeholder={t("teachersPage.filters.Search")}
                    type="text"
                    onChange={(e) => {
                      setTempSearch(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      e.key === "Enter" && applySearch();
                    }}
                    value={TempSearch}
                  />
                </div>
                <div className="flex h-full items-center dark:bg-black dark:text-[#ffff] rounded-xl border shadow-md p-1 border-[#EAEAEA] ">
                  <span className="text-[16px] ps-1">
                    {t("teachersPage.filters.ShowMore")}
                  </span>
                  <select
                    value={TempCount}
                    onChange={(e) => {
                      setTempCount(Number(e.target.value));
                    }}
                    className=" rounded-xl text-sm cursor-pointer px-2 py-1  dark:bg-black dark:text-[#ffff]"
                  >
                    <option value={16}>16</option>
                    <option value={20}>20</option>
                    <option value={24}>24</option>
                  </select>
                </div>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                whileTap={{ scale: 0.98 }}
                onClick={applySearch}
                className="text-center text-[14px] text-[#ffff] h-full w-[11%] rounded-2xl bg-[#008C78] "
              >
                {t("teachersPage.filters.search")}
              </motion.button>
            </div>
            {/* ///responsive //// */}
            <SliderButtons sliderRef={sliderRef} />
            {/* //// cards //// */}
            <div
              className="flex flex-nowrap gap-5 pb-5  md:flex-wrap w-full overflow-x-auto scroll-smooth "
              ref={sliderRef}
              style={{ direction: "ltr" }}
            >
              {isPending &&
                [...Array(5)].map((item, i) => (
                  <TeachersSkeleton key={i + 2} />
                ))}
              {!isPending && currentTeachers.length > 0 ? (
                currentTeachers.map((item, index) => (
                  <SliderTeacher
                    isPending={isPending}
                    item={item}
                    key={index}
                  />
                ))
              ) : (
                <p className=" text-center p-5 text-red-600 font-bold text-4xl mx-auto">
                  {t("NoResultFound")}
                </p>
              )}
            </div>
            {/* //// buttons  //// */}
            <div
              className="  flex items-center justify-center gap-3"
              style={{ direction: "ltr" }}
            >
              <button
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                className=' dark:bg-[#606060] cursor-pointer shadow-lg text-center w-[50px] h-[50px] rounded-[15px] p-3
                                     bg-[#EAEAEA] dark:text-[#ffff] text-[#1E1E1E]"}  bg-[center_center] bg-no-repeat '
                style={{ backgroundImage: `url(${leftIcon})` }}
              ></button>
              <div className="flex items-center justify-center gap-3">
                {Array.from({ length: totalPage }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className={` dark:bg-[#606060] transition-all duration-300 cursor-pointer shadow-lg text-center w-[50px] h-[50px] rounded-[15px] p-3 ${
                      currentPage === i + 1
                        ? "bg-[#008C78] dark:bg-[#008C78]  text-[#ffff]"
                        : " bg-[#EAEAEA] text-[#1E1E1E]"
                    } `}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                disabled={currentPage === totalPage}
                onClick={() => goToPage(currentPage + 1)}
                className=' dark:bg-[#606060] cursor-pointer shadow-lg text-center w-[50px] h-[50px] rounded-[15px] p-3
                                     bg-[#EAEAEA] dark:text-[#ffff] text-[#1E1E1E]"}  bg-[center_center] bg-no-repeat '
                style={{ backgroundImage: `url(${rightIcon})` }}
              ></button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TeachersPage;
