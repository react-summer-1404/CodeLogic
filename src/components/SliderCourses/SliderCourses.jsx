import React from 'react'
import SliderCourse from './SliderCourse/SliderCourse'

const CoursesSection = () => {

  const sliderCourseData = [
    {id:1, img: '', title: 'دوره آموزش تصویرسازی با هوش مصنوعی', 
    desc: 'آیا تا به حال به این فکر کرده‌اید که چگونه برخی افراد بدون کوچک‌ترین تجربه‌ای در طراحی یا استفاده از نرم‌افزارهای پیچیده گرافیکی، تصاویر فوق‌العاده و خیره‌کننده‌ای ...', 
    teacher: 'محسن اسفندیاری', level: 'مبتدی', price: '100,000 تومان', rating: '3.1'},
    {id:2, img: '', title: 'دوره اتصال React به PHP به همراه 3 پروژه عملی', 
    desc: 'ری‌اکت یک فریمورک قدرتمند و مدرن جاوااسکریپت است که برای ساخت رابط‌های کاربری تعاملی و واکنش‌گرا طراحی شده است. با استفاده از معماری مبتنی ...', 
    teacher: 'مهدی اصغری', level: 'حرفه ای', price: '1,500,000 تومان', rating: '3.1'},
    {id:3, img: '', title: 'آموزش تبدیل گفتار به نوشتار با پایتون', 
    desc: 'در دنیای امروز، تعامل انسان و ماشین به یکی از موضوعات جذاب و پرکاربرد تبدیل شده است. یکی از مهم‌ترین جنبه‌های این تعامل، توانایی سیستم‌ها ...', 
    teacher: 'محسن اسفندیاری', level: 'مبتدی', price: '300,000 تومان', rating: '3.1'},
    {id:4, img: '', title: 'دوره آموزش جامع HTML5', 
    desc: 'خواه شما مبتدی باشید یا به دنبال پیشرفت در مهارت‌های برنامه‌نویسی خود باشید، دوره‌های آموزشی ما شما را در هر مرحله همراهی می‌کنند.', 
    teacher: 'دکتر بحرالعلومی', level: 'پیشرفته', price: '500,000 تومان', rating: '3.1'},
  ];

  return (
    <div className='flex flex-col items-center gap-2 w-full pt-[104px]'>
      <h2 className='font-bold text-[32px] text-[#008C78]'>دوره‌های آموزشی برنامه‌نویسی</h2>
      <p>دوره‌هایی برای همه: یاد بگیر، تمرین کن، پروژه بزن!</p>
      <div className='flex gap-8'>
        {sliderCourseData.map((item, index) => {return <SliderCourse item={item} key={index}/>})}
      </div>
    </div>
  )
}

export default CoursesSection