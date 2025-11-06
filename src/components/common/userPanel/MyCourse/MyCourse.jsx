import React from 'react'
import Eye from '../../../../assets/Icons/Eye'
import Receipt from '../../../../assets/Icons/Receipt'


const MyCourse = () => {
  return (
    <div className='flex'>
      <div>
        <img src="" alt=""/>
        <span></span>
      </div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div>
        {
          <div className='flex gap-4'>
            <Eye/>
            <Receipt/>
          </div>
        }
      </div>
    </div>
  )
}

export default MyCourse