import React, { useState } from 'react'
import CourseListSide from '../../components/course/CourseListSide/CourseListSide'
import CourseListMain from '../../components/course/CourseListMain/CourseListMain'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import GetAllCourses from '../../core/services/api/Get/GetAllCourses'


const DEFAULT_SORT_TYPE = 'DESC';


const CourseList = () => {


  const [startDate , setStartDate] = useState(null);
  const [endDate , setEndDate] = useState(null)


  const [sortingCol, setSortingCol] = useState(DEFAULT_SORT_TYPE);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchSubmit = (searchTerm) => {
    setSearchQuery(searchTerm);
  };
  

  const handleSetStartDate = (startValue) => {
    setStartDate(startValue)
  }
  const handleSetEndDate = (endValue) => {
    setEndDate(endValue)
  }


  const [courseLevel , setCourseLevel] = useState()
  const handleSetCourseLevel = (courseLevel) => {
    setCourseLevel(courseLevel)
  }


  
  const { data: coursesData, isLoading } = useQuery({ 
    queryKey: ['GETALLCOURSES', searchQuery, pageSize, currentPage, sortingCol, startDate, endDate, courseLevel], 
    queryFn: () => GetAllCourses({ RowsOfPage: pageSize, PageNumber: currentPage, Query: searchQuery, SortType: "startTime",
      // StartDate: startDate, EndDate: endDate
      courseLevelId: courseLevel    
    }) 
  })
  
  
  let result = coursesData?.totalCount;
  
  const {t} = useTranslation();


  return (
    <div className='flex flex-col items-center w-full   dark:bg-[#1E1E1E]'>
      <div className='flex flex-col items-center gap-2 pt-10
      md:flex md:flex-row'>
        <h2 className='font-bold text-[32px] text-[#1E1E1E]   dark:text-[#EEEEEE]'>{t('courseList.title')}</h2>
        <span className='font-regular text-base text-[#848484]   dark:text-[#DDDDDD]'>{`${result} ${t('courseList.result')}`}</span>
      </div>
      <div className='flex flex-col items-center gap-4 w-full pt-8 px-10 
      md:flex md:flex-row md:items-start md:gap-8'>
        <CourseListSide handleSearchSubmit={handleSearchSubmit} 
        handleSetStartDate={handleSetStartDate} handleSetEndDate={handleSetEndDate}
        handleSetCourseLevel={handleSetCourseLevel}/>
        <CourseListMain coursesData={coursesData} isLoading={isLoading} searchQuery={searchQuery}
        currentPage={currentPage} setCurrentPage={setCurrentPage} setSortingCol={setSortingCol}
        pageSize={pageSize} setPageSize={setPageSize}/>
      </div>
    </div>
  )
}

export default CourseList