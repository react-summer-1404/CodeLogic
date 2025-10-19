import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'


const CourseCommentTab = () => {

    const {t} = useTranslation();

    const [toggleTab, setToggleTab] = useState(false);

  return (
    <div className='flex gap-2 pt-10'>
      <button onClick={() => setToggleTab(!toggleTab)} className={`py-[9px] px-4 rounded-[48px] cursor-pointer
      ${toggleTab ? '' : 'text-[#FFFFFF] bg-[#008C78]'}`}>
          {t('مشخصات دوره')}
      </button>
      <button onClick={() => {setToggleTab(!toggleTab)}} className={`py-[9px] px-4 rounded-[48px] cursor-pointer
      ${toggleTab ? 'text-[#FFFFFF] bg-[#008C78]' : ''}`}>
          {t('نظرات کاربران')}
      </button>
    </div>
  )
}

export default CourseCommentTab