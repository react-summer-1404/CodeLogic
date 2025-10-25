import React from 'react'
import CourseCommentForm from './CourseCommentForm/CourseCommentForm'
import { useTranslation } from 'react-i18next'


const CourseComments = () => {

    const {t} = useTranslation();

  return (
    <div className='flex flex-col gap-6 mt-[20px] p-8 bg-[#FFFFFF] rounded-[25px]'>
        <h3 className='font-bold text-[18px] text-[#1E1E1E]'>{t('courseComments.title')}</h3>
        <CourseCommentForm/>
    </div>
  )
}

export default CourseComments