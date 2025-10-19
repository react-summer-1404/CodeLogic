import React from 'react'
import CourseInfo from '../CourseInfo/CourseInfo'
import UserSatisfaction from '../UserSatisfaction/UserSatisfaction'
import CourseTeacher from '../CourseTeacher/CourseTeacher'

const CourseDetailSide = () => {
  return (
    <div className='flex flex-col gap-12'>
      <CourseInfo/>
      <UserSatisfaction/>
      <CourseTeacher/>
    </div>
  )
}

export default CourseDetailSide