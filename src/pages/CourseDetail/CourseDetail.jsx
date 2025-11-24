import React, { useEffect } from "react";
import CourseDetailSide from "../../components/course/CourseDetailSide/CourseDetailSide";
import CourseDetailMain from "../../components/course/CourseDetailMain/CourseDetailMain";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import GetAllCourses from "../../core/services/api/Get/GetAllCourses";
import CourseDetailSkeleton from "../../components/common/skeleton/CourseDetailSkeleton/CourseDetailSkeleton";

const CourseDetail = () => {
  
  const { t } = useTranslation();

  const { id } = useParams();

  const { data: coursesData, isLoading } = useQuery({
    queryKey: ["GETALLCOURSES"],
    queryFn: () => GetAllCourses(),
  });

  if (isLoading) {
    return (
      <CourseDetailSkeleton/>
    );
  }

  const course = coursesData?.courseFilterDtos.find(
    (item) => item.courseId === id
  );

  if (!course) {
    return (
      <div className="p-10 text-center text-red-600">
        {t("دوره مورد نظر پیدا نشد.")}
      </div>
    );
  }


  return (
    <div className="flex flex-col items-center   dark:bg-[#1E1E1E]">
      <div className="flex gap-1 text-[#008C78] pt-10 font-regular text-sm">
        <Link to={'/'}>{t('courseDetailNav.landing')}</Link>
        {'>'}
        <Link to={'/courseList'}>{t('courseDetailNav.courseList')}</Link>
        {'>'}
        <span>{course.title}</span>
      </div>
      <div className="flex flex-col items-center pt-4">
        <h2 className="font-bold text-[28px] text-[#1E1E1E]  dark:text-[#EEEEEE]">
          {course.title}
        </h2>
      </div>
      <div
        className="flex flex-col gap-12 pt-8 px-6 pb-[170px]
      md:flex md:flex-row md:px-10"
      >
        <CourseDetailSide course={course}/>
        <CourseDetailMain course={course}/>
      </div>
    </div>
  );
};

export default CourseDetail;
