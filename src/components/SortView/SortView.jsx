import React from 'react'
import { useTranslation } from 'react-i18next'
import TimeDropDown from '../TimeDropDown/TimeDropDown';
import ShowNumberDropDown from '../ShowNumberDropDown/ShowNumberDropDown';



const SortView = () => {

    const {t} = useTranslation();

  return (
    <div className='flex justify-between items-center w-[1104px] h-18 px-4 bg-[#FFFFFF] rounded-[15px]'>
      <div className='flex items-center gap-4'>
        <span className='font-regular text-base text-[#1E1E1E]'>{t('مرتب سازی بر اساس :')}</span>
        <TimeDropDown/>
        <ShowNumberDropDown/>
      </div>
      <div>
        <button></button>
        <button></button>
      </div>
    </div>
  )
}

export default SortView