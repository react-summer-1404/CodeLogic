import React from 'react'
import { useTranslation } from 'react-i18next'


const CourseDetailSecItem = ({item}) => {

  const {t} = useTranslation();

  return (
    <div className='flex flex-col justify-center items-center gap-2  w-[186px] h-[81px] bg-[#FFFFFF] rounded-[20px]
    dark:bg-[#393939]'>
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