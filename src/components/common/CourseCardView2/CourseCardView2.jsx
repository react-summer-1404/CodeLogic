import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Heart from '../../../assets/Icons/Heart'
import Level from '../../../assets/Icons/Level'
import Star from '../../../assets/Icons/Star'
import Teacher from '../../../assets/Icons/Teacher'
import CourseCardView2Skeleton from '../skeleton/CourseCardSkeletonView2/CourseCardSkeletonView2'



const CourseCardView2 = ({ item, handleToggleFavorite, isLoading}) => {

    const { t } = useTranslation();

    const [isFavorite , setIsFavorite] = useState();
    const onToggleFavorite = () => {
        handleToggleFavorite(item.courseId)
        setIsFavorite(!isFavorite)
    }
    
    if(isLoading){
        return <CourseCardView2Skeleton/>
    }

    return (
        <div className='hidden flex flex-shrink-0 gap-8 w-[640px] p-4 bg-[#FFFFFF] rounded-[20px] relative   dark:bg-[#606060]
        sm:flex sm:w-[520px] sm:h-[184px] 
        lg:w-[720px] lg:h-[208px]
        xl:w-[1044px] xl:h-[232px]'>
            <img src={item.imageAddress} className='w-[304px] h-full rounded-xl
            sm:w-[304px]
            md:w-[320px]
            lg:w-[337px]'/>
            <Link to={`/courseDetail/${item.courseId}`} className='flex flex-col justify-between w-full h-full 
            bg-[#FFFFFF] rounded-[20px] cursor-pointer   dark:bg-[#606060]'>
                <div className='flex flex-col gap-1 text-[#1E1E1E]'>
                    <h2 className='font-bold text-base'>{t(`${item.title}`)}</h2>
                    <p className='font-regular text-sm'>{t(`${item.describe}`)}</p>
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
                            <span className='font-regular text-sm text-[#F8BC24]'>{t(`${item.courseRate.avg}`)}</span>
                            <Star />
                        </div>
                    </div>
                </div>
            </Link>
            <button onClick={onToggleFavorite}
            className={`p-2 rounded-[50px] transition absolute top-[13px] right-[14px] cursor-pointer opacity-25 text-[#EEEEEE] 
            ${isFavorite ? 'bg-[#FF0000]' : 'bg-[#000000]'}`}>
                <Heart />
            </button>
        </div>
    )
}

export default CourseCardView2