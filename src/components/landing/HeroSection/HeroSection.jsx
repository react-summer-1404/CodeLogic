import React from 'react'
import Working from '../../../assets/Images/working.svg'
import TextImage from '../../common/TextImage/TextImage'

const HeroSection = () => {
  return (
    <div>
      <TextImage title1={'یادگیری برنامه‌نویسی با اساتید مجرب ،'} titleSpan={' مسیر موفقیت '}
        title2={'شما را هموار می‌کند.'}
        desc={'در دوره‌های تخصصی ما، با اساتید حرفه‌ای و با تجربه یادگیری برنامه‌نویسی را آغاز کنید. از مفاهیم پایه تا مهارت‌های پیشرفته، شما را به سطحی می‌رسانیم که آماده ورود به دنیای حرفه‌ای فناوری باشید. با روش‌های مدرن و کارآمد، به سرعت رشد کنید!'}
        buttonText={'به جمع حرفه‌ای‌ها بپیوندید'} img={Working} bg={'#EEFFFC'} />
    </div>
  )
}

export default HeroSection