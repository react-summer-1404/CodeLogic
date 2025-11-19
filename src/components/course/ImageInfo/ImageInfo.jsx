import React, { useState, useEffect } from 'react'
import Like from '../../../assets/Icons/Like'
import DisLike from '../../../assets/Icons/DisLike'
import {likeCourses} from '../../../core/services/api/post/likeCourses'
import {disLikeCourses} from '../../../core/services/api/post/disLikeCourses'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'



const ImageInfo = ({ course }) => {

    const {t} = useTranslation()

    const key = `like_${course.courseId}`;
    const saved = JSON.parse(localStorage.getItem(key) || '{}');
    const [liked, setLiked] = useState(saved.liked || false);
    const [disLiked, setDisliked] = useState(saved.disLiked || false);
    const [likeCount, setLikeCount] = useState(course.likeCount + (saved.liked ? 1 : 0));
    const [disLikeCount, setDisLikeCount] = useState(course.dissLikeCount + (saved.disLiked ? 1 : 0));

    
    const onLike = () => {
        if (liked) {
            setLiked(false);
            setLikeCount(likeCount - 1);
            toast.success(t('imageInfo.removeLikeSuccessToast'))
        } 
        else{
            setLiked(true);
            setDisliked(false);
            setLikeCount(likeCount + 1);
            if (disLiked) setDisLikeCount(disLikeCount - 1);
            likeCourses(course.courseId);
            toast.success(t('imageInfo.addLikeSuccessToast'))
        }
    };  
    const onDisLike = () => {
        if (disLiked) {
            setDisliked(false);
            setDisLikeCount(disLikeCount - 1);
            toast.success(t('imageInfo.removeDisLikeSuccessToast'))
        } 
        else{
            setDisliked(true);
            setLiked(false);
            setDisLikeCount(disLikeCount + 1);
            if (liked) setLikeCount(likeCount - 1);
            disLikeCourses(course.courseId);
            toast.success(t('imageInfo.addDisLikeSuccessToast'))
        }
    }; 

    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ liked, disLiked }));
    }, [liked, disLiked]);
    
    return (
        <div className='flex flex-col gap-4'>
            <img src={course.imageAddress} className='w-full h-[160px] rounded-xl
            md:h-[240px] md:rounded-2xl
            lg:h-[443px] lg:rounded-[25px]' />
            <div className='flex justify-between'>
                <div>
                    <span className='py-[1px] px-[11px] font-regular text-sm text-[#848484] border border-[#848484] rounded-[48px]'>
                        {'HTML5'}
                    </span>
                </div>
                <div className='flex gap-2'>
                    <div 
                    onClick={onDisLike} 
                    className='flex gap-2 py-2 px-3 text-[#848484] bg-[#EAEAEA] rounded-[48px] cursor-pointer 
                    dark:bg-[#393939]'>
                        <span className='font-regular text-base text-[#848484]'>{disLikeCount}</span>
                        {
                            disLiked ? <span className='rotate-180 transform scale-x-[-1]'><Like/></span> : <DisLike/>
                        }
                    </div>
                    <div  
                    onClick={onLike} 
                    className='flex gap-2 py-2 px-3 text-[#848484] bg-[#EAEAEA] rounded-[48px] cursor-pointer  
                    dark:bg-[#393939]'>
                        <span className='font-regular text-base text-[#848484]'>{likeCount}</span>
                        {
                            liked 
                            ? <span className=''><Like/></span> 
                            : <span className='rotate-180 transform scale-x-[-1]'><DisLike/></span>
                        }
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default ImageInfo