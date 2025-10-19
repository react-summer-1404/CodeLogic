import React from 'react'
import { useTranslation } from 'react-i18next'
import Users from '../../assets/Icons/Users'
import Clock from '../../assets/Icons/Clock'
import Level from '../../assets/Icons/Level'
import History from '../../assets/Icons/History'
import CourseDetailSecItem from './CourseDetailSecItem/CourseDetailSecItem'


const CourseDetailSection = () => {

    const {t} = useTranslation();

    const courseDetailItem = [
        {id: 1, title: 'تعداد دانشجو', icon: Users},
        {id: 2, title: 'مدت زمان', icon: Clock},
        {id: 3, title: 'سطح دوره', icon: Level},
        {id: 4, title: 'وضعیت دوره', icon: History}
    ];

  return (
    <div className='flex flex-col gap-8 pt-8'>
        <h3 className='font-bold text-[18px] text-[#1E1E1E]'>{t('جزئیات')}</h3>
        <div className='flex gap-12'>
            {
                courseDetailItem.map((item, index) => (
                    <CourseDetailSecItem item={item} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default CourseDetailSection