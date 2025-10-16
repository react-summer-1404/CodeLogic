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
    { id: 1, img: bahr, title: 'دکتر محمدحسین بحرالعلومی', courses: '12', blogs: '3' },
    { id: 2, img: ternermiji, title: 'مهندس ترنر میجی', courses: '5', blogs: '0' },
    { id: 3, img: linasimon, title: 'خانم لینا سیمون', courses: '15', blogs: '5' },
    { id: 4, img: jordantomas, title: 'دکتر جردن توماس', courses: '3', blogs: '8' },
    { id: 5, img: bahr, title: 'دکتر محمدحسین بحرالعلومی', courses: '12', blogs: '3' }
  ]

  const sliderRef = useRef();

  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center gap-8 w-full'>
      <div className='flex flex-col items-center gap-2 pt-[163px]'>
        <h2 className='font-bold text-[#008C78]
        sa:text-[24px]   sm:text-[28px]   lg:text-[32px]'>{t('آشنایی با اساتید حرفه ای ما')}</h2>
        <p className='font-regular   dark:text-[#DDDDDD]
        sa:text-sm   sm:text-lg   lg:text-2xl'>{t('یادگیری از برترین مدرسین با تجربه و دانش به‌روز')}</p>
      </div>
      <ButtonsSeeMore seeAllText={'مشاهده همه استادها'} sliderRef={sliderRef} />
      <div className='flex flex-nowrap gap-8 overflow-hidden w-full pt-10 pb-2 px-10 scroll-smooth scrollbar-hide' dir='ltr' ref={sliderRef}>
        {sliderTeachersData.map((item, index) => { return <SliderTeacher item={item} key={index} /> })}
      </div>
    </div>
  )
}

export default SliderTeachers