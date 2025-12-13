import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UserPanelSearch from "../../../components/common/UserPanelSearch/UserPanelSearch";
import UserPanelTitle from "../../../components/common/UserPanelTitle/UserPanelTitle";
import MyReservedCourse from "../../../components/userPanel/MyReservedCourse/MyReservedCourse";
import GetMyReservedCourses from "../../../core/services/api/get/GetMyReservedCourses";
import ReactPaginate from "react-paginate";
import { t } from "i18next";
import FavoritesSkeleton from "../../../components/common/skeleton/favorites/FavoritesSkeleton";
import Lottie from "lottie-react";
import empty from "../../../assets/Images/empty.json";

const MyReservedCourses = () => {
  const { data: myReservedCoursesData, isPending } = useQuery({
    queryKey: ["GETMYRESERVEDCOURSES"],
    queryFn: () =>
      GetMyReservedCourses({
        Query: searchQuery,
        SortType: "accept",
      }),
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("همه");

  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const reservedData = myReservedCoursesData || [];

  const filteredCourses = reservedData
    .filter((courses) => {
      const matchesTitle = courses.courseName
        .toLowerCase()
        .trim()
        .includes(searchQuery.trim().toLowerCase());

      return matchesTitle;
    })
    .sort((a, b) => {
      if (filterOption === "جدید ترین ها") {
        return new Date(b.insertDate) - new Date(a.insertDate);
      }
      return 0;
    });

  const currentCourses = filteredCourses.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const handlePageChange = (p) => {
    const selectedPage = p.selected + 1;
    setCurrentPage(selectedPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (searchTerm) => {
    setSearchQuery(searchTerm);
  };

  return (
    <div className="flex flex-col gap-5 md:gap-10 h-[85%] p-8 bg-[#F3F4F6] rounded-4xl   dark:bg-[#333333]">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center">
        <UserPanelSearch width={"md:w-[439px]"} handleSearch={handleSearch} />
        <div
          className="flex h-full items-center bg-[#ffff] dark:bg-[#454545] dark:text-[#ffff]
         rounded-xl border shadow p-2 md:p-1 border-[#EAEAEA] "
        >
          <span className="text-[16px] hidden md:inline ps-3">
            {t("coursesPayment.filters")}
          </span>
          <select
            value={filterOption}
            onChange={(e) => {
              setFilterOption(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-xl text-sm cursor-pointer  ps-2 text-gray-600   dark:bg-[#454545] dark:text-[#ffff] bg-[#ffff]"
          >
            <option value="همه">({t("favoriteNews.all")})</option>

            <option value="جدید ترین ها">
              ({t("favoriteCourses.lastUpdate")})
            </option>
          </select>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[440px] md:p-6 bg-[#FFFFFF] rounded-2xl   dark:bg-[#454545]">
        <div className="flex flex-col gap-4  relative">
          <UserPanelTitle
            titleData={{
              title1: t("myReservedCourses.title1"),
              justify1: "justify-start",
              w1: "w-64",
              title2: t("myReservedCourses.title2"),
              justify2: "justify-center",
              w2: "w-58",
              title3: t("myReservedCourses.title3"),
              justify3: "justify-center",
              w3: "w-40",
              title4: t("myReservedCourses.title4"),
              justify4: "justify-center",
              w4: "w-54",
              title5: t("myReservedCourses.title5"),
              justify5: "justify-center",
              w5: "w-28",
            }}
          />
          <div className="flex flex-col max-h-66 overflow-y-auto">
            {isPending ? (
              [...Array(coursesPerPage)].map((items, index) => (
                <FavoritesSkeleton key={index + 2} />
              ))
            ) : currentCourses.length > 0 ? (
              <div>
                {currentCourses.map((item, index) => {
                  return <MyReservedCourse item={item} key={index} />;
                })}
              </div>
            ) : (
              <div className="w-full">
                <Lottie
                  className="w-[200px] h-[170px] my-4 mx-auto"
                  animationData={empty}
                  loop={true}
                />
                <p className="font-semibold text-[black] text-[20px] text-center dark:text-[#848484]">
                  {t("navbar.notfound")}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            previousLabel="< "
            onPageChange={handlePageChange}
            pageCount={totalPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            forcePage={currentPage - 1}
            containerClassName="flex flex-wrap justify-center gap-1 sm:gap-2"
            pageClassName="px-3 py-2 sm:px-5 sm:py-3 rounded-[15px] font-semibold shadow-md cursor-pointer text-sm sm:text-xl bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
            activeClassName="!bg-[#008C78] text-white rounded-2xl shadow-md"
            previousClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
            nextClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
            previousLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
            nextLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
          />
          <div className="flex items-center dark:bg-[#454545] dark:text-[#ffff] rounded-xl border shadow-md p-1 border-[#EAEAEA] ">
            <span className="text-[16px] hidden md:inline">
              {t("favoriteNews.NumberShows")}
            </span>
            <select
              value={coursesPerPage}
              onChange={(e) => {
                setCoursesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className=" rounded-xl text-sm cursor-pointer px-3 py-1 dark:bg-[#454545] dark:text-[#ffff]"
            >
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={6}>6</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReservedCourses;
