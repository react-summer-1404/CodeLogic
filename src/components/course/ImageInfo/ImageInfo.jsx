import React, { useState } from 'react'
import Like from '../../../assets/Icons/Like'
import DisLike from '../../../assets/Icons/DisLike'
import {likeCourses} from '../../../core/services/api/post/likeCourses'
import {disLikeCourses} from '../../../core/services/api/post/disLikeCourses'



const ImageInfo = ({ course }) => {

    const [liked, setLiked] = useState(false);
    const [disLiked, setDisliked] = useState(false);
    const [likeCount, setLikeCount] = useState(course.likeCount);
    const [disLikeCount, setDisLikeCount] = useState(course.dissLikeCount);

    const handleLike = () => {
    if (disLiked) return; 
    else if(liked){
        setLiked(false);
        setLikeCount(likeCount - 1);
    } 
    else{
        setLiked(true);
        setLikeCount(likeCount + 1);
        likeCourses(course.courseId);
    }
    };
    const handleDisLike = () => {
    if (liked) return;
    else if(disLiked){
        setDisliked(false);
        setDisLikeCount(disLikeCount - 1);
    } 
    else{
        setDisliked(true);
        setDisLikeCount(disLikeCount + 1);
        disLikeCourses(course.courseId);
    }
    };


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
                    onClick={handleDisLike} 
                    className='flex gap-2 py-2 px-3 text-[#848484] bg-[#EAEAEA] rounded-[48px] cursor-pointer 
                    dark:bg-[#393939]'>
                        <span className='font-regular text-base text-[#848484]'>{disLikeCount}</span>
                        {
                            disLiked ? <span className='rotate-180 transform scale-x-[-1]'><Like/></span> : <DisLike/>
                        }
                    </div>
                    <div  
                    onClick={handleLike} 
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