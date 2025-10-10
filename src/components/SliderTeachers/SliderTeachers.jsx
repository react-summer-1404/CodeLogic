import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import ButtonsSeeMore from '../common/ButtonsSeeMore/ButtonsSeeMore'
import bahr from '../../assets/Images/bahr.svg'
import ternermiji from '../../assets/Images/ternermiji.svg'
import linasimon from '../../assets/Images/linasimon.svg'
import jordantomas from '../../assets/Images/jordantomas.png'
import SliderTeacher from './SliderTeacher/SliderTeacher'


const SliderTeachers = () => {

  const sliderTeachersData = [
    {id:1, img: bahr, title:'دکتر محمدحسین بحرالعلومی', courses: '12', blogs: '3'},
    {id:2, img: ternermiji, title:'مهندس ترنر میجی', courses: '5', blogs: '0'},
    {id:3, img: linasimon, title:'خانم لینا سیمون', courses: '15', blogs: '5'},
    {id:4, img: jordantomas, title:'دکتر جردن توماس', courses: '3', blogs: '8'},
    {id:5, img: bahr, title:'دکتر محمدحسین بحرالعلومی', courses: '12', blogs: '3'}
  ]

  const sliderRef = useRef();

  const {t} = useTranslation();

  return (
    <div>
      <div className='flex flex-col items-center gap-2 pt-[163px]'>
        <h2 className='font-bold text-[32px] text-[#008C78]'>{t('آشنایی با اساتید حرفه ای ما')}</h2>
        <p>{t('یادگیری از برترین مدرسین با تجربه و دانش به‌روز')}</p>
      </div>
      <ButtonsSeeMore seeAllText={'مشاهده همه استادها'} sliderRef={sliderRef}/>
      <div className='flex flex-nowrap gap-8 overflow-hidden w-full pt-10 px-10 scroll-smooth scrollbar-hide' dir='ltr' ref={sliderRef}>
        {sliderTeachersData.map((item, index) => {return <SliderTeacher item={item} key={index}/>})}
      </div>
    </div>
  )
}

export default SliderTeachers