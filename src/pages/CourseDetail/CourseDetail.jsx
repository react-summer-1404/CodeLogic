import React from 'react'
import CourseDetailSide from '../../components/course/CourseDetailSide/CourseDetailSide'
import CourseDetailMain from '../../components/course/CourseDetailMain/CourseDetailMain'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import GetAllCourses from '../../core/services/api/Get/GetAllCourses'


const CourseDetail = () => {

  const { t } = useTranslation();

  const { id } = useParams();
  const { data: coursesData, isLoading } = useQuery({ 
    queryKey: ['GETALLCOURSES'], 
    queryFn: () => GetAllCourses() 
  })
  const courses = coursesData.find((item) => item.id === id)

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