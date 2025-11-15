import React, { useState } from "react";
import CourseHeader from "../../../components/userPanel/CoursePayment/CourseHeader/CourseHeader";
import CoursePayment from "../../../components/userPanel/CoursePayment/CoursePayment";
import { paymentsData } from "../../../components/common/data/CoursePayments/payments";
import { AnimatePresence, motion, number } from "framer-motion";
import { useTranslation } from "react-i18next";
import pr from "../../../assets/Icons/A/pr.png";
import pl from "../../../assets/Icons/A/pl.png";
import searchIcon from "../../../assets/Icons/A/search.png";
import ReactPaginate from "react-paginate";

const CoursesPayment = () => {
  // i18n //
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "fa";
  // pagination //
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [paymentsPerPage, setPaymentsPerPage] = useState(2);
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredPayments = paymentsData.filter((p) => {
    const matchesSearch =
      p.courseGroup
        .toLowerCase()
        .trim()
        .includes(searchTerm.trim().toLowerCase()) ||
      p.paymentDate
        .toLowerCase()
        .trim()
        .includes(searchTerm.trim().toLowerCase());
    const matchesStatus =
      filterStatus === "all"
        ? true
        : p.paymentStatus
            .toLowerCase()
            .trim()
            .match(filterStatus.trim().toLowerCase());
    return matchesSearch && matchesStatus;
  });
  const startIndex = (currentPage - 1) * paymentsPerPage;
  const endIndex = startIndex + paymentsPerPage;
  const currentPayments = filteredPayments.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPayments.length / paymentsPerPage);
  const handlePageChange = (p) => {
    const selectedPage = p.selected + 1;
    setCurrentPage(selectedPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      {/* ----------- filtering  */}
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between items-center pb-5 md:p-0">
        <AnimatePresence>
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
              placeholder={t("coursesPayment.search")}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
              className={` absolute ${
                isRTL ? "left-3" : "right-3"
              } top-[50%] translate-y-[-50%] `}
              src={searchIcon}
              alt=""
            />
          </motion.div>
        </AnimatePresence>

        <div
          className="flex h-full py-4  items-center bg-[#ffff] dark:bg-[#454545] dark:text-[#ffff]
         rounded-xl border shadow md:p-1 border-[#EAEAEA] "
        >
          <span className=" hidden md:inline text-[16px] ps-3">
            {t("coursesPayment.filters")}
          </span>
          <select
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value);
              setcurrentPage(1);
            }}
            className=" rounded-xl text-sm cursor-pointer py-1 ps-2 text-gray-600
                         dark:bg-[#454545] dark:text-[#ffff] bg-[#ffff]"
          >
            <option value="all">({t("coursesPayment.all")})</option>
            <option value="تایید شده">({t("coursesPayment.confirmed")})</option>
            <option value="در انتظار تایید">
              ({t("coursesPayment.AwaitingConfirmation")})
            </option>
            <option value="تایید نشده">
              ({t("coursesPayment.notConfirmed")})
            </option>
          </select>
        </div>
      </div>
      {/* ------ payments */}
      <motion.div
        variants={fadeInUp(0)}
        initial="hidden"
        animate="visible"
        className="  dark:bg-[#454545] dark:text-[#ffff]
             h-[85%] bg-[#ffff] shadow rounded-4xl flex flex-col justify-between"
      >
        <div className="flex flex-col h-[70%] ">
          <CourseHeader />
          <div className="overflow-y-auto h-full">
            {currentPayments.length > 0 ? (
              currentPayments.map((items) => (
                <CoursePayment key={items.id} items={items} />
              ))
            ) : (
              <h1 className="text-red-600 text-2xl font-bold text-center mt-20 ">
                {t("coursesPayment.notFound")}
              </h1>
            )}
          </div>
        </div>
        {/* -------- buttons */}
        <div className="flex flex-col md:flex-row md:justify-between p-4 md:p-8">
          <div>
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
          </div>
          {/* ------------ filterCount */}
          <div
            className="flex items-center mx-auto md:m-0 dark:bg-[#454545] dark:text-[#ffff]
           rounded-xl border shadow-md p-2 md:p-0 border-[#EAEAEA] mt-6 "
          >
            <span className=" text-[16px] ps-1">
              {t("coursesPayment.NumberShows")}
            </span>
            <select
              value={paymentsPerPage}
              onChange={(e) => {
                setPaymentsPerPage(Number(e.target.value));
                setcurrentPage(1);
              }}
              className=" rounded-xl text-sm cursor-pointer px-3 md:py-1 dark:bg-[#454545] dark:text-[#ffff]"
            >
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={6}>6</option>
            </select>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CoursesPayment;
