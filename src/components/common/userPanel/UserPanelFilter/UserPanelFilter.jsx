import React from 'react'
import { useTranslation } from 'react-i18next'


const UserPanelFilter = () => {

  const {t} = useTranslation();

  return (
    <select className='py-[10px] px-4 font-regular text-base text-[#1E1E1E] bg-[#FFFFFF] border border-[#EAEAEA] rounded-2xl
    outline-0
    dark:text-[#CCCCCC] dark:bg-[#454545]'>
      <option>{t('userPanelFilter.option1')}</option>
    </select>
  )
}

export default UserPanelFilter