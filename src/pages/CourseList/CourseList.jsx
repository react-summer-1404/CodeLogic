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
      <div className='flex items-center gap-2 pt-10'>
        <h2 className='font-bold text-[32px] text-[#1E1E1E]   dark:text-[#EEEEEE]'>{t('دوره های آموزشی')}</h2>
        <span className='font-regular text-base text-[#848484]   dark:text-[#DDDDDD]'>{t(`(${result}نتیجه)`)}</span>
      </div>
      <div className='flex justify-center gap-8 w-full pt-8 px-10'>
        <CourseListSide handleSearchSubmit={handleSearchSubmit}/>
        <CourseListMain searchQuery={searchQuery}/>
      </div>
    </div>
  )
}

export default CourseList