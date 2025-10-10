import React from 'react'
import RotateBigArrowLeft from '../../../assets/Icons/RotateBigArrowLeft'
import { useTranslation } from 'react-i18next'


const TextImage = ({title1, titleSpan, title2, desc, buttonText, img, bg}) => {

  const {t} = useTranslation();

  return (
    <div className={`flex justify-between pr-[40px] pl-[63px] bg-[${bg}]`}>
      <div className='flex flex-col gap-6 pt-[97px]'>
        <h2 className='w-[585px] font-bold text-4xl leading-12'>{t(`${title1}`)}
          <span className='text-[#008C78]'>{t(`${titleSpan}`)}</span>
        {t(`${title2}`)}</h2>
        <p className='max-w-[541px] font-normal leading-7'>{t(`${desc}`)}</p>
        <button className='flex justify-center items-center gap-2 w-[253px] h-[46px] text-white bg-[#005B77] rounded-[50px] cursor-pointer'>
          <span className='font-bold text-base'>{t(`${buttonText}`)}</span>
          <RotateBigArrowLeft/>
        </button>
      </div>
      <img src={img}/>
    </div>
  )
}

export default TextImage