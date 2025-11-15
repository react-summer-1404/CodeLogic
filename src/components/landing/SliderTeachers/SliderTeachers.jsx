import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import GetAllTeachers from "../../../core/services/api/Get/GetAllTeachers";
import ButtonsSeeMore from "../../common/ButtonsSeeMore/ButtonsSeeMore";
import SliderTeacher from "../SliderTeacher/SliderTeacher";
import { Link } from "react-router-dom";

const SliderTeachers = () => {
  const { t } = useTranslation();

  const { data: teachersData, isLoading } = useQuery({
    queryKey: ["GETALLTEACHERS"],
    queryFn: () => GetAllTeachers(),
  });

  const sliderRef = useRef();

  return (
    <div className="flex flex-col items-between gap-8 w-full">
      <div className="flex flex-col items-center gap-2 pt-[163px]">
        <h2
          className="font-bold text-[#008C78]
        sa:text-[24px]   sm:text-[28px]   lg:text-[32px]"
        >
          {t("sliderTeachers.title")}
        </h2>
        <p
          className="font-regular   dark:text-[#DDDDDD]
        sa:text-sm   sm:text-lg   lg:text-2xl"
        >
          {t("sliderTeachers.desc")}
        </p>
      </div>
      <Link to={'teachers'}>
        <ButtonsSeeMore
          seeAllText={t("sliderTeachers.seeAllText")}
          sliderRef={sliderRef}
        />
      </Link>
      <div
        className="flex flex-nowrap gap-5 overflow-hidden w-full pt-8 pb-2 px-10 scroll-smooth scrollbar-hide"
        dir="ltr"
        ref={sliderRef}
      >
        {teachersData?.map((item, index) => {
          return <SliderTeacher item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SliderTeachers;
