import React from 'react'
import { useTranslation } from 'react-i18next';

const Category = ({item}) => {

  const {t} = useTranslation();

  const CategoryIcon = item.icon;

  return (
    <div className='flex flex-col items-center gap-2 min-w-[280px] px-4 py-8 bg-[#FFFFFF] rounded-2xl snap-center   dark:bg-[#606060]
    hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
      <CategoryIcon/>  
      <h2 className='font-bold text-base   dark:text-[#EEEEEE]'>{t(`${item.title}`)}</h2>
      <p className='max-w-[287px] font-regular text-sm text-center leading-6   dark:text-[#DDDDDD]'>{t(`${item.desc}`)}</p>
    </div>
  )
}

export default Category