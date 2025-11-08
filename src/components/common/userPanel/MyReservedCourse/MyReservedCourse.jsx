import React from 'react'
import Eye from '../../../../assets/Icons/Eye'
import Receipt from '../../../../assets/Icons/Receipt'
import ReactCourseImg from '../../../../assets/Images/A/courses/2.png'


const textClass = 'font-regular text-base text-[#1E1E1E]   dark:text-[#DDDDDD]'

const MyCourse = () => {
  return (
    <div className='flex items-center py-[14px] border-t border-b border-[#EAEAEA]'>
      <div className='flex items-center gap-4 w-64'>
        <img src={ReactCourseImg}/>
        <div>
          <span className={textClass}>آموزش ری اکت</span>
        </div>
      </div>
      <div className='flex justify-center w-50'>
        <span className={textClass}>متین قربانزاده</span>
      </div>
      <div className='flex justify-center w-36'>
        <span className='py-[2px] px-[10px] font-regular text-base text-[#008C78] bg-[#EEFFFC] rounded-[8px]'>رزرو شده</span>
      </div>
      <div className='flex justify-center w-60'>
        <span className={textClass}>1404/09/09</span>
      </div>
      <div className='flex justify-center gap-4 w-32'>
        <Eye/>
        <Receipt/>
      </div>
    </div>
  )
}

export default MyCourse