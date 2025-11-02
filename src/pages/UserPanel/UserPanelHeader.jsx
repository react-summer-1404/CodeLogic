import React, { useState } from "react";
import img1 from "../../assets/Images/panelnavbar.png";
import { useTheme } from "../../utils/hooks/useTheme/useTheme";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";
import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TranslateButton from "../../components/TranslateButton/TranslateButton";
import UserPanelRight from "./UserPanelRight";

const headerVariants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const UserPanelHeader = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        className="relative w-[100%] h-[8.59%] min-h-[8.59%] flex justify-between items-center bg-[#F3F4F6] rounded-3xl px-[2%] py-10 dark:bg-[#333]"
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="flex items-center gap-5" variants={itemVariants}>
          <img src={img1} alt="user" className="object-contain rounded-full" />
          <div className="flex flex-col">
            <p className="text-[20px] text-black dark:text-[#848484]">
              {t("panelheader.name")}
            </p>
          </div>
        </motion.div>

        <div className="flex items-center gap-6">
          <motion.div variants={itemVariants}>
            <TranslateButton />
          </motion.div>

          <motion.button
            variants={itemVariants}
            onClick={toggleTheme}
            className={`text-[18px] p-2 rounded-full cursor-pointer ${
              isDark ? "bg-[#FFDF9B]" : "bg-[#008C78]"
            }`}
          >
            {isDark ? (
              <Brightness7RoundedIcon className="text-[#F8B524] !text-3xl" />
            ) : (
              <BedtimeRoundedIcon className="text-[white] !text-3xl" />
            )}
          </motion.button>

          <motion.div
            variants={itemVariants}
            className="bg-[#008C78] rounded-full p-2 cursor-pointer flex"
          >
            <HomeRoundedIcon className="text-[white] !text-3xl" />
          </motion.div>

          <motion.button
            onClick={() => setMenuOpen(true)}
            className="block md:hidden bg-[#008C78] p-2 rounded-full"
          >
            <MenuRoundedIcon className="text-white !text-3xl" />
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 right-0 w-[70%] h-full bg-[#F3F4F6] dark:bg-[#333] z-999 shadow-lg md:hidden overflow-y-auto"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 left-5 bg-[#008C78] text-white p-2 rounded-full z-10"
        >
          ✕
        </button>

        <div className="pt-20 h-full">
          <UserPanelRight isMobileMenu={true} />
        </div>
      </motion.div>
    </>
  );
};

export default UserPanelHeader;
