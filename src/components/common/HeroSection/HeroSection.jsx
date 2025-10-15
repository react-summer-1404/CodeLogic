import React from 'react'
import working from '../../../assets/Images/working.svg'
import { useTranslation } from 'react-i18next'


const HeroSection = () => {

  const {t} = useTranslation();

  return (
    <div className='flex justify-between pr-[40px] pl-[63px]  bg-[#EEFFFC]'>
      <div className='flex flex-col gap-6 pt-[97px]'>
        <h2 className='w-[585px] font-bold text-4xl leading-12'>{t('یادگیری برنامه‌نویسی با اساتید مجرب ،')}
          <span className='text-[#008C78]'>{t(' مسیر موفقیت ')}</span>
          {t('شما را هموار می کند')}</h2>
        <p className='max-w-[541px] font-normal leading-7'>{t('در دوره‌های تخصصی ما، با اساتید حرفه‌ای و با تجربه یادگیری برنامه‌نویسی را آغاز کنید. از مفاهیم پایه تا مهارت‌های پیشرفته، شما را به سطحی می‌رسانیم که آماده ورود به دنیای حرفه‌ای فناوری باشید. با روش‌های مدرن و کارآمد، به سرعت رشد کنید!')}</p>
        <button className='flex justify-center items-center w-[253px] h-[46px] font-bold text-base text-white bg-[#005B77] rounded-[50px] cursor-pointer'>{t('به جمع حرفه ای ها بپیوندید')}</button>
      </div>
      <img src={working}/>
    </div>
  )
}

export default HeroSection