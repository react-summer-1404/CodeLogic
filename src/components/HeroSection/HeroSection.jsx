import React from 'react'
import HeroSectionImg from '../../assets/Images/Group7.svg'


const HeroSection = () => {
  return (
    <div className='flex justify-between pr-[40px] pl-[63px]'>
      <div className='flex flex-col gap-6 pt-[97px]'>
        <h2 className='w-[585px] font-bold text-4xl'>یادگیری برنامه‌نویسی با اساتید مجرب ، 
          <span className='text-[#008C78]'> مسیر موفقیت </span>
          شما را هموار می کند</h2>
        <p className='max-w-[541px] font-normal'>در دوره‌های تخصصی ما، با اساتید حرفه‌ای و با تجربه یادگیری برنامه‌نویسی را آغاز کنید. از مفاهیم پایه تا مهارت‌های پیشرفته، شما را به سطحی می‌رسانیم که آماده ورود به دنیای حرفه‌ای فناوری باشید. با روش‌های مدرن و کارآمد، به سرعت رشد کنید!</p>
        <button className='flex justify-center items-center w-[253px] h-[46px] font-bold text-base text-white bg-[#005B77] rounded-[50px]'>به جمع حرفه ای ها بپیوندید</button>
      </div>
      <img src={HeroSectionImg}/>
    </div>
  )
}

export default HeroSection