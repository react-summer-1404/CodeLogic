import React from 'react'
import Calendar from '../../../assets/Icons/Calendar'
import Clock from '../../../assets/Icons/Clock'
import Users from '../../../assets/Icons/Users'
import { useTranslation } from 'react-i18next'


const CourseInfo = () => {

    const { t } = useTranslation();

    return (
        <div className='w-[380px] p-4 bg-[#FFFFFF] rounded-[25px] shadow-[0_0_10px_rgba(0,0,0,0.15)]'>
            <h3></h3>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-6'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <Calendar />
                            <span className='font-regular text-base text-[#1E1E1E]'>{t('تاریخ شروع')}</span>
                        </div>
                        <span className='font-regular text-sm text-[#848484]'>{t('1404/07/22')}</span>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <Clock />
                            <span className='font-regular text-base text-[#1E1E1E]'>{t('ساعت شروع')}</span>
                        </div>
                        <span className='font-regular text-sm text-[#848484]'>{t('09:30')}</span>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <Clock />
                            <span className='font-regular text-base text-[#1E1E1E]'>{t('ساعت پایان')}</span>
                        </div>
                        <span className='font-regular text-sm text-[#848484]'>{t('11:30')}</span>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <Users />
                            <span className='font-regular text-base text-[#1E1E1E]'>{t('ظرفیت دوره')}</span>
                        </div>
                        <span className='font-regular text-sm text-[#848484]'>{t(`${'نفر'}`)}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='py-[10px] px-4 font-bold text-base text-[#FFFFFF] bg-[#EF5350] rounded-[15px]'>{t(`${'50%'} تخفیف`)}</span>
                        <div className='flex flex-col'>
                            <div className='flex gap-8'>
                                <span className='font-regular text-sm text-[#1E1E1E]'>{t('قیمت')}</span>
                                <span className='font-regular text-sm text-[#848484]'>{t('3000')}</span>
                            </div>
                            <span className='font-bold text-[18px] text-[#008C78]'>{t(`${'3000'} تومان`)}</span>
                        </div>
                    </div>
                </div>
                <button className='py-4 px-24 font-regular text-[18px] text-[#FFFFFF] bg-[#24D0B7] rounded-[20px]'>{t('همین حالا رزرو کنید')}</button>
            </div>
        </div>
    )
}

export default CourseInfo