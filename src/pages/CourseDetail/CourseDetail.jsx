import React from 'react'

import CourseDetailSide from '../../components/course/CourseDetailSide/CourseDetailSide'
import CourseDetailMain from '../../components/course/CourseDetailMain/CourseDetailMain'
import { useTranslation } from 'react-i18next'


const CourseDetail = () => {

  const { t } = useTranslation();

  return (
    <div>
      <div className='flex flex-col items-center'>

        <h2 className='font-bold text-[28px] text-[#1E1E1E]'>{t(`دوره آموزش جامع ${'HTML5'}`)}</h2>
      </div>
      <div className='flex gap-12 p-10'>
        <CourseDetailSide />
        <CourseDetailMain />
      </div>
    </div>
  )
}

export default CourseDetail