import React from "react";
import Select from "react-select";
import style from "./SelectComp.module.css";

const SelectComp = () => {
  const options = [
    { value: "news", label: "اخبار" },
    { value: "articles", label: "مقالات" },
    { value: "courses", label: "دوره ها" },
  ];

  return (
    <div>
      <Select
        defaultValue={options[0]}
        options={options}
        isClearable
        className={style.select}
        placeholder="انتخاب کنید..."
        classNamePrefix="courses"
      />
    </div>
  );
};

export default SelectComp;
