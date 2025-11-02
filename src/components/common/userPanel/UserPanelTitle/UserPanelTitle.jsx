import React from 'react'

const UserPanelTitle = ({titleData}) => {
  return (
    <div>
        <ul className='flex font-semibold text-base text-[#1E1E1E]'>
          <li className={`${titleData.pl1}`}>{titleData.title1}</li>
          <li className={`${titleData.pl2}`}>{titleData.title2}</li>
          <li className={`${titleData.pl3}`}>{titleData.title3}</li>
          <li className={`${titleData.pl4}`}>{titleData.title4}</li>
          <li className={`${titleData.pl5}`}>{titleData.title5}</li>
          <li className={`${titleData.pl6}`}>{titleData.title6}</li>
        </ul>
    </div>
  )
}

export default UserPanelTitle