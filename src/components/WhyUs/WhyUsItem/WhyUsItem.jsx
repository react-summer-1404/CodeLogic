import React from 'react'
import CircleTick from '../../../assets/Icons/CircleTick'
import { useTranslation } from 'react-i18next'

const WhyUsItem = ({item}) => {

  const {t} = useTranslation();  
  
  return (
    <div className='flex gap-4 pt-8'>
      <CircleTick/>
      <div className='flex flex-col gap-[14px]'>
        <span className='font-bold text-base text-[#263238]'>{t(`${item.title}`)}</span>
        <p className='font-regular text-sm text-[#848484]'>{t(`${item.desc}`)}</p>
      </div>
    </div>
  )
}

export default WhyUsItem