import React from "react";
import { useTranslation } from "react-i18next";

const TranslateButton = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language || "fa";

  const toggleLanguage = () => {
    const newLang = currentLang === "fa" ? "en" : "fa";

    i18n.changeLanguage(newLang);

    document.body.classList.remove("rtl", "ltr");
    document.body.classList.add(newLang === "fa" ? "rtl" : "ltr");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-[#008C78]  text-white rounded-full transition-all duration-300  cursor-pointer"
    >
      {currentLang === "fa" ? "English" : "فارسی"}
    </button>
  );
};

export default TranslateButton;
