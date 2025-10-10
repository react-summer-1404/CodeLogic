import React from 'react'
import BigArrowRight from '../../../assets/Icons/BigArrowRight'
import BigArrowLeft from '../../../assets/Icons/BigArrowLeft'
import Arrow from '../../../assets/Icons/Arrow'
import { useTranslation } from 'react-i18next'

const ButtonsSeeMore = ({seeAllText, sliderRef}) => {
  
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const {t} = useTranslation();

  return (
    <div className='flex justify-between w-full px-10'>
      <div className='flex gap-4'>
        <button className='cursor-pointer' onClick={scrollRight}>
          <BigArrowRight/>
        </button>
        <button className='px-[7px] py-2 bg-[#008C78] rounded-[50px] cursor-pointer' onClick={scrollLeft}>
          <BigArrowLeft/>
        </button>
      </div>
      <button className='flex items-center gap-2'>
        <span className='font-regular text-sm text-[#848484]'>{t(`${seeAllText}`)}</span>  
        <Arrow/>
      </button>
    </div>
  )
}

export default ButtonsSeeMore