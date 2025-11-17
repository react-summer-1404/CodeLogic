import React from "react";
import DashboardCourseReserve from "../../components/userpanel/DashboardCourseReserve/DashboardCourseReserve";
import DashboardLatestNews from "../../components/userpanel/DashboardLatestNews/DashboardLatestNews";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import img1 from "../../assets/Images/Rectanglepc.png";

const courseData = [
  {
    image: img1,
    title: "دوره آموزش جامع HTML5",
    status: "رزرو شده",
  },
  {
    image: img1,
    title: " آموزش تبدیل گفتار به نوشتار با پایتون  ",
    status: "در انتظار تایید ",
  },
  {
    image: img1,
    title: " دوره اتصال React به PHP به همراه 3 پروژه عملی  ",
    status: " در انتظار تایید",
  },
];
const newsData = [
  {
    image: img1,
    title: "برنامه نویسی چیست؟‌ – همه چیز هایی که باید  بدانید + کاربردها",
    date: "1404/03/13 ",
  },
  {
    image: img1,
    title: "اسکریپت چیست و چه کاربردی در برنامه‌نویسی دارد؟",
    date: "1404/03/13",
  },
  {
    image: img1,
    title: "پایتون + ماینکرفت = یادگیری برنامه‌ نویسی با بازی!",
    date: "1404/03/13",
  },
];

const headerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const UserPanelDashboard = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  return (
    <div className=" w-full bg-[#F3F4F6] mt-5 md:m-0 md:h-[85%] flex items-center rounded-4xl p-5 dark:bg-[#333] ">
      <div className=" w-full h-full flex flex-col justify-between ">
        <div className=" w-full h-[25%] flex flex-col gap-5 md:flex-row md:justify-between">
          <motion.div
            variants={headerVariants}
            initial="initial"
            animate="animate"
            className=" h-full md:w-[30%] rounded-3xl bg-white dark:bg-[#454545]"
          >
            <motion.div
              variants={itemVariants}
              className={` flex justify-between items-center  w-[55%] py-4 pr-6 ${
                isRtl ? "" : "pl-6 w-[65%]"
              }`}
            >
              <p className="text-[20px] text-[#1e1e1e] dark:text-[#848484] ">
                {t("paneldashboard.my_courses_title")}
              </p>
              <div className="p-1 border-2 border-[#1E1E1E] rounded-full dark:border-[#848484]">
                <NorthWestIcon className="text-[#1e1e1e] dark:text-[#848484]" />
              </div>
            </motion.div>

            <motion.sp
              variants={itemVariants}
              className={` text-[#008C78] text-[48px] pr-6 ${
                isRtl ? "" : "pl-6"
              } `}
            >
              5
            </motion.sp>
          </motion.div>
          <motion.div
            variants={headerVariants}
            initial="initial"
            animate="animate"
            className=" h-full md:w-[30%] rounded-3xl bg-white dark:bg-[#454545]"
          >
            <motion.div
              variants={itemVariants}
              className={`flex justify-between items-center  w-[85%] py-4 pr-6  ${
                isRtl ? "" : "pl-6 w-[90%]"
              } `}
            >
              <p className="text-[20px] text-[#1e1e1e] dark:text-[#848484] ">
                {t("paneldashboard.unpaid_periods")}
              </p>
              <div className="p-1 border-2 border-[#1E1E1E] rounded-full dark:border-[#848484]">
                <NorthWestIcon className="text-[#1e1e1e] dark:text-[#848484]" />
              </div>
            </motion.div>

            <motion.span
              variants={itemVariants}
              className={` text-[#008C78] text-[48px] pr-6 ${
                isRtl ? "" : "pl-6"
              } `}
            >
              12
            </motion.span>
          </motion.div>

          <motion.div
            variants={headerVariants}
            initial="initial"
            animate="animate"
            className=" h-full md:w-[35%] rounded-3xl bg-white dark:bg-[#454545] relative"
          >
            <motion.div
              variants={headerVariants}
              className={` flex justify-between items-center  w-[65%] py-4 pr-6 ${
                isRtl ? "" : "pl-6 w-[70%]"
              } `}
            >
              <p className="text-[20px] text-[#1e1e1e] dark:text-[#848484] ">
                {t("paneldashboard.profile_completed")}
              </p>
              <div className="p-1 border-2 border-[#1E1E1E] rounded-full dark:border-[#848484]">
                <NorthWestIcon className="text-[#1e1e1e] dark:text-[#848484]" />
              </div>
            </motion.div>
            <motion.div
              variants={headerVariants}
              className={` rounded-full border-7 border-[#008c78] w-20 mx-auto mb-2 md:mb-0 h-20 md:w-[21%] md:h-[54%] flex flex-col items-center
                 justify-center md:mr-65 md:absolute md:top-10 ${
                   isRtl ? "" : "md:ml-65"
                 } `}
            >
              <p className="text-[#008c78] font-bold ">100%</p>
            </motion.div>
          </motion.div>
        </div>
        <div className=" w-full md:h-[70%]  flex flex-col md:flex-row md:justify-between">
          <motion.div
            variants={headerVariants}
            initial="initial"
            animate="animate"
            className=" h-full mt-5 py-4 md:m-0 md:p-0 md:w-[49%] bg-[white]  rounded-3xl dark:bg-[#454545]  "
          >
            <motion.div
              variants={itemVariants}
              className={` flex justify-between items-center   md:w-[45%] px-6 py-4 md:pr-6 ${
                isRtl ? "" : "md:pl-6 md:w-[65%]"
              }`}
            >
              <p
                className={` text-[20px] text-[#1e1e1e] dark:text-[#848484] ${
                  isRtl ? "" : "w-[100%]   "
                } `}
              >
                {t("paneldashboard.reserved_courses")}
              </p>
              <div
                className={` p-1 border-2 border-[#1E1E1E] rounded-full dark:border-[#848484] ${
                  isRtl ? "" : "mr-20"
                } `}
              >
                <NorthWestIcon className="text-[#1e1e1e] dark:text-[#848484]" />
              </div>
            </motion.div>

            {courseData.map((item, index) => {
              const shortTitle =
                item.title.length > 48
                  ? item.title.slice(0, 48) + "…"
                  : item.title;

              return (
                <DashboardCourseReserve
                  key={index}
                  image={item.image}
                  title={shortTitle}
                  status={item.status}
                />
              );
            })}
            <motion.p
              variants={itemVariants}
              className="text-[16px] text-[#848484] text-center cursor-pointer  "
            >
              {t("paneldashboard.view_all")}
            </motion.p>
          </motion.div>
          <motion.div
            variants={headerVariants}
            initial="initial"
            animate="animate"
            className="h-full mt-5 py-4 md:m-0 md:p-0 md:w-[49%] bg-[white]  rounded-3xl dark:bg-[#454545] "
          >
            <motion.div
              variants={itemVariants}
              className={` flex justify-between items-center   md:w-[45%] py-4 pr-6 ${
                isRtl ? "" : "pl-6 md:w-[65%]"
              }`}
            >
              <p
                className={`  text-[20px] text-[#1e1e1e] dark:text-[#848484] ${
                  isRtl ? "" : "md:w-[40%]   "
                } `}
              >
                {t("paneldashboard.latest_news")}
              </p>
              <div
                className={` p-1 border-2 border-[#1E1E1E] rounded-full dark:border-[#848484] ${
                  isRtl ? "ml-5" : "mr-30"
                } `}
              >
                <NorthWestIcon className="text-[#1e1e1e] dark:text-[#848484]" />
              </div>
            </motion.div>

            {newsData.map((item, index) => {
              const shortTitle =
                item.title.length > 48
                  ? item.title.slice(0, 48) + "…"
                  : item.title;

              return (
                <DashboardLatestNews
                  key={index}
                  image={item.image}
                  title={shortTitle}
                  date={item.date}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UserPanelDashboard;
