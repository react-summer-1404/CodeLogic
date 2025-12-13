import React from 'react'
import { useTranslation } from 'react-i18next'

const Section1Card = ({item, isLoading}) => {

  const {t} = useTranslation();

  return (
    <div className='flex justify-center items-center gap-2 w-full h-16 
    sm:px-8 
    lg:gap-4 lg:px-16 lg:h-[84px]'>
      <span className='font-regular   dark:text-[#EEEEEE]  
      sa:text-xs   sm:text-base   lg:text-2xl'>{item.title}</span>
      <span className='font-bold   dark:text-[#EEEEEE]   
      sa:text-sm   sm:text-xl   lg:text-5xl'>
        {isLoading ? <span className="inline-block w-20 h-8 bg-black/10 animate-pulse rounded"></span> : (item.members)}
      </span>
    </div>
  )
}

export default Section1Card