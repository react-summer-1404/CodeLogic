import React from "react";
import Select from "react-select";

const SelectComp = ({ placeholder = "انتخاب کنید...", isRtl = true }) => {
  const options = [
    { value: "news", label: isRtl ? "اخبار" : "News" },
    { value: "articles", label: isRtl ? "مقالات" : "Articles" },
    { value: "courses", label: isRtl ? "دوره ها" : "Courses" },
  ];

  return (
    <div className={` ${isRtl ? "text-right" : "text-left"}`}>
      <Select
        defaultValue={options[2]}
        options={options}
        isClearable
        placeholder={placeholder}
        classNamePrefix="courses"
        styles={{
          control: (provided) => ({
            ...provided,
            direction: isRtl ? "rtl" : "ltr",
            textAlign: isRtl ? "right" : "left",
          }),
          menu: (provided) => ({
            ...provided,
            direction: isRtl ? "rtl" : "ltr",
            textAlign: isRtl ? "right" : "left",
          }),
        }}
      />
    </div>
  );
};

export default SelectComp;
