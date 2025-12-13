import React, { useEffect } from "react";
import CourseDetailSide from "../../components/course/CourseDetailSide/CourseDetailSide";
import CourseDetailMain from "../../components/course/CourseDetailMain/CourseDetailMain";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getCourseById from "../../core/services/api/Get/getCourseById";
import CourseDetailSkeleton from "../../components/common/skeleton/CourseDetailSkeleton/CourseDetailSkeleton";

const CourseDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { t } = useTranslation();

  const { id } = useParams();

  const { data: courseData, isLoading } = useQuery({
    queryKey: ["GETCOURSEBYID"],
    queryFn: () => getCourseById(id),
  });

  if (isLoading) {
    return <CourseDetailSkeleton />;
  }

  if (!courseData) {
    return (
      <div className="p-10 text-center text-red-600">
        {t("دوره مورد نظر پیدا نشد.")}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center   dark:bg-[#1E1E1E]">
      <div className="flex gap-1 text-[#008C78] pt-10 font-regular text-sm">
        <Link to={"/"}>{t("courseDetailNav.landing")}</Link>
        {">"}
        <Link to={"/courseList"}>{t("courseDetailNav.courseList")}</Link>
        {">"}
        <span>{courseData.title}</span>
      </div>
      <div className="flex flex-col items-center pt-4">
        <h2 className="font-bold text-[28px] text-[#1E1E1E]  dark:text-[#EEEEEE]">
          {courseData.title}
        </h2>
      </div>
      <div
        className="flex flex-col gap-12 pt-8 px-6 pb-[170px]
      md:flex md:flex-row md:px-10"
      >
        <CourseDetailSide course={courseData} />

        <CourseDetailMain courseId={id} course={courseData} />
      </div>
    </div>
  );
};

export default CourseDetail;
