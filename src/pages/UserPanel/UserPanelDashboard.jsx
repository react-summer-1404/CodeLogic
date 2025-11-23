import React, { useMemo } from "react";
import DashboardCourseReserve from "../../components/userpanel/DashboardCourseReserve/DashboardCourseReserve";
import DashboardLatestNews from "../../components/userpanel/DashboardLatestNews/DashboardLatestNews";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import img1 from "../../assets/Images/Rectanglepc.png";
import { useQuery } from "@tanstack/react-query";
import getAllNews from "../../core/services/api/Get/News";
import img2 from "../../assets/Images/HTML5Course.png";
import { Link } from "react-router-dom";
import GetProfileInfo from "../../core/services/api/Get/GetProfileInfo";

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
  const { data } = useQuery({
    queryKey: "getallnews",
    queryFn: getAllNews,
  });

  const sortedNews = useMemo(() => {
    if (!data?.news) return [];
    return [...data.news]
      .sort((a, b) => new Date(b.insertDate) - new Date(a.insertDate))
      .slice(0, 3);
  }, [data]);

  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  const { data: profileData } = useQuery({
    queryKey: ["profileInfo"],
    queryFn: async () => {
      const res = await GetProfileInfo();
      return res?.data ?? res;
    },
  });

  const profileFields = [
    profileData?.fName,
    profileData?.lName,
    profileData?.nationalCode,
    profileData?.gender,
    profileData?.birthDay,
    profileData?.phoneNumber,
    profileData?.userAbout,
    profileData?.homeAdderess,
    profileData?.latitude,
    profileData?.longitude,
    profileData?.linkdinProfile,
    profileData?.telegramLink,
    profileData?.email,
    profileData?.currentPictureAddress,
  ];

  const filledFieldsCount = profileFields.filter(
    (field) => field !== undefined && field !== null && field !== ""
  ).length;

  const percentage = Math.round(
    (filledFieldsCount / profileFields.length) * 100
  );

  return (
    <div className=" w-full bg-[#F3F4F6] h-[85%] flex items-center rounded-4xl p-5 dark:bg-[#333] ">
      <div className=" w-full h-full flex flex-col justify-between ">
        <div className=" w-full h-[25%] flex justify-between">
          <motion.div
            variants={headerVariants}
            initial="initial"
            animate="animate"
            className=" h-full w-[30%] rounded-3xl bg-white dark:bg-[#454545]"
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

            <motion.span
              variants={itemVariants}
              className={` text-[#008C78] text-[48px] pr-6 ${
                isRtl ? "" : "pl-6"
              } `}
            >
              5
            </motion.span>
          </motion.div>
          <motion.div
            variants={headerVariants}
            initial="initial"
            animate="animate"
            className=" h-full w-[30%] rounded-3xl bg-white dark:bg-[#454545]"
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
            className=" h-full w-[35%] rounded-3xl bg-white dark:bg-[#454545] relative"
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

            <div
              className={`absolute top-10 w-[21%] h-[54%] flex items-center justify-center rounded-full ${
                isRtl ? "mr-65" : "ml-65"
              }`}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                className="rotate-[-90deg]"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="#e5e5e5"
                  strokeWidth="7"
                  fill="transparent"
                />

                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="#008c78"
                  strokeWidth="7"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 46}
                  strokeDashoffset={2 * Math.PI * 46 * (1 - percentage / 100)}
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: 2 * Math.PI * 46 }}
                  animate={{
                    strokeDashoffset: 2 * Math.PI * 46 * (1 - percentage / 100),
                  }}
                  transition={{ duration: 0.5 }}
                />
              </svg>

              <p className="absolute text-[#008c78] font-bold">{percentage}%</p>
            </div>
          </motion.div>
        </div>
        <div className=" w-full h-[70%]  flex justify-between">
          <motion.div
            variants={headerVariants}
            initial="initial"
            animate="animate"
            className=" h-full w-[49%] bg-[white]  rounded-3xl dark:bg-[#454545]  "
          >
            <motion.div
              variants={itemVariants}
              className={` flex justify-between items-center   w-[45%] py-4 pr-6 ${
                isRtl ? "" : "pl-6 w-[65%]"
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
            <Link to="/userPanel/myReservedCourses">
              <motion.p
                variants={itemVariants}
                className="text-[16px] text-[#848484] text-center cursor-pointer  "
              >
                {t("paneldashboard.view_all")}
              </motion.p>
            </Link>
          </motion.div>
          <motion.div
            variants={headerVariants}
            initial="initial"
            animate="animate"
            className=" h-full w-[49%] bg-[white] rounded-3xl dark:bg-[#454545] "
          >
            <motion.div
              variants={itemVariants}
              className={` flex justify-between items-center   w-[45%] py-4 pr-6 ${
                isRtl ? "" : "pl-6 w-[65%]"
              }`}
            >
              <p
                className={`  text-[20px] text-[#1e1e1e] dark:text-[#848484] ${
                  isRtl ? "" : "w-[40%]   "
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

            {sortedNews.map((item) => {
              const shortTitle =
                item.title.length > 48
                  ? item.title.slice(0, 48) + "…"
                  : item.title;

              return (
                <DashboardLatestNews
                  id={item.id}
                  image={
                    item.currentImageAddress &&
                    !item.currentImageAddress.includes("undefined")
                      ? item.currentImageAddress
                      : img2
                  }
                  title={shortTitle}
                  date={new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(item.insertDate))}
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
