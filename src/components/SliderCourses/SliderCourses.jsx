import React, { useRef } from 'react'
import SliderCourse from './SliderCourse/SliderCourse'
import HTML5Course from '../../assets/Images/html5course.svg'
import PythonCourse from '../../assets/Images/pythoncourse.svg'
import ReactCourse from '../../assets/Images/reactcourse.svg'
import AICourse from '../../assets/Images/aicoursepng.png'
import ButtonsSeeMore from '../common/ButtonsSeeMore/ButtonsSeeMore'
import { useTranslation } from 'react-i18next'



const CoursesSection = () => {

  const sliderCoursesData = [
    {id:1, img: HTML5Course, title: 'دوره آموزش جامع HTML5', 
    desc: 'خواه شما مبتدی باشید یا به دنبال پیشرفت در مهارت‌های برنامه‌نویسی خود باشید، دوره‌های آموزشی ما شما را در هر مرحله همراهی می‌کنند.', 
    teacher: 'دکتر بحرالعلومی', level: 'پیشرفته', price: '500,000', rating: '3.1'},
    {id:2, img: PythonCourse, title: 'آموزش تبدیل گفتار به نوشتار با پایتون', 
      desc: 'در دنیای امروز، تعامل انسان و ماشین به یکی از موضوعات جذاب و پرکاربرد تبدیل شده است. یکی از مهم‌ترین جنبه‌های این تعامل، توانایی سیستم‌ها ...', 
      teacher: 'محسن اسفندیاری', level: 'مبتدی', price: '300,000', rating: '3.1'},
    {id:3, img: ReactCourse, title: 'دوره اتصال React به PHP به همراه 3 پروژه عملی', 
      desc: 'ری‌اکت یک فریمورک قدرتمند و مدرن جاوااسکریپت است که برای ساخت رابط‌های کاربری تعاملی و واکنش‌گرا طراحی شده است. با استفاده از معماری مبتنی ...', 
      teacher: 'مهدی اصغری', level: 'حرفه ای', price: '1,500,000', rating: '3.1'},
    {id:4, img: AICourse, title: 'دوره آموزش تصویرسازی با هوش مصنوعی', 
    desc: 'آیا تا به حال به این فکر کرده‌اید که چگونه برخی افراد بدون کوچک‌ترین تجربه‌ای در طراحی یا استفاده از نرم‌افزارهای پیچیده گرافیکی، تصاویر فوق‌العاده و خیره‌کننده‌ای ...', 
    teacher: 'محسن اسفندیاری', level: 'مبتدی', price: '100,000', rating: '3.1'},
  ];

  const sliderRef = useRef();

  const {t} = useTranslation();

  return (
    <div className='flex flex-col items-center gap-8 w-full pt-[104px]'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='font-bold text-[32px] text-[#008C78]'>{t('دوره های آموزشی برنامه نویسی')}</h2>
        <p>{t('دوره‌هایی برای همه: یاد بگیر، تمرین کن، پروژه بزن!')}</p>
      </div>
      <ButtonsSeeMore seeAllText={'مشاهده همه دوره ها'} sliderRef={sliderRef}/>
      <div className='flex flex-nowrap gap-8 overflow-x-hidden w-full px-10 scroll-smooth scrollbar-hide' dir='ltr' ref={sliderRef}>
        {sliderCoursesData.map((item, index) => {return <SliderCourse item={item} key={index}/>})}
      </div>
    </div>
  )
}

export default CoursesSection