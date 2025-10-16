import React from 'react'
import CourseListSide from '../../components/CourseListSide/CourseListSide'
import CourseListMain from '../../components/CourseListMain/CourseListMain'



const CourseList = () => {

    let result = 200;

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex items-center gap-2 pt-10'>
          <h2 className='font-bold text-[32px] text-[#1E1E1E]'>دوره های آموزشی</h2>
          <span className='font-regular text-base text-[#848484]'>{`(${result}نتیجه)`}</span>
      </div>
      <div className='flex justify-center gap-8 w-full pt-8 px-10'>
        <CourseListSide/>
        <CourseListMain/>
      </div>
    </div>
  )
}

export default CourseList