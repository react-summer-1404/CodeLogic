import React, {useState} from 'react'
import CourseCommentImg from '../../../assets/Images/commentUser.png'
import Comment from '../../../assets/Icons/Comment'
import Like from '../../../assets/Icons/Like'
import DisLike from '../../../assets/Icons/DisLike'
import {likeCourseComments} from '../../../core/services/api/post/likeCourseComments'
import {disLikeCourseComments} from '../../../core/services/api/post/disLikeCourseComments'


const CourseComment = ({item}) => {

    const [liked, setLiked] = useState(false);
    const [disLiked, setDisliked] = useState(false);
    const [likeCount, setLikeCount] = useState(item.likeCount);
    const [disLikeCount, setDisLikeCount] = useState(item.dissLikeCount);
    
    const onLike = () => {
        if (liked) {
            setLiked(false);
            setLikeCount(likeCount - 1);
            toast.success(t('courseComment.removeLikeSuccessToast'))
        } 
        else{
            setLiked(true);
            setDisliked(false);
            setLikeCount(likeCount + 1);
            if (disLiked) setDisLikeCount(disLikeCount - 1);
            likeCourseComments(item.id);
            toast.success(t('courseComment.likeSuccessToast'))
        }
    };  
    const onDisLike = () => {
        if (disLiked) {
            setDisliked(false);
            setDisLikeCount(disLikeCount - 1);
            toast.success(t('courseComment.removeDisLikeSuccessToast'))
        } 
        else{
            setDisliked(true);
            setLiked(false);
            setDisLikeCount(disLikeCount + 1);
            if (liked) setLikeCount(likeCount - 1);
            disLikeCourseComments(item.id);
            toast.success(t('courseComment.disLikeSuccessToast'))
        }
    };

  return (
    <div>
        <div className='flex items-end gap-4'>
            <img src={CourseCommentImg}/>
            <div className='flex flex-col gap-1'>
                <h4 className='font-bold text-base text-[#1E1E1E]'>{item.commentUserName}</h4>
                <span className='font-regular text-sm text-[#848484]'>{item.commentDate}</span>
            </div>
        </div>
        <div className='flex flex-col gap-2 mt-[10px]'>
            <span className='font-regular text-sm text-[#1E1E1E]'>{item.commentTitle}</span>
            <span className='font-regualr text-sm text-[#848484]'>{item.commentDescribe}</span>
        </div>
        <div className='flex items-center gap-6 mt-4'>
            <button className='flex gap-1 text-[#1E1E1E]'>
                <Comment/>
                <span className='font-regular text-xs'>بستن پاسخ ها</span>
            </button>
            <button 
            onClick={onLike}
            className='flex gap-1 text-[#1E1E1E] cursor-pointer'>
                <DisLike/>
                <span className='font-regular text-xs'>{item.commentLikeNum}</span>
            </button>
            <button 
            onClick={onDisLike}
            className='flex gap-1 text-[#1E1E1E] cursor-pointer'>
                <span className='rotate-180'>
                    <DisLike/>
                </span>
                <span className='font-regular text-xs'>{item.commentDisLikeNum}</span>
            </button>
            <button className='font-regular text-xs text-[#008C78]'>پاسخ دادن</button>
        </div>
    </div>
  )
}

export default CourseComment