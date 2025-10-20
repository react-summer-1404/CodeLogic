import React from 'react'
import CourseTeacherIMG from '../../../assets/Images/courseteacher.png'
import { useTranslation } from 'react-i18next'


const CourseTeacher = () => {

    const {t} = useTranslation();

  return (
    <div className='flex flex-col items-center gap-12 w-[380px] p-4 bg-[#FFFFFF] rounded-[25px] shadow-[0_0_10px_rgba(0,0,0,0.15)]'>
        <div className='flex flex-col gap-2'>
            <img src={CourseTeacherIMG}/>
            <div className='flex flex-col items-center'>
                <span className='font-regular text-base text-[#848484]'>{t('مدرس دوره :')}</span>
                <h3 className='font-bold text-[18px] text-[#1E1E1E]'>{t('مهندس ادوارد جانسون')}</h3>
            </div>
        </div>
        <button className='py-[9px] px-24 font-regular text-base text-[#FFFFFF] bg-[#000000] rounded-[48px]'>
            {t('مشاهده اطلاعات بیشتر')}
        </button>
    </div>
  )
}

export default CourseTeacher