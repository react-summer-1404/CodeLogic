import React from 'react'
import { useTranslation } from 'react-i18next';
import StarsRating from '../StarsRating/StarsRating';


const UserSatisfaction = () => {

    const {t, i18n} = useTranslation();
    const isRtl = i18n.language === 'fa';

  return (
    <div className='flex flex-col gap-[20px] w-[380px] p-4 bg-[#FFFFFF] rounded-[25px] shadow-[0_0_10px_rgba(0,0,0,0.15)]'>
        <h3>{t('userSatisfaction.title')}</h3>
        <div className='flex justify-between'>
          <StarsRating/>
          <div className={`flex gap-1 ${isRtl ? 'rtl' : 'ltr'}`}>
            <span>{3.5}</span>
            <span>{t('userSatisfaction.score')}</span>
          </div>
        </div>
    </div>
  )
}

export default UserSatisfaction