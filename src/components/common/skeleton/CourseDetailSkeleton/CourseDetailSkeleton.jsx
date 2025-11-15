import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CourseDetailSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#e5e7eb" highlightColor="#f3f4f6">
      <div className="dark:bg-[#1E1E1E]">
        <div className="flex flex-col items-center pt-10">
          <h2 className="font-bold text-[28px] text-[#1E1E1E]  dark:text-[#EEEEEE]">
            <Skeleton width={300} height={36} />
          </h2>
        </div>
        <div
          className="flex flex-col gap-12 pt-8 px-6 pb-[170px]
      md:flex md:flex-row md:px-10"
        >
          <div className="w-full md:w-80">
            <Skeleton height={500} />
          </div>
          <div className="flex-1 w-full">
            <div className="space-y-6">
              <Skeleton height={300} />
              <Skeleton height={60} />
              <Skeleton height={100} />
              <Skeleton height={40} width="40%" />
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default CourseDetailSkeleton;