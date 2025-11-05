import React from 'react'
import {postFavoriteCourses} from '../../../../core/services/api/post/postFavoriteCourses'
import Teacher from '../../../../assets/Icons/Teacher'
import Level from '../../../../assets/Icons/Level' 
import Star from '../../../../assets/Icons/Star'
import Heart from '../../../../assets/Icons/Heart'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'



const CourseCardView2 = ({item}) => {

    const {t} = useTranslation();

  return (
    <div className='flex flex-shrink-0 gap-8 w-[1044px] p-4 bg-[#FFFFFF] rounded-[20px] relative
    dark:bg-[#606060]'>
        <div className='w-[520px] h-[200px]'>
            <img src={item.imageAddress} className='w-full h-full rounded-xl'/>
        </div>
        <Link to={`/coursedetail/${item.courseId}`} className='flex flex-col justify-between w-full h-[217px] mb-[-16px] 
        p-4 bg-[#FFFFFF] rounded-[20px] transform cursor-pointer -translate-y-4
        dark:bg-[#606060]'>
            <div className='flex flex-col gap-1 text-[#1E1E1E]'>
                <h2 className='font-bold text-base'>{t(`${item.title}`)}</h2>
                <p className='font-regular text-sm'>{t(`${item.describe}`)}</p>
            </div>
            <div>
                <div className='flex justify-between pt-8'>
                    <div className='flex items-center gap-1   dark:text-[#DDDDDD]'>
                        <Teacher className='text-[#848484]'/>
                        <span className='font-regular text-xs text-[#848484]   dark:text-[#DDDDDD]'>{t(`${item.teacherName}`)}</span>
                    </div>
                    <div className='flex items-center gap-1   dark:text-[#DDDDDD]'>
                        <Level className='text-[#848484]'/>
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
                        <span className='font-regular text-sm text-[#F8BC24]'>{t(`${item.courseRate.avg}`)}</span>
                        <Star/>
                    </div>
                </div>
            </div>
        </Link>
        <button onClick={() => {postFavoriteCourses(item.courseId)}}
        className='p-2 text-[#EEEEEE] bg-[#606060] opacity-25 rounded-[50px] absolute top-8 right-8 cursor-pointer'>
            <Heart/>
        </button>
    </div>
  )
}

export default CourseCardView2