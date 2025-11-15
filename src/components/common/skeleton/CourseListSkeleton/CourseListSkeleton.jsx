import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CourseListSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#e5e7eb" highlightColor="#f3f4f6">
      <div className="flex flex-col items-center w-full   dark:bg-[#1E1E1E]">
        <div
          className="flex flex-col items-center gap-2 pt-10
      md:flex md:flex-row"
        >
          <h2 className="font-bold text-[32px] text-[#1E1E1E]   dark:text-[#EEEEEE]">
            <Skeleton width={180} height={40} />
          </h2>
          <span className="font-regular text-base text-[#848484]   dark:text-[#DDDDDD]">
            <Skeleton width={120} height={20} />
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-4 w-full pt-8 px-10 
      md:flex md:flex-row md:items-start md:gap-8"
        >
          <div className="w-full md:w-80">
            <Skeleton height={56} />
            <Skeleton height={56} />
            <Skeleton height={56} />
            <Skeleton height={56} />
            <Skeleton height={56} />
            <Skeleton height={56} />
          </div>
          <div className="flex-1 w-full">
            <Skeleton height={64}/>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default CourseListSkeleton;