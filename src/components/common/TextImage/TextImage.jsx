import React from 'react'
import RotateBigArrowLeft from '../../../assets/Icons/RotateBigArrowLeft'
import { useTranslation } from 'react-i18next'


const TextImage = ({title1, titleSpan, title2, desc, buttonText, img, bg}) => {

  const {t} = useTranslation();

  return (
    <div className={`flex justify-between pr-[40px] pb-8 pl-[63px] bg-[${bg}]`}>
      <div className='flex flex-col gap-6 pt-[97px]
      sa:items-center
      md:items-start md:pb-0'>
        <h2 className='font-bold
        sa:w-[400px] sa:text-xl sa:text-center sa:leading-8   
        sm:w-[480px] sm:text-2xl sm:text-start sm:leading-10   
        lg:w-[585px] lg:text-4xl lg:leading-12'>{t(`${title1}`)}
          <span className='text-[#008C78]'>{t(`${titleSpan}`)}</span>
        {t(`${title2}`)}</h2>
        <p className='font-normal
        sa:text-center
        sm:max-w-[480px] sm:text-start sm:leading-6 
        lg:max-w-[541px] lg:leading-7'>{t(`${desc}`)}</p>
        <button className='flex justify-center items-center text-white bg-[#005B77] rounded-[50px] cursor-pointer 
        sa:gap-1 sa:w-[184px] sa:h-[32px]
        sm:gap-2 sm:w-[216px] sm:h-[40px]
        lg:gap-2 lg:w-[253px] lg:h-[46px]'>
          <span className='font-bold   sa:text-xs   sm:text-sm   lg:text-base'>{t(`${buttonText}`)}</span>
          <RotateBigArrowLeft className='sm:w-[16px] sm:h-[14px]   sm:w-[18px] sm:h-[16px]   lg:w-[20px] lg:h-[18px]'/>
        </button>
      </div>
      <img src={img} className='hidden   md:block md:w-[360px] md:h-[360px]   lg:w-[500px] lg:h-[500px]'/>
    </div>
  )
}

export default TextImage