import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'


const textClass = 'font-regular text-base text-[#1E1E1E]   dark:text-[#DDDDDD]'
const titleClass = 'font-semibold text-base text-[#1E1E1E]'

const MyNewsComment = ({item, handleToggleModal}) => {

    const {t} = useTranslation()

    const Animate = {
        hidden: { opacity: 0, y: -20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut", duration: 0.35 },
        },
    };

  return (
    <motion.div 
    variants={Animate}
    initial="hidden"
    animate="visible"
    className='flex flex-col items-center gap-6 w-144 h-84 py-[14px] bg-[#FFFFFF] border border-[#EAEAEA] rounded-xl fixed top-32 
    right-120 inset-0 z-48'>
        <div className='flex gap-2'>
            <span className={titleClass}>{t('newsCommentModal.newsTitle')}</span>
            <span className={textClass}>آموزش ری اکت</span>
        </div>
        <div className='flex gap-2'>
            <span className={titleClass}>{t('newsCommentModal.commentTitle')}</span>
            <span className={textClass}>{item.title}</span>
        </div>
        <div className='flex gap-2'>
            <span className={titleClass}>{t('newsCommentModal.commentText')}</span>
            <span className={textClass}>{item.describe}</span>
        </div>
        <div className='flex justify-center gap-2'>
            <span className={titleClass}>{t('newsCommentModal.status')}</span>
            <span className='py-[2px] px-[12px] font-regular text-base text-[#008C78] bg-[#EEFFFC] rounded-lg'>تایید شده</span>
        </div>
        <div className='flex justify-center gap-2'>
            <span className={titleClass}>{t('newsCommentModal.commentDate')}</span>
            <span className={textClass}>{item.inserDate.slice(0,10)}</span>
        </div>
        <button onClick={() => {handleToggleModal(false)}} className='py-1 px-2 border rounded-lg cursor-pointer'>
            {t('reservedCourseModal.backBtn')}
      </button>
    </motion.div>
  )
}

export default MyNewsComment