import React, { useState } from 'react'
import CourseListSide from '../../components/course/CourseListSide/CourseListSide'
import CourseListMain from '../../components/course/CourseListMain/CourseListMain'
import { useTranslation } from 'react-i18next'



const CourseList = () => {

  const {t} = useTranslation();

  let result = 200;

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (searchTerm) => {
    setSearchQuery(searchTerm);
  };


  return (
    
    <div className='flex flex-col items-center w-full   dark:bg-[#1E1E1E]'>
      <div className='flex flex-col items-center gap-2 pt-10
      md:flex md:flex-row'>
        <h2 className='font-bold text-[32px] text-[#1E1E1E]   dark:text-[#EEEEEE]'>{t('courseList.title')}</h2>
        <span className='font-regular text-base text-[#848484]   dark:text-[#DDDDDD]'>{t(`${result}courseList.result`)}</span>
      </div>
      <div className='flex flex-col items-center gap-4 w-full pt-8 px-10 
      md:flex md:flex-row md:items-start md:gap-8'>
        <CourseListSide handleSearchSubmit={handleSearchSubmit}/>
        <CourseListMain searchQuery={searchQuery}/>
      </div>
    </div>
  )
}

export default CourseList