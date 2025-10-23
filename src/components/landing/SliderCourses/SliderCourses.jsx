import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import useFetchData from '../../../utils/hooks/useFetchData/useFetchData'
import CourseCardView1 from '../../common/CourseCardView1/CourseCardView1'
import ButtonsSeeMore from '../../common/ButtonsSeeMore/ButtonsSeeMore'


const SliderCourses = () => {

  const {t} = useTranslation();

  const thisApiUrl = '/Home/GetCoursesTop?Count=5'; 
  const { data: sliderCoursesData } = useFetchData(thisApiUrl); 

  console.log(sliderCoursesData)
  const sliderRef = useRef();


  return (
    <div className='flex flex-col items-center gap-8 w-full pt-[104px]'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='font-bold text-[#008C78]   dark:text-[#EEEEEE]]
        sa:text-[24px]   sm:text-[28px]   lg:text-[32px]'>{t('sliderCourses.title')}</h2>
        <p className='font-regular   dark:text-[#DDDDDD]
        sa:text-sm   sm:text-lg   lg:text-2xl'>{t('sliderCourses.desc')}</p>
      </div>
      <ButtonsSeeMore seeAllText={t('sliderCourses.seeAllText')} sliderRef={sliderRef} />
      <div className='flex flex-nowrap gap-8 w-full pb-2 px-10 overflow-hidden scroll-smooth scrollbar-hide' dir='ltr' ref={sliderRef}>
        {sliderCoursesData?.map((item, index) => { return <CourseCardView1 item={item} key={index}/>})}
      </div>
    </div>
  )
}

export default SliderCourses