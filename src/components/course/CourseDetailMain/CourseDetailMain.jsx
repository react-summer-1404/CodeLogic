import React, { useState, useEffect } from 'react'
import ImageInfo from '../ImageInfo/ImageInfo'
import CourseCommentsTab from '../CourseCommentsTab/CourseCommentsTab'
import CourseDetailSection from '../CourseDetailSection/CourseDetailSection'
import CourseDesc from '../CourseDesc/CourseDesc'
import CourseComments from '../CourseComments/CourseComments'


const CourseDetailMain = () => {

  const [activeTab, setActiveTab] = useState(
    localStorage.getItem('courseActiveTab') || 'detail'
  );

  useEffect(() => {
    localStorage.setItem('courseActiveTab', activeTab);
  }, [activeTab]);

  return (
    <div className='flex flex-col gap-4 
    md:w-[400px]
    lg:w-[887px]'>
      <ImageInfo/>
      <CourseCommentsTab activeTab={activeTab} setActiveTab={setActiveTab}/>
      { 
        activeTab === 'detail' && (
          <>
            <CourseDetailSection/>
            <CourseDesc/> 
          </>
        )
      }
      {
        activeTab === 'comment' && (
          <>
            <CourseComments/> 
          </>
        )
      }
    </div>
  )
}

export default CourseDetailMain