import React from 'react'
import CourseCommentImg from '../../../assets/Images/commentUser.png'
import Comment from '../../../assets/Icons/Comment'
import Like from '../../../assets/Icons/Like'
import DisLike from '../../../assets/Icons/DisLike'



const CourseComment = ({item}) => {

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
            <button className='flex gap-1 text-[#1E1E1E]'>
                <DisLike/>
                <span className='font-regular text-xs'>{item.commentLikeNum}</span>
            </button>
            <button className='flex gap-1 text-[#1E1E1E]'>
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