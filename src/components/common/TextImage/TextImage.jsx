import React from 'react'
import RotateBigArrowLeft from '../../../assets/Icons/RotateBigArrowLeft'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../../utils/hooks/useTheme/useTheme'

const TextImage = ({title1, titleSpan, title2, desc, buttonText, img, bg}) => {

  const {t} = useTranslation();
  const {theme , toggleTheme} = useTheme();

  return (
    <div className={`flex justify-between pr-[40px] pb-8 pl-[63px] bg-[${bg}]   dark:bg-[#1E1E1E]`}>
      <div className='flex flex-col gap-6 w-full pt-[97px]
      sa:items-center
      md:items-start md:pb-0'>
        <h2 className='font-bold   dark:text-[#EEEEEE]
        sa:max-w-[320px] sa:text-xl sa:text-center sa:leading-8   
        md:max-w-[480px] md:text-2xl md:text-start md:leading-10   
        lg:max-w-[585px] lg:text-4xl lg:leading-12'>{t(`${title1}`)}
          <span className='text-[#008C78]'>{t(`${titleSpan}`)}</span>
        {t(`${title2}`)}</h2>
        <p className='font-normal   dark:text-[#DDDDDD]
        sa:text-center sa:max-w-[400px]
        md:max-w-[480px] md:text-start md:leading-6 
        lg:max-w-[541px] lg:leading-7'>{t(`${desc}`)}</p>
        <button className='flex justify-center items-center text-white bg-[#005B77] rounded-[50px] cursor-pointer   dark:text-[#EEEEEE]
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