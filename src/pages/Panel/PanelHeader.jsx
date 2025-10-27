import React from "react";
import img1 from "../../assets/Images/panelnavbar.png";
import { useTheme } from "../../utils/hooks/useTheme/useTheme";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";
import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TranslateButton from "../../components/TranslateButton/TranslateButton";

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

const PanelHeader = () => {
  const { t } = useTranslation();

  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      className="relative w-[100%] h-[8.59%] min-h-[8.59%] flex justify-between items-center bg-[#F3F4F6] rounded-3xl px-[2%] py-10 dark:bg-[#333] "
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="flex items-center gap-5" variants={itemVariants}>
        <img src={img1} alt="user" className="  object-contain rounded-full" />
        <div className="flex flex-col">
          <p className="text-[20px]  text-black dark:text-[#848484]">
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
          className={`text-[18px] p-2  rounded-full cursor-pointer  ${
            isDark ? "bg-[#FFDF9B]" : "bg-[#008C78]"
          }  `}
        >
          {isDark ? (
            <Brightness7RoundedIcon className="text-[#F8B524] !text-3xl" />
          ) : (
            <BedtimeRoundedIcon className="text-[white] !text-3xl" />
          )}
        </motion.button>

        <motion.div
          variants={itemVariants}
          className="bg-[#008C78] rounded-full p-2 cursor-pointer"
        >
          <HomeRoundedIcon className="text-[white] !text-3xl  " />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PanelHeader;
