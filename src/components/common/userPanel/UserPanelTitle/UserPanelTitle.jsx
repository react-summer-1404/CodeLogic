import React from 'react'

const UserPanelTitle = ({titleData}) => {
  return (
    <div>
        <ul className='flex font-semibold text-base text-[#1E1E1E]    dark:text-[#CCCCCC]'>
          <li className={`${titleData.pr1}`}>{titleData.title1}</li>
          <li className={`${titleData.pr2}`}>{titleData.title2}</li>
          <li className={`${titleData.pr3}`}>{titleData.title3}</li>
          <li className={`${titleData.pr4}`}>{titleData.title4}</li>
          <li className={`${titleData.pr5}`}>{titleData.title5}</li>
          <li className={`${titleData.pr6}`}>{titleData.title6}</li>
        </ul>
    </div>
  )
}

export default UserPanelTitle