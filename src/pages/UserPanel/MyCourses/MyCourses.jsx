import React from 'react'
import UserPanelSearch from '../../../components/common/UserPanelSearch/UserPanelSearch'
import UserPanelFilter from '../../../components/common/UserPanelFilter/UserPanelFilter'



const MyCourses = () => {

  return (
    <div className='h-[85%]'>
      <div className='flex justify-between items-center'>
        <UserPanelSearch width='439px'/>  
        <UserPanelFilter/>
      </div>
    </div>
  )
}

export default MyCourses