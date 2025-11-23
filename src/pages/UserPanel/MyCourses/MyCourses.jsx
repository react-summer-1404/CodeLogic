import React from "react";
import UserPanelSearch from "../../../components/common/UserPanelSearch/UserPanelSearch";
import UserPanelFilter from "../../../components/common/UserPanelFilter/UserPanelFilter";
import UserPanelTitle from "../../../components/common/UserPanelTitle/UserPanelTitle";
import UserPanelShowNumber from "../../../components/common/UserPanelShowNumber/UserPanelShowNumber";
import MyCourse from "../../../components/userPanel/MyCourse/MyCourse";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import GetMyCourses from "../../../core/services/api/Get/GetMyCourses";

const MyCourses = () => {
  const { data: myCoursesData, isLoading } = useQuery({
    queryKey: ["GETMYCOURSES"],
    queryFn: () => GetMyCourses(),
  });

  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10 h-[85%] p-8 bg-[#F3F4F6] rounded-4xl   dark:bg-[#333333]">
      <div className="flex justify-between items-center">
        <UserPanelSearch width={"w-[439px]"} />
        <UserPanelFilter />
      </div>
      <div className="flex flex-col justify-between h-[440px] p-6 bg-[#FFFFFF] rounded-2xl   dark:bg-[#454545]">
        <div className="flex flex-col gap-4">
          <UserPanelTitle
            titleData={{
              title1: t("myCourses.title1"),
              justify1: "justify-start",
              w1: "w-64",
              title2: t("myCourses.title2"),
              justify2: "justify-center",
              w2: "w-50",
              title3: t("myCourses.title3"),
              justify3: "justify-center",
              w3: "w-30",
              title4: t("myCourses.title4"),
              justify4: "justify-center",
              w4: "w-36",
              title5: t("myCourses.title5"),
              justify5: "justify-center",
              w5: "w-34",
              title6: t("myCourses.title6"),
              justify6: "justify-center",
              w6: "w-32",
            }}
          />
          {myCoursesData?.listOfMyCourses.map((item, index) => {
            return <MyCourse item={item} key={index} />;
          })}
        </div>
        <div className="flex justify-between items-center">
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            previousLabel="< "
            // onPageChange={handlePageChange}
            // pageCount={pageSize}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            // forcePage={currentPage}
            containerClassName="flex flex-wrap justify-center gap-1 sm:gap-2"
            pageClassName="px-3 py-2 sm:px-5 sm:py-3 rounded-[15px] font-semibold shadow-md cursor-pointer text-sm sm:text-xl bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
            activeClassName="!bg-[#008C78] text-white rounded-2xl shadow-md"
            previousClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
            nextClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
            previousLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
            nextLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
          />
          <UserPanelShowNumber />
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
