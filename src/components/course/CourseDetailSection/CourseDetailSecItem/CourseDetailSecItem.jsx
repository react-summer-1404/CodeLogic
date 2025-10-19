import React from 'react'
import { useTranslation } from 'react-i18next'


const CourseDetailSecItem = ({item}) => {

  const {t} = useTranslation();

  return (
    <div className='flex flex-col justify-center items-center gap-2  w-[186px] h-[81px] bg-[#FFFFFF] rounded-[20px]'>
      <span className='font-regular text-xs text-[#848484]'>{t(`${item.title}`)}</span>
      <div>
        <item.icon/>
        <span></span>
      </div>
    </div>
  )
}

export default CourseDetailSecItem