import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const DashboardLatestNews = ({ image, title, date, id }) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

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

  return (
    <motion.div
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={` w-[90%] h-[20%] px-2  flex flex-row justify-between items-center mb-4 mx-auto rounded-3xl shadow-[0px_0px_1px_1px_#EAEAEA] cursor-pointer duration-300  hover:shadow-[0px_0px_10px_1px_#008c78] dark:bg-[#454545] dark:shadow-[0px_0px_1px_1px_#848484]  `}
    >
      <motion.img
        variants={itemVariants}
        className={` object-fill w-[20%] h-[90%] rounded-3xl ml-4 ${
          isRtl ? "" : "mr-4 "
        } `}
        src={image}
      />

      <div className="w-full flex flex-wrap ">
        <Link to={`/news/${id}`}>
          <motion.p
            variants={itemVariants}
            className="font-semibold text-[16px] text-[#1E1E1E] dark:text-[white] "
          >
            {title}
          </motion.p>
        </Link>

        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center w-full mt-3  "
        >
          <p className="text-[#1e1e1e] text-[16px] dark:text-[#848484]">
            <span>{date}</span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashboardLatestNews;
