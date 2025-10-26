import React from 'react'
import { useTranslation } from 'react-i18next'


const CourseDesc = () => {

    const {t} = useTranslation();

  return (
    <div className='flex flex-col gap-2 pt-10'>
        <h3 className='font-bold text-[18px] text-[#1E1E1E]   dark:text-[#DDDDDD]'>{t('courseDesc.description')}</h3>
        <p className='font-regular text-base text-[#848484]   dark:text-[#CCCCCC]'>{t('loream ispum...')}</p>
    </div>
  )
}

export default CourseDesc