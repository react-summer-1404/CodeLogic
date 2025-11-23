import { useState } from "react";
import ReactPaginate from "react-paginate";
import CourseCardView1 from "../../common/CourseCardView1/CourseCardView1";
import CourseCardView2 from "../../common/CourseCardView2/CourseCardView2";
import SortView from "../SortView/SortView";
import { addFavCourses } from "../../../core/services/api/post/addFavCourses";
import { deleteFavCourses } from "../../../core/services/api/delete/deleteFavCourses";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const VIEW_TYPE_LIST = "list";
const VIEW_TYPE_GRID = "grid";

const CourseListMain = ({coursesData, isLoading, currentPage, setCurrentPage, setSortingCol, pageSize, setPageSize}) => {

  const {t} = useTranslation()


  const [currentView, setCurrentView] = useState(() => {
    return localStorage.getItem("courseViewType") || VIEW_TYPE_GRID;
  });
  const CourseCardComponent =
    currentView === VIEW_TYPE_LIST ? CourseCardView2 : CourseCardView1;
  const handleViewChange = (courseViewType) => {
    setCurrentView(courseViewType);
    localStorage.setItem("courseViewType", courseViewType);
  };

  const [favorites, setFavorites] = useState({});
  const handleToggleFavorite = async (courseId) => {
    const isFavorite = favorites[courseId] || false;
    if (isFavorite) {
      await deleteFavCourses(courseId);
      toast.success(t('courseCard.removeFavSuccessToast'))
    } else {
      await addFavCourses(courseId);
      toast.success(t('courseCard.addFavSuccessToast'))
    }
    setFavorites((prev) => ({
      ...prev,
      [courseId]: !isFavorite,
    }));
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-8 w-full">
      <SortView
        onViewChange={handleViewChange}
        currentView={currentView}
        currentPageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        setSortingCol={setSortingCol}
      />
      <div className="flex flex-row flex-wrap gap-y-8 gap-x-4 ">
        {coursesData?.courseFilterDtos?.map((item, index) => {
          return (
            <CourseCardComponent
              item={item}
              key={index}
              handleToggleFavorite={handleToggleFavorite}
              isLoading={isLoading}
            />
          );
        })}
      </div>
      <div className="flex justify-center my-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          previousLabel="< "
          onPageChange={handlePageChange}
          pageCount={pageSize}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          forcePage={currentPage}
          containerClassName="flex flex-wrap justify-center gap-1 sm:gap-2"
          pageClassName="px-3 py-2 sm:px-5 sm:py-3 rounded-[15px] font-semibold shadow-md cursor-pointer text-sm sm:text-xl bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
          activeClassName="!bg-[#008C78] text-white rounded-2xl shadow-md"
          previousClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
          nextClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
          previousLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
          nextLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
        />
      </div>
    </div>
  );
};

export default CourseListMain;
