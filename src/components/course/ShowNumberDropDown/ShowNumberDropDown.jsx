import React from 'react'
import { useTranslation } from 'react-i18next'


const ShowNumberDropDown = () => {

    const {t} = useTranslation();

  return (
    <div>
        <select name="" id="" className='py-2 pr-4 pl-4 font-regular text-base text-[#848484] rounded-[15px] border 
        border-[#EAEAEA]'>
            <option value="">{t('15')}</option>
            <option value="">{t('12')}</option>
            <option value="">{t('9')}</option>
            <option value="">{t('6')}</option>
            <option value="">{t('3')}</option>
            <option value="">{t('1')}</option>
        </select>
    </div>
  )
}

export default ShowNumberDropDown