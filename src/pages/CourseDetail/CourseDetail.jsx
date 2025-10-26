import React from 'react'
import CourseDetailSide from '../../components/course/CourseDetailSide/CourseDetailSide'
import CourseDetailMain from '../../components/course/CourseDetailMain/CourseDetailMain'
import { useTranslation } from 'react-i18next'


const CourseDetail = () => {

  const { t } = useTranslation();

  return (
    <div className='dark:bg-[#1E1E1E]'>
      <div className='flex flex-col items-center pt-10'>
        <h2 className='font-bold text-[28px] text-[#1E1E1E]   dark:text-[#EEEEEE]'>{t(`دوره آموزش جامع ${'HTML5'}`)}</h2>
      </div>
      <div className='flex flex-col items-center gap-12 pt-8 px-6 pb-[170px]
      md:flex md:flex-row md:px-10'>
        <CourseDetailSide />
        <CourseDetailMain />
      </div>
    </div>
  )
}

export default CourseDetail