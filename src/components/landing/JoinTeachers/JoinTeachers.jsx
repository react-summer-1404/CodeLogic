import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TextImage from "../../common/TextImage/TextImage";
import Talking from "../../../assets/Images/talking.svg";

const JoinTeachers = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, viewport: 0.5 }}
      transition={{
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        duration: 250,
        delay: 0.4,
      }}
      className="pt-[58px]"
    >
      <TextImage
        title1={t("joinTeachers.title1")}
        titleSpan={t("joinTeachers.titleSpan")}
        title2={t("joinTeachers.title2")}
        desc={t("joinTeachers.desc")}
        buttonText={t("joinTeachers.buttonText")}
        img={Talking}
        bg={"#F3F4F6"}
      />
    </motion.div>
  );
};

export default JoinTeachers;
