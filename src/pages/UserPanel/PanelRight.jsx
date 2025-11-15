import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import img1 from "../../assets/Images/PanelRight.png";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import WalletIcon from "@mui/icons-material/Wallet";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SecurityIcon from "@mui/icons-material/Security";
import LogoutIcon from "@mui/icons-material/Logout";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const subMenuVariants = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const subMenuItemVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.2, delay: 0.1 } },
};

const PanelRight = ({ isMobileMenu }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  const location = useLocation();
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const visibilityClasses = isMobileMenu
    ? "w-full h-full"
    : "hidden md:flex md:w-[28%] lg:w-[22.37%]";

  return (
    <motion.div
      className={`${visibilityClasses} items-center justify-between transition-all duration-300 h-screen  `}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="bg-[#F3F4F6] h-[93.75%] w-[100%] rounded-4xl px-4 md:px-5 lg:px-6 py-5 md:py-6 dark:bg-[#333] overflow-y-auto scrollbar-thin scrollbar-thumb-[#008C78]/40">
        <motion.div
          className="flex gap-3 md:gap-4 mb-3"
          variants={itemVariants}
        >
          <img
            src={img1}
            alt="لوگوی آکادمی بحر"
            className="w-[40px] md:w-[45px] lg:w-[50px] object-contain"
          />
          <h1 className="text-[#1E1E1E] font-bold text-[16px] md:text-[18px] lg:text-[20px] mt-2 dark:text-[white]">
            {t("panelside.academy_name")}
          </h1>
        </motion.div>

        <motion.p
          className="text-[#848484] text-[13px] md:text-[14px] lg:text-[15px] mb-2"
          variants={itemVariants}
        >
          {t("panelside.menu")}
        </motion.p>

        <Link to="/userPanel">
          <motion.div
            className="flex items-center mb-4 rounded-4xl"
            variants={itemVariants}
          >
            <MenuIcon
              className={`text-[18px] md:text-[20px] ${
                isActive("/userPanel")
                  ? "text-[#008C78] !text-[24px] md:!text-[26px]"
                  : "text-[#848484]"
              }`}
            />
            <span
              className={`text-[15px] md:text-[17px] lg:text-[18px] mr-2 transition-all duration-100 ${
                isActive("/userPanel")
                  ? "text-[#1e1e1e] font-semibold dark:text-[white]"
                  : "text-[#848484]"
              } ${isRtl ? "" : "ml-2"}`}
            >
              {t("panelside.dashboard")}
            </span>
          </motion.div>
        </Link>

        <Link to="/userPanel/UserInfo">
          <motion.div
            className="flex items-center mb-4"
            variants={itemVariants}
          >
            <PersonIcon
              className={`text-[18px] md:text-[20px] ${
                isActive("/userPanel/UserInfo")
                  ? "text-[#008C78] !text-[24px] md:!text-[26px]"
                  : "text-[#848484]"
              }`}
            />
            <span
              className={`text-[15px] md:text-[17px] lg:text-[18px] mr-2 transition-all duration-100 ${
                isActive("/userPanel/UserInfo")
                  ? "text-[#1e1e1e] font-semibold dark:text-[white]"
                  : "text-[#848484]"
              } ${isRtl ? "" : "ml-2"}`}
            >
              {t("panelside.user_info")}
            </span>
          </motion.div>
        </Link>

        <motion.div className="flex items-center mb-4" variants={itemVariants}>
          <MenuBookIcon
            className={`text-[18px] md:text-[20px] ${
              isActive("/userPanel/myCourses")
                ? "text-[#008C78] !text-[24px] md:!text-[26px]"
                : "text-[#848484]"
            }`}
          />
          <Link
            to={"/userPanel/myCourses"}
            className={`text-[15px] md:text-[17px] lg:text-[18px] mr-2 transition-all duration-100 ${
              isActive("/userPanel/myCourses")
                ? "text-[#1e1e1e] font-semibold dark:text-[white]"
                : "text-[#848484]"
            } ${isRtl ? "" : "ml-2"}`}
          >
            {t("panelside.my_courses")}
          </Link>
        </motion.div>

        <motion.div className="flex items-center mb-4" variants={itemVariants}>
          <BookmarkIcon
            className={`text-[18px] md:text-[20px] ${
              isActive("/userPanel/myReservedCourses")
                ? "text-[#008C78] !text-[24px] md:!text-[26px]"
                : "text-[#848484]"
            }`}
          />
          <Link
            to={"/userPanel/myReservedCourses"}
            className={`text-[15px] md:text-[17px] lg:text-[18px] mr-2 transition-all duration-100 ${
              isActive("/userPanel/myReservedCourses")
                ? "text-[#1e1e1e] font-semibold dark:text-[white]"
                : "text-[#848484]"
            } ${isRtl ? "" : "ml-2"}`}
          >
            {t("panelside.reserved_courses")}
          </Link>
        </motion.div>

        <motion.div className="flex items-center mb-4" variants={itemVariants}>
          <WalletIcon
            className={`text-[18px] md:text-[20px] ${
              isActive("/userPanel/coursesPayments")
                ? "text-[#008C78] !text-[24px] md:!text-[26px]"
                : "text-[#848484]"
            }`}
          />
          <span
            className={`text-[15px] md:text-[17px] lg:text-[18px] mr-2 transition-all duration-100 ${
              isActive("/userPanel/coursesPayments")
                ? "text-[#1e1e1e] font-semibold dark:text-[white]"
                : "text-[#848484]"
            } ${isRtl ? "" : "ml-2"}`}
          >
            <Link to="/userPanel/coursesPayments">
              {t("panelside.my_payments")}
            </Link>
          </span>
        </motion.div>

        <motion.div className="mb-4" variants={itemVariants}>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsCommentsOpen(!isCommentsOpen)}
          >
            <ChatBubbleIcon className="text-[18px] md:text-[20px] text-[#848484]" />
            <span
              className={`text-[15px] md:text-[17px] lg:text-[18px] text-[#848484] mr-2 ${
                isRtl ? "" : "ml-2"
              }`}
            >
              {t("panelside.my_comments")}
            </span>
            {isCommentsOpen ? (
              <ExpandLessIcon className="text-[18px] md:text-[20px] text-[#848484] mr-2" />
            ) : (
              <ExpandMoreIcon className="text-[18px] md:text-[20px] text-[#848484] mr-2" />
            )}
          </div>

          <AnimatePresence>
            {isCommentsOpen && (
              <motion.div
                className="flex flex-col pr-5 pt-2"
                variants={subMenuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.div
                  className="mb-2 flex items-center"
                  variants={subMenuItemVariants}
                >
                  <CircleOutlinedIcon
                    className={`text-[18px] md:text-[20px] ${
                      isActive("/userPanel/myCourseComments")
                        ? "text-[#008C78] !text-[24px] md:!text-[26px]"
                        : "text-[#848484]"
                    }`}
                  />
                  <Link
                    to={"/userPanel/myCourseComments"}
                    className={`text-[15px] md:text-[17px] lg:text-[18px] mr-2 transition-all duration-100 ${
                      isActive("/userPanel/myCourseComments")
                        ? "text-[#1e1e1e] font-semibold dark:text-[white]"
                        : "text-[#848484]"
                    } ${isRtl ? "" : "ml-2"}`}
                  >
                    {t("panelside.my_view_on_the_courses")}
                  </Link>
                </motion.div>
                <motion.div
                  className="mb-2 flex items-center"
                  variants={subMenuItemVariants}
                >
                  <CircleOutlinedIcon
                    className={`text-[18px] md:text-[20px] ${
                      isActive("/userPanel/MyNewsComments")
                        ? "text-[#008C78] !text-[24px] md:!text-[26px]"
                        : "text-[#848484]"
                    }`}
                  />
                  <Link
                    to={"/userPanel/MyNewsComments"}
                    className={`text-[15px] md:text-[17px] lg:text-[18px] mr-2 transition-all duration-100 ${
                      isActive("/userPanel/MyNewsComments")
                        ? "text-[#1e1e1e] font-semibold dark:text-[white]"
                        : "text-[#848484]"
                    } ${isRtl ? "" : "ml-2"}`}
                  >
                    {t("panelside.my_view_on_the_news")}
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div className="mb-2" variants={itemVariants}>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsFavoritesOpen(!isFavoritesOpen)}
          >
            <FavoriteIcon className="text-[18px] md:text-[20px] text-[#848484]" />
            <span
              className={`text-[15px] md:text-[17px] lg:text-[18px] text-[#848484] mr-2 ${
                isRtl ? "" : "ml-2"
              }`}
            >
              {t("panelside.my_favorits")}
            </span>
            {isFavoritesOpen ? (
              <ExpandLessIcon className="text-[18px] md:text-[20px] text-[#848484] mr-2" />
            ) : (
              <ExpandMoreIcon className="text-[18px] md:text-[20px] text-[#848484] mr-2" />
            )}
          </div>

          <AnimatePresence>
            {isFavoritesOpen && (
              <motion.div
                className="flex flex-col pr-5 pt-2"
                variants={subMenuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.div
                  className="mb-2 flex items-center"
                  variants={subMenuItemVariants}
                >
                  <CircleOutlinedIcon
                    className={`text-[18px] md:text-[20px] ${
                      isActive("/userPanel/favoriteCourses")
                        ? "text-[#008C78] !text-[24px] md:!text-[26px]"
                        : "text-[#848484]"
                    }`}
                  />
                  <span
                    className={`text-[15px] md:text-[17px] lg:text-[18px] mr-2 transition-all duration-100 ${
                      isActive("/userPanel/favoriteCourses")
                        ? "text-[#1e1e1e] font-semibold dark:text-[white]"
                        : "text-[#848484]"
                    } ${isRtl ? "" : "ml-2"}`}
                  >
                    <Link to={"/userPanel/favoriteCourses"}>
                      {t("panelside.my_favorite_courses")}
                    </Link>
                  </span>
                </motion.div>
                <motion.div
                  className="mb-2 flex items-center"
                  variants={subMenuItemVariants}
                >
                  <CircleOutlinedIcon
                    className={`text-[18px] md:text-[20px] ${
                      isActive("/userPanel/favoriteNews")
                        ? "text-[#008C78] !text-[24px] md:!text-[26px]"
                        : "text-[#848484]"
                    }`}
                  />
                  <span
                    className={`text-[15px] md:text-[17px] lg:text-[18px] mr-2 transition-all duration-100 ${
                      isActive("/userPanel/favoriteNews")
                        ? "text-[#1e1e1e] font-semibold dark:text-[white]"
                        : "text-[#848484]"
                    } ${isRtl ? "" : "ml-2"}`}
                  >
                    <Link to={"/userPanel/favoriteNews"}>
                      {t("panelside.my_favorite_news")}
                    </Link>
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.p
          className="text-[#848484] text-[13px] md:text-[14px] lg:text-[15px] mb-3 mt-4"
          variants={itemVariants}
        >
          {t("panelside.general")}
        </motion.p>

        <motion.div className="flex items-center mb-2" variants={itemVariants}>
          <SecurityIcon
            className={`text-[18px] md:text-[20px] ${
              isActive("/userPanel/securitySettings")
                ? "text-[#008C78] !text-[24px] md:!text-[26px]"
                : "text-[#848484]"
            }`}
          />
          <span
            className={`text-[15px] md:text-[17px] lg:text-[18px] mr-2 transition-all duration-100 ${
              isActive("/userPanel/securitySettings")
                ? "text-[#1e1e1e] font-semibold dark:text-[white]"
                : "text-[#848484]"
            } ${isRtl ? "" : "ml-2"}`}
          >
            <Link to={"/userPanel/securitySettings"}>
              {t("panelside.security_setting")}
            </Link>
          </span>
        </motion.div>

        <motion.div className="flex items-center" variants={itemVariants}>
          <LogoutIcon className="text-[18px] md:text-[20px] text-[#848484]" />
          <span
            className={`text-[15px] md:text-[17px] lg:text-[18px] cursor-pointer text-[#848484] mr-2 ${
              isRtl ? "" : "ml-2"
            }`}
          >
            {t("panelside.logout")}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PanelRight;
