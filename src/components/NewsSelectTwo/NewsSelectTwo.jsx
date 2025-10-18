import React from "react";
import Select from "react-select";
import { useTheme } from "../useTheme/useTheme";

const NewsSelectOne = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const options = [
    { value: "newest", label: "جدیدترین‌ها" },
    { value: "oldest", label: "قدیمی‌ترین‌ها" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: "1px solid #EAEAEA",
      boxShadow: state.isFocused ? "0 0 0 1px #008C78" : "none",
      "&:hover": { borderColor: "#EAEAEA" },
      borderRadius: "0.8rem",
      backgroundColor: isDark ? "#333" : "white",
      minHeight: "40px",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: isDark ? "white" : "#848484",
      fontSize: "15px",
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
    <div className="w-35">
      <Select
        options={options}
        styles={customStyles}
        defaultValue={options[0]}
        className="text-sm"
        classNamePrefix="react-select"
        isSearchable={false}
      />
    </div>
  );
};

export default NewsSelectOne;
