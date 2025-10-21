import React from 'react'
import { useTranslation } from 'react-i18next'
import Linkedin from '../../../assets/Icons/Linkedin';

const TeacherCard = ({ item }) => {
    const { t } = useTranslation();
    return (
        <div className='flex flex-col items-center dark:bg-[#1E1E1E] dark:text-[#fff]  p-4 bg-[#FFFFFF] rounded-[20px] 
    hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
            <img src={item.pictureAddress} className='w-[180px] h-[180px] object-cover rounded-full' />

            <div className='flex flex-col items-center gap-2 pt-2'>
                <span className='font-bold text-base text-[#1E1E1E]   dark:text-[#EEEEEE]'>{t(`${item.fullName}`)}</span>
                <div className='flex items-center gap-2'>
                    <span className='font-regular text-xs dark:text-[#008C78] text-[#008C78]'>{t('پروفایل لینکدین')}</span>
                    <Linkedin />
                </div>
                <div className='flex pt-4 divide-x divide-[#EAEAEA]'>
                    <div className='flex flex-col items-center w-[98px]   dark:text-[#DDDDDD]'>
                        <span>{t(`${item.courseCounts}`)}</span>
                        <span>{t('مقالات')}</span>
                    </div>
                    <div className='flex flex-col items-center w-[98px]   dark:text-[#DDDDDD]'>
                        <span>{t(`${item.courseCounts}`)}</span>
                        <span>{t('دوره ها')}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TeacherCard