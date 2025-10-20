import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import ArrowUp from '../../../assets/Icons/ArrowUp'


const TimeDropDown = () => {

  const {t} = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <select name="" id="" className='py-2 pr-4 pl-4 font-regular text-base text-[#848484] rounded-[15px] border border-[#EAEAEA]'>
        <option value="">
          {t('جدید ترین')}
        </option>
        <option value="">
          {t('قدیمی ترین')}
        </option>
      </select>
    </div>
  )
}

export default TimeDropDown