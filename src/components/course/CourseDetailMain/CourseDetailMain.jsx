import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ImageInfo from '../ImageInfo/ImageInfo'
import CourseCommentTab from '../CourseCommentTab/CourseCommentTab'
import CourseDetailSection from '../CourseDetailSection/CourseDetailSection'
import CourseDesc from '../CourseDesc/CourseDesc'
import CourseComments from '../CourseComments/CourseComments'


const CourseDetailMain = () => {

  const {t} = useTranslation();

  const [activeTab, setActiveTab] = useState(
    localStorage.getItem('courseActiveTab') || 'detail'
  );

  useEffect(() => {
    localStorage.setItem('courseActiveTab', activeTab);
  }, [activeTab]);

  return (
    <div className='flex flex-col gap-4'>
      <ImageInfo/>
      <CourseCommentTab activeTab={activeTab} setActiveTab={setActiveTab}/>
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