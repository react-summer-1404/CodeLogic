import React from 'react'
import Teacher from '../../../assets/Icons/Teacher'
import Level from '../../../assets/Icons/Level'
import Star from '../../../assets/Icons/Star'
import Heart from '../../../assets/Icons/Heart'
import { useTranslation } from 'react-i18next'

const CourseCardView1 = ({ item }) => {

    const { t } = useTranslation();

    return (
        <div dir='rtl' className='flex flex-col flex-shrink-0 items-center w-[350px] rounded-[20px] relative cursor-pointer  
    hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:basis-[calc(33.85%-1rem)]'>
            <img src={item.imageAddress} className='w-full h-[259px] rounded-t-[20px]' />
            <div className='flex flex-col justify-between w-full h-[217px] mb-[-16px] p-4 bg-[#FFFFFF] rounded-[20px] transform -translate-y-4   
        dark:bg-[#606060]'>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-bold text-base   dark:text-[#EEEEEE]'>{t(`${item.title}`)}</h2>
                    <p className='max-w-[317px] font-regular text-sm   dark:text-[#DDDDDD]'>{t(`${item.describe}`)}</p>
                </div>
                <div>
                    <div className='flex justify-between pt-8'>
                        <div className='flex items-center gap-1   dark:text-[#DDDDDD]'>
                            <Teacher className='text-[#848484]' />
                            <span className='font-regular text-xs text-[#848484]   dark:text-[#DDDDDD]'>{t(`${item.teacherName}`)}</span>
                        </div>
                        <div className='flex items-center gap-1   dark:text-[#DDDDDD]'>
                            <Level className='text-[#848484]' />
                            <span className='font-regular text-xs text-[#848484]   dark:text-[#DDDDDD]'>{t(`${item.levelName}`)}</span>
                        </div>
                    </div>
                    <div className='flex justify-between pt-2'>
                        <div className='flex flex-col justify-end gap-1'>
                            <span className='font-regular text-xs text-[#1E1E1E]   dark:text-[#EEEEEE]'>{t('قیمت')}</span>
                            <div className='flex'>
                                <span className='font-bold text-base text-[#008C78]'>{t(`${item.cost} تومان`)}</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='font-regular text-sm text-[#F8BC24]'>{t(`${item.likeCount}`)}</span>
                            <Star />
                        </div>
                    </div>
                </div>
            </div>
            <button className='p-2 bg-[#000000] opacity-25 rounded-[50px] absolute top-[13px] right-[14px]'>
                <Heart />
            </button>
        </div>
    )
}

export default CourseCardView1 