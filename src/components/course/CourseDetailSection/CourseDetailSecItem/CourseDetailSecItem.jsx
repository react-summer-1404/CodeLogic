import React from 'react'
import { useTranslation } from 'react-i18next'


const CourseDetailSecItem = ({item}) => {

  const {t} = useTranslation();

  return (
    <div className='flex flex-col justify-center items-center gap-2 w-full h-[81px] mt-4 bg-[#FFFFFF] rounded-[20px]
    dark:bg-[#393939]
    md:w-[160px]
    lg:w-[186px]'>
      <span className='font-regular text-xs text-[#848484]   dark:text-[#DDDDDD]'>{t(`${item.title}`)}</span>
      <div className='flex flex-col items-center'>
        <span className='dark:text-[#BBBBBB]'>
          <item.icon/>
        </span>
        <span>{item.courseNumber}</span>
      </div>
    </div>
  )
}

export default CourseDetailSecItem