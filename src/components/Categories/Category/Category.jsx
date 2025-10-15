import React from 'react'
import { useTranslation } from 'react-i18next';

const Category = ({item}) => {

  const {t} = useTranslation();

  const CategoryIcon = item.icon;

  return (
    <div className='flex flex-col items-center gap-2 px-4 py-8 bg-[#FFFFFF] rounded-2xl   
    hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
      <CategoryIcon/>  
      <h2 className='font-bold text-base'>{t(`${item.title}`)}</h2>
      <p className='max-w-[287px] font-regular text-sm text-center leading-6'>{t(`${item.desc}`)}</p>
    </div>
  )
}

export default Category