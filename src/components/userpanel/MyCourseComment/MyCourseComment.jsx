import React, { useState } from 'react'
import Eye from '../../../assets/Icons/Eye'
import Garbage from '../../../assets/Icons/Garbage'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { deleteCoursesComments } from '../../../core/services/api/delete/deleteCoursesComments'
import { toast } from 'react-toastify'
import CourseCommentModal from '../CourseCommentModal/CourseCommentModal'


const textClass = 'font-regular text-base text-[#1E1E1E]   dark:text-[#DDDDDD]'

const MyCourseComment = ({item}) => {

    const {t} = useTranslation();

    const Animate = {
        hidden: { opacity: 0, y: -20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut", duration: 0.35 },
        },
    };

    const onDelete = () => {
        deleteCoursesComments(item.id)
        toast.success(t('myCourseComment.successToast'))
    }

    const [isOpen , setIsOpen] = useState(false)
    const handleToggleModal = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
        <motion.div 
        variants={Animate}
        initial="hidden"
        animate="visible"
        className='flex items-center py-[14px] border-t border-b border-[#EAEAEA]'>
            <div className='w-60'>
                <span className={textClass}>{item.course.title}</span>
            </div>
            <div className='w-52'>
                <span className={textClass}>{item.title}</span>
            </div>
            <div className='w-52'>
                <span className={textClass}>{item.describe}</span>
            </div>
            <div className='flex justify-center w-28'>
                <span 
                className={`py-[2px] px-[12px] font-regular text-base rounded-lg
                ${item.accept ? 'text-[#008C78] bg-[#EEFFFC]' : 'text-[#E7000B] bg-[#FFECEC]'}`}>
                    {item.accept ? t('تایید شده') : t('تایید نشده')}
                </span>
            </div>
            <div className='flex justify-center w-30'>
                <span className={textClass}>{item.insertDate.slice(0,10)}</span>
            </div>
            <div className='flex justify-center gap-4 w-24'>
                <span onClick={() => {handleToggleModal(true)}} className='cursor-pointer'>
                    <Eye/>
                </span>
                <span onClick={onDelete} className='cursor-pointer'>
                    <Garbage/>
                </span>
            </div>
        </motion.div>
        {
            isOpen && <CourseCommentModal item={item} handleToggleModal={handleToggleModal}/>
        }
    </>
  )
}

export default MyCourseComment