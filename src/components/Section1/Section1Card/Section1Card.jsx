import React from 'react'
import { useTranslation } from 'react-i18next'

const Section1Card = ({item}) => {

  const {t} = useTranslation();

  return (
    <div className='flex items-center gap-4 px-16 h-[84px]'>
      <span className='font-regular text-2xl'>{t(`${item.title}`)}</span>
      <span className='font-bold text-5xl'>{t(`${item.members}`)}</span>
    </div>
  )
}

export default Section1Card