import React, {useState} from 'react'
import CourseCommentImg from '../../../assets/Images/commentUser.png'
import Comment from '../../../assets/Icons/Comment'
import Like from '../../../assets/Icons/Like'
import DisLike from '../../../assets/Icons/DisLike'
import {likeCourseComments} from '../../../core/services/api/post/likeCourseComments'
import {disLikeCourseComments} from '../../../core/services/api/post/disLikeCourseComments'
import { useTranslation } from 'react-i18next'
import CourseCommentForm from '../CourseCommentForm/CourseCommentForm'
import CommentReplyModal from '../commentReplyModal/CommentReplyModal'
import { toast } from 'react-toastify'


const CourseComment = ({item}) => {

    const {t} = useTranslation()

    const [liked, setLiked] = useState(false)
    const [disLiked, setDisliked] = useState(false)
    const [likeCount, setLikeCount] = useState(item.commentLikeCount)
    const [disLikeCount, setDisLikeCount] = useState(item.commentDisLikeCount)
    
    const onLike = () => {
        if (liked) {
            setLiked(false)
            setLikeCount(likeCount - 1)
            toast.success(t('courseComment.removeDisLikeSuccessToast'))
        } 
        else{
            setLiked(true)
            setDisliked(false)
            setLikeCount(likeCount + 1)
            if (disLiked) setDisLikeCount(disLikeCount - 1)
                likeCourseComments(item.id)
            toast.success(t('courseComment.disLikeSuccessToast'))
        }
    }
    
    const onDisLike = () => {
        if (disLiked) {
            setDisliked(false)
            setDisLikeCount(disLikeCount - 1)
            toast.success(t('courseComment.removeLikeSuccessToast'))
        } 
        else{
            setDisliked(true)
            setLiked(false)
            setDisLikeCount(disLikeCount + 1)
            if (liked) setLikeCount(likeCount - 1)
            disLikeCourseComments(item.id)
            toast.success(t('courseComment.likeSuccessToast'))
        }
    }

    const [isOpen, setIsOpen] = useState(false)
    const onToggleReply = (value) => {
        setIsOpen(value)
    }

    const [showReplies, setShowReplies] = useState(false)
    const onToggleShowReplies = (value) => {
        setShowReplies(value)
    }


  return (
    <>
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
                <button className='flex gap-1 text-[#1E1E1E]' onClick={() => {onToggleReply(false)}}>
                    <Comment/>
                    <span className='font-regular text-xs cursor-pointer'>
                        {t('courseComment.closeReplyBtn')}
                    </span>
                </button>
                <button 
                onClick={onLike}
                className='flex gap-1 text-[#1E1E1E] cursor-pointer'>
                    {
                        disLiked ? <span className='rotate-180 transform scale-x-[-1]'><Like/></span> : <DisLike/>
                    }
                    <span className='font-regular text-xs'>{likeCount}</span>
                </button>
                <button 
                onClick={onDisLike}
                className='flex gap-1 text-[#1E1E1E] cursor-pointer'>
                    {
                        liked 
                        ? <span className=''><Like/></span> 
                        : <span className='rotate-180 transform scale-x-[-1]'><DisLike/></span>
                    }
                    <span className='font-regular text-xs'>{disLikeCount}</span>
                </button>
                <button 
                onClick={() => {onToggleShowReplies(true)}}
                className='font-regular text-xs text-[#1E1E1E] cursor-pointer'>
                    {t('courseComment.replyNumber')}
                </button>
                <button onClick={() => {onToggleReply(true)}} className='font-regular text-xs text-[#008C78] cursor-pointer'>
                     {t('courseComment.openReplyBtn')}
                </button>
            </div>
            {isOpen 
            && 
            <div className='mt-8'>
                <CourseCommentForm 
                titlePlaceholder={t('courseCommentReply.titleInputsPlcholder')}
                textPlaceholder={t('courseCommentReply.textInputsPlcholder')}/>
            </div>
            }
        </div>
        {showReplies && (
            <>
                <div onClick={() => onToggleShowReplies(false)} className='fixed inset-0 bg-[#1E1E1E] opacity-50 z-40'/>                
                <CommentReplyModal/>
            </>
        )}
    </>
  )
}

export default CourseComment