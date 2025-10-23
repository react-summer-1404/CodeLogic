import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import useFetchData from '../../../utils/hooks/useFetchData/useFetchData'
import ButtonsSeeMore from '../../common/ButtonsSeeMore/ButtonsSeeMore'
import SliderTeacher from './SliderTeacher/SliderTeacher'


const SliderTeachers = () => {


  const thisApiUrl = '/Home/GetTeachers';
  const { data: sliderTeachersData } = useFetchData(thisApiUrl); 

  const sliderRef = useRef();

  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center gap-8 w-full'>
      <div className='flex flex-col items-center gap-2 pt-[163px]'>
        <h2 className='font-bold text-[#008C78]
        sa:text-[24px]   sm:text-[28px]   lg:text-[32px]'>{t('sliderTeachers.title')}</h2>
        <p className='font-regular   dark:text-[#DDDDDD]
        sa:text-sm   sm:text-lg   lg:text-2xl'>{t('sliderTeachers.desc')}</p>
      </div>

      <ButtonsSeeMore seeAllText={t('sliderTeachers.seeAllText')} sliderRef={sliderRef} />
      <div className='flex flex-nowrap gap-5 overflow-hidden w-full pt-8 pb-2 px-10 scroll-smooth scrollbar-hide' dir='ltr' ref={sliderRef}>
        {sliderTeachersData?.map((item, index) => { return <SliderTeacher item={item} key={index} /> })}
      </div>
    </div>
  )
}

export default SliderTeachers