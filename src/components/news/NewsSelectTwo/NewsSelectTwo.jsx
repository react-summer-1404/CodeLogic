import React, { useMemo } from "react";
import Select from "react-select";
import { useTheme } from "../../../utils/hooks/useTheme/useTheme";
import { useTranslation } from "react-i18next";

const NewsSelectTwo = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { t, i18n } = useTranslation();

  const options = useMemo(
    () => [
      { value: "view", label: t("NewsSelectTwo.dataone") },
      { value: "two", label: "2" },
      { value: "three", label: "3" },
      { value: "four", label: "4" },
    ],
    [i18n.language, t]
  );

  const defaultOption = useMemo(() => options[0], [options]);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: "1px solid #EAEAEA",
      boxShadow: state.isFocused ? "0 0 0 1px #008C78" : "none",
      "&:hover": { borderColor: "#EAEAEA" },

      borderRadius: "0.75rem",
      backgroundColor: isDark ? "#333" : "white",

      minHeight: "40px",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: isDark ? "white" : "#848484",

      fontSize: "0.875rem",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "0.5rem",
      boxShadow: "0 0 6px rgba(0,0,0,0.05)",
      zIndex: 10,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#F3F4F6"
        : state.isFocused
        ? "#008c7792"
        : "white",
      color: "#000000ff",
      cursor: "pointer",
      fontSize: "0.875rem",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#848484",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <div className="w-28 sm:w-32 lg:w-40 flex-shrink-0">
      <Select
        key={i18n.language}
        options={options}
        styles={customStyles}
        defaultValue={defaultOption}
        className=""
        classNamePrefix="react-select"
        isSearchable={false}
      />
    </div>
  );
};

export default NewsSelectTwo;
