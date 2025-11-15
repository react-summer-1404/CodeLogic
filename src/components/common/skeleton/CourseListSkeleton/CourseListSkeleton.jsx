import React, { useEffect, useState } from "react";
import CourseListSide from "../../../course/CourseListSide/CourseListSide";
import CourseListMain from "../../../course/CourseListMain/CourseListMain";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import GetAllCourses from "../../../../core/services/api/get/GetAllCourses";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DEFAULT_SORT_TYPE = "DESC";

const CourseList = () => {
  const [sortingCol, setSortingCol] = useState(DEFAULT_SORT_TYPE);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchSubmit = (searchTerm) => {
    setSearchQuery(searchTerm);
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleSetStartDate = (startDate) => {
    setStartDate(startDate);
  };
  const handleSetEndDate = (endDate) => {
    setEndDate(endDate);
  };

  const [courseLevel, setCourseLevel] = useState();
  const handleSetCourseLevel = (courseLevel) => {
    setCourseLevel(courseLevel);
  };

  const [teachers, setTeachers] = useState("");
  const handleSetTeachers = (teachers) => {
    setTeachers(teachers);
  };

  const [technologies, setTechnologies] = useState("");
  const handleSetTechnologies = (technologies) => {
    setTechnologies(technologies);
  };

  const [price, setPrice] = useState([0, 10000]);
  const handleSetPrice = (price) => {
    console.log(price);
    setPrice(price);
  };

  const { data: coursesData, isLoading } = useQuery({
    queryKey: [
      "GETALLCOURSES",
      searchQuery,
      pageSize,
      currentPage,
      sortingCol,
      startDate,
      endDate,
      courseLevel,
      teachers,
      technologies,
      price,
    ],
    queryFn: () =>
      GetAllCourses({
        RowsOfPage: pageSize,
        PageNumber: currentPage,
        Query: searchQuery,
        SortType: "startTime",
        StartDate: startDate,
        EndDate: endDate,
        courseLevelId: courseLevel,
        teacherName: teachers,
        technologyList: technologies,
        CostDown: price[0],
        CostUp: price[1],
      }),
  });

  let result = coursesData?.totalCount;

  const { t } = useTranslation();

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search") || "";
    setSearchQuery(search);
  }, [location.search]);

  return (
    <div className="flex flex-col items-center w-full dark:bg-[#1E1E1E]">
      <div className="flex flex-col items-center gap-2 pt-10 md:flex md:flex-row">
        {isLoading ? (
          <>
            <Skeleton width={280} height={40} />
            <Skeleton width={120} height={24} />
          </>
        ) : (
          <>
            <h2 className="font-bold text-[32px] text-[#1E1E1E] dark:text-[#EEEEEE]">
              {t("courseList.title")}
            </h2>
            <span className="font-regular text-base text-[#848484] dark:text-[#DDDDDD]">
              {`${result} ${t("courseList.result")}`}
            </span>
          </>
        )}
      </div>

      <div className="flex flex-col items-center gap-4 w-full pt-8 px-10 md:flex md:flex-row md:items-start md:gap-8">
        {isLoading ? (
          <div className="w-full md:w-80 lg:w-96 space-y-6">
            <Skeleton height={48} />
            <Skeleton height={48} />
            <Skeleton height={48} />
            <Skeleton height={120} />
            <Skeleton height={80} />
            <Skeleton height={80} />
            <Skeleton height={48} />
          </div>
        ) : (
          <CourseListSide
            handleSearchSubmit={handleSearchSubmit}
            handleSetStartDate={handleSetStartDate}
            handleSetEndDate={handleSetEndDate}
            handleSetCourseLevel={handleSetCourseLevel}
            handleSetTeachers={handleSetTeachers}
            handleSetTechnologies={handleSetTechnologies}
            handleSetPrice={handleSetPrice}
          />
        )}

        {isLoading ? (
          <div className="flex-1 space-y-6 w-full">
            {[...Array(pageSize)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <Skeleton height={180} className="mb-4" />
                <Skeleton height={28} width="80%" className="mb-2" />
                <Skeleton height={20} width="60%" className="mb-3" />
                <div className="flex justify-between items-center">
                  <Skeleton height={20} width={80} />
                  <Skeleton height={36} width={100} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CourseListMain
            coursesData={coursesData}
            isLoading={isLoading}
            searchQuery={searchQuery}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setSortingCol={setSortingCol}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
        )}
      </div>
    </div>
  );
};

export default CourseList;