import React from 'react'
import UserPanelSearch from '../../../components/common/UserPanelSearch/UserPanelSearch'
import UserPanelFilter from '../../../components/common/UserPanelFilter/UserPanelFilter'
import UserPanelTitle from '../../../components/common/UserPanelTitle/UserPanelTitle' 
import { useTranslation } from 'react-i18next'



const MyCourses = () => {

  const {t} = useTranslation();

  return (
    <div className='h-[85%]'>
      <div className='flex justify-between items-center'>
        <UserPanelSearch width='439px'/>  
        <UserPanelFilter/>
      </div>
      <UserPanelTitle 
      titleData={{
        title1: t('myCourses.title1'),
        title2: t('myCourses.title2'),
        title3: t('myCourses.title3'),
        title4: t('myCourses.title4'),
        title5: t('myCourses.title5'),
        title6: t('myCourses.title6')
      }}/>
    </div>
  )
}

export default MyCourses