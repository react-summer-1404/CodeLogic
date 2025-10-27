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

const PanelRight = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  const location = useLocation();
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <motion.div
      className=" w-[22.37%] h-screen flex items-center justify-between  "
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className=" bg-[#F3F4F6] h-[93.75%]  w-[100%]  rounded-4xl px-6  py-6 dark:bg-[#333] ">
        <motion.div className="flex gap-4 mb-3" variants={itemVariants}>
          <img src={img1} alt="لوگوی آکادمی بحر" />
          <h1
            className={`    text-[#1E1E1E] font-bold text-[24px] mt-2 dark:text-[white]  `}
          >
            {t("panelside.academy_name")}
          </h1>
        </motion.div>

        <motion.p
          className="text-[#848484] text-[16px] mb-2 "
          variants={itemVariants}
        >
          {t("panelside.menu")}
        </motion.p>

        <Link to="/Panel">
          <motion.div className={`mb-4 rounded-4xl`} variants={itemVariants}>
            <MenuIcon
              className={`text-[20px] ${
                isActive("/Panel")
                  ? "text-[#008C78]  !text-[30px]  "
                  : "text-[#848484]"
              }`}
            />
            <span
              className={`text-[20px]  mr-2  transition-all duration-100 ${
                isActive("/Panel")
                  ? "text-[#1e1e1e]  font-semibold dark:text-[white]  "
                  : "text-[#848484]"
              }
               ${isRtl ? "" : "ml-2 "}
              `}
            >
              {t("panelside.dashboard")}
            </span>
          </motion.div>
        </Link>

        <Link to="/Panel/UserInfo">
          <motion.div className={`mb-4`} variants={itemVariants}>
            <PersonIcon
              className={`text-[20px] ${
                isActive("/Panel/UserInfo")
                  ? "text-[#008C78]  !text-[30px] "
                  : "text-[#848484]"
              }`}
            />
            <span
              className={`text-[20px]  mr-2  transition-all duration-100 ${
                isActive("/Panel/UserInfo")
                  ? "text-[#1e1e1e]  font-semibold dark:text-[white]  "
                  : "text-[#848484]"
              }
                 ${isRtl ? "" : "ml-2 "}
              `}
            >
              {t("panelside.user_info")}
            </span>
          </motion.div>
        </Link>

        <motion.div className="mb-4" variants={itemVariants}>
          <MenuBookIcon className="text-[20px] text-[#848484]  " />
          <span
            className={`  text-[20px] text-[#848484] mr-2    ${
              isRtl ? "" : "ml-3 "
            }  `}
          >
            {t("panelside.my_courses")}{" "}
          </span>
        </motion.div>
        <motion.div className="mb-4" variants={itemVariants}>
          <BookmarkIcon className="text-[20px] text-[#848484]  " />
          <span
            className={`text-[20px] text-[#848484] mr-2    ${
              isRtl ? "" : "ml-2 "
            } `}
          >
            {" "}
            {t("panelside.reserved_courses")}
          </span>
        </motion.div>
        <motion.div className="mb-4" variants={itemVariants}>
          <WalletIcon className="text-[20px] text-[#848484]  " />
          <span
            className={`text-[20px] text-[#848484] mr-2     ${
              isRtl ? "" : "ml-2 "
            } `}
          >
            {" "}
            {t("panelside.my_payments")}
          </span>
        </motion.div>

        <motion.div className="mb-4" variants={itemVariants}>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsCommentsOpen(!isCommentsOpen)}
          >
            <ChatBubbleIcon className="text-[20px] text-[#848484]  " />
            <span
              className={` text-[20px] text-[#848484] mr-2    ${
                isRtl ? "" : "ml-2 "
              } `}
            >
              {" "}
              {t("panelside.my_comments")}
            </span>
            {isCommentsOpen ? (
              <ExpandLessIcon className="text-[20px] text-[#848484] mr-2 " />
            ) : (
              <ExpandMoreIcon className="text-[20px] text-[#848484] mr-2 " />
            )}
          </div>

          <AnimatePresence>
            {isCommentsOpen && (
              <motion.div
                className="flex flex-col pr-8 pt-2"
                variants={subMenuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.div
                  className="mb-2 flex items-center"
                  variants={subMenuItemVariants}
                >
                  <CircleOutlinedIcon className="text-[16px] text-[#848484] ml-2" />
                  <span
                    className={` text-[18px] text-[#848484]    ${
                      isRtl ? "" : "ml-2 "
                    } `}
                  >
                    {t("panelside.my_view_on_the_courses")}
                  </span>
                </motion.div>

                <motion.div
                  className="mb-2 flex items-center"
                  variants={subMenuItemVariants}
                >
                  <CircleOutlinedIcon className="text-[16px] text-[#848484] ml-2" />
                  <span
                    className={` text-[18px] text-[#848484]    ${
                      isRtl ? "" : "ml-2 "
                    } `}
                  >
                    {t("panelside.my_view_on_the_news")}
                  </span>
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
            <FavoriteIcon className="text-[20px] text-[#848484]  " />
            <span
              className={` text-[20px] text-[#848484] mr-2    ${
                isRtl ? "" : "ml-2 "
              } `}
            >
              {" "}
              {t("panelside.my_favorits")}
            </span>
            {isFavoritesOpen ? (
              <ExpandLessIcon className="text-[20px] text-[#848484] mr-2 " />
            ) : (
              <ExpandMoreIcon className="text-[20px] text-[#848484] mr-2 " />
            )}
          </div>
          <AnimatePresence>
            {isFavoritesOpen && (
              <motion.div
                className="flex flex-col pr-8 pt-2"
                variants={subMenuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.div
                  className="mb-2 flex items-center"
                  variants={subMenuItemVariants}
                >
                  <CircleOutlinedIcon className="text-[16px] text-[#848484] ml-2" />
                  <span
                    className={` text-[18px] text-[#848484]    ${
                      isRtl ? "" : "ml-2 "
                    } `}
                  >
                    {t("panelside.my_favorite_courses")}
                  </span>
                </motion.div>

                <motion.div
                  className="mb-2 flex items-center"
                  variants={subMenuItemVariants}
                >
                  <CircleOutlinedIcon className="text-[16px] text-[#848484] ml-2" />
                  <span
                    className={` text-[18px] text-[#848484]    ${
                      isRtl ? "" : "ml-2 "
                    } `}
                  >
                    {t("panelside.my_favorite_news")}
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.p
          className="text-[#848484] text-[16px] mb-3 "
          variants={itemVariants}
        >
          {t("panelside.general")}
        </motion.p>

        <motion.div className="mb-2" variants={itemVariants}>
          <SecurityIcon className="text-[20px] text-[#848484]  " />
          <span
            className={` text-[20px] text-[#848484] mr-2    ${
              isRtl ? "" : "ml-2 "
            } `}
          >
            {" "}
            {t("panelside.security_setting")}
          </span>
        </motion.div>
        <motion.div variants={itemVariants}>
          <LogoutIcon className="text-[20px] text-[#848484]  " />
          <span
            className={` text-[20px] text-[#848484] mr-2    ${
              isRtl ? "" : "ml-2 "
            } `}
          >
            {" "}
            {t("panelside.logout")}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PanelRight;
