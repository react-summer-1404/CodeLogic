import React from 'react'
import { useTranslation } from 'react-i18next'

const Section1Card = ({item}) => {

  const {t} = useTranslation();

  return (
    <div className='flex items-center   
    sa:gap-1 sa:px-6 sa:h-[48px]
    sm:gap-2 sm:px-10 sm:h-[64px]
    lg:gap-4 lg:px-16 lg:h-[84px]'>
      <span className='font-regular   sa:text-sm   sm:text-lg   lg:text-2xl'>{t(`${item.title}`)}</span>
      <span className='font-bold   sa:text-base   sm:text-2xl   lg:text-5xl'>{t(`${item.members}`)}</span>
    </div>
  )
}

export default Section1Card