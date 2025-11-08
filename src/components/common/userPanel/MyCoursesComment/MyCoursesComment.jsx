import React from 'react'
import Eye from '../../../../assets/Icons/Eye'
import Garbage from '../../../../assets/Icons/Garbage'



const textClass = 'font-regular text-base text-[#1E1E1E]   dark:text-[#DDDDDD]'

const MyCoursesComment = () => {

  return (
    <div className='flex items-center py-[14px] border-t border-b border-[#EAEAEA]'>
        <div className='w-60'>
            <span className={textClass}>آموزش ری اکت</span>
        </div>
        <div className='w-52'>
            <span className={textClass}>کامنت شماره یک</span>
        </div>
        <div className='w-52'>
            <span className={textClass}>کامنت شماره یک</span>
        </div>
        <div className='flex justify-center w-28'>
            <span className='py-[2px] px-[12px] font-regular text-base text-[#008C78] bg-[#EEFFFC] rounded-lg'>تایید شده</span>
        </div>
        <div className='flex justify-center w-30'>
            <span className={textClass}>1404/09/09</span>
        </div>
        <div className='flex justify-center gap-4 w-24'>
            <Eye/>
            <Garbage/>
        </div>
    </div>
  )
}

export default MyCoursesComment