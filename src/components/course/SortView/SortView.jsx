// import React from 'react'
// import { useTranslation } from 'react-i18next'
// import TimeDropDown from '../TimeDropDown/TimeDropDown';
// import ShowNumberDropDown from '../ShowNumberDropDown/ShowNumberDropDown';
// import CourseListView1 from '../../../assets/Icons/CourseListView1'
// import CourseListView2 from '../../../assets/Icons/CourseListView2'

// const VIEW_TYPE_LIST = 'list';
// const VIEW_TYPE_GRID = 'grid';

// const SortView = ({onViewChange, currentView, currentPageSize, onPageSizeChange, currentSortType, sortType, setSortType}) => {

//   const { t } = useTranslation();

//   const handleViewChange = (viewType) => {
//     if (viewType !== currentView && onViewChange) {
//       onViewChange(viewType);
//     }
//   };

//   return (
//     <div className='flex justify-between items-center bg-[#FFFFFF] w-full h-14 px-4 rounded-[12px]   dark:bg-[#454545]
//     sm:w-[520px]
//     lg:w-[720px] lg:h-18 lg:rounded-[15px]
//     xl:w-[1044px]'>
//       <div className='flex items-center gap-1 w-full
//       md:gap-4'>
//         <span className='hidden font-regular text-base text-[#1E1E1E]   dark:text-[#DDDDDD]
//         sm:block'>
//           {t('sortView.title')}
//         </span>
//         <TimeDropDown currentSortType={currentSortType} sortType={sortType} setSortType={setSortType}/>
//         <ShowNumberDropDown currentPageSize={currentPageSize} onPageSizeChange={onPageSizeChange}/>
//       </div>
//       <div className='flex gap-1   dark:text-[#CCCCCC]
//       md:gap-4'>
//         <button
//         onClick={() => { handleViewChange(VIEW_TYPE_LIST) }}
//         className={`hidden p-2 rounded-[48px]
//         sm:block
//         ${currentView === VIEW_TYPE_LIST ? 'text-[#FFFFFF] bg-[#008C78]' : ''}`}>
//           <CourseListView2 />
//         </button>
//         <button
//         onClick={() => { handleViewChange(VIEW_TYPE_GRID) }}
//         className={`hidden p-2 rounded-[48px]
//         sm:block
//         ${currentView === VIEW_TYPE_GRID ? 'text-[#FFFFFF] bg-[#008C78]' : ''}`}>
//           <CourseListView1 />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default SortView
import React from "react";
import { useTranslation } from "react-i18next";
import TimeDropDown from "../TimeDropDown/TimeDropDown";
import ShowNumberDropDown from "../ShowNumberDropDown/ShowNumberDropDown";
import CourseListView1 from "../../../assets/Icons/CourseListView1";
import CourseListView2 from "../../../assets/Icons/CourseListView2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VIEW_TYPE_LIST = "list";
const VIEW_TYPE_GRID = "grid";

const SortView = ({
  onViewChange,
  currentView,
  currentPageSize,
  onPageSizeChange,
  currentSortType,
  sortType,
  setSortType,
  isLoading,
}) => {
  const { t } = useTranslation();

  const handleViewChange = (viewType) => {
    if (viewType !== currentView && onViewChange) {
      onViewChange(viewType);
    }
  };

  return (
    <div
      className="flex justify-between items-center bg-[#FFFFFF] w-full h-14 px-4 rounded-[12px] dark:bg-[#454545]  
    sm:w-[520px]
    lg:w-[720px] lg:h-18 lg:rounded-[15px]
    xl:w-[1044px]"
    >
      {isLoading ? (
        <div className="flex items-center gap-4 w-full">
          <Skeleton width={100} height={20} className="hidden sm:block" />

          <Skeleton width={120} height={36} className="rounded-xl" />

          <Skeleton width={120} height={36} className="rounded-xl" />

          <div className="flex gap-4 absolute left-50">
            <Skeleton circle width={36} height={36} />
            <Skeleton circle width={36} height={36} />
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-1 w-full md:gap-4">
            <span className="hidden font-regular text-base text-[#1E1E1E] dark:text-[#DDDDDD] sm:block">
              {t("sortView.title")}
            </span>
            <TimeDropDown
              currentSortType={currentSortType}
              sortType={sortType}
              setSortType={setSortType}
            />
            <ShowNumberDropDown
              currentPageSize={currentPageSize}
              onPageSizeChange={onPageSizeChange}
            />
          </div>
          <div className="flex gap-1 dark:text-[#CCCCCC] md:gap-4">
            <button
              onClick={() => {
                handleViewChange(VIEW_TYPE_LIST);
              }}
              className={`hidden p-2 rounded-[48px] sm:block ${
                currentView === VIEW_TYPE_LIST
                  ? "text-[#FFFFFF] bg-[#008C78]"
                  : ""
              }`}
            >
              <CourseListView2 />
            </button>
            <button
              onClick={() => {
                handleViewChange(VIEW_TYPE_GRID);
              }}
              className={`hidden p-2 rounded-[48px] sm:block ${
                currentView === VIEW_TYPE_GRID
                  ? "text-[#FFFFFF] bg-[#008C78]"
                  : ""
              }`}
            >
              <CourseListView1 />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SortView;
