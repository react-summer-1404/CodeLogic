import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'


const CourseCommentTab = ({activeTab, setActiveTab}) => {

  const {t} = useTranslation();

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  }

  return (
    <div className='flex gap-2 pt-10'>
      <button onClick={() => setActiveTab('detail')} className={`py-[9px] px-4 rounded-[48px] cursor-pointer
      ${activeTab === 'detail' ? 'text-[#FFFFFF] bg-[#008C78]' : ''}`}>
        {t('مشخصات دوره')}
      </button>
      <button onClick={() => {setActiveTab('comment')}} className={`py-[9px] px-4 rounded-[48px] cursor-pointer
      ${activeTab === 'comment' ? 'text-[#FFFFFF] bg-[#008C78]' : ''}`}>
        {t('نظرات کاربران')}
      </button>
    </div>
  )
}

export default CourseCommentTab