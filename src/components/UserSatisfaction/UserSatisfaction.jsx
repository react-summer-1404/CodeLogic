import React from 'react'
import { useTranslation } from 'react-i18next';
import StarsRating from '../StarsRating/StarsRating';


const UserSatisfaction = () => {

    const {t} = useTranslation();

  return (
    <div className='flex flex-col gap-[20px] w-[380px] p-4 bg-[#FFFFFF] rounded-[25px] shadow-[0_0_10px_rgba(0,0,0,0.15)]'>
        <h3>{t('رضایت کاربران')}</h3>
        <div className='flex justify-between'>
          <StarsRating/>
          <span>{t(`${'3.5'} امتیاز`)}</span>
        </div>
    </div>
  )
}

export default UserSatisfaction