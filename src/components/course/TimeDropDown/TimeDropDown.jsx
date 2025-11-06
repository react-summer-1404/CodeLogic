import React from 'react';
import { useTranslation } from 'react-i18next';


const TimeDropDown = ({ currentSortType, setSortingCol}) => {

  const {t} = useTranslation();

  return (
    <select id="sort-time" name="sort_time" value={currentSortType} onChange={(e) => setSortingCol(e.target.value)}
    className='font-regular text-base text-[#848484] border border-[#EAEAEA] outline-0 py-1 pr-2 pl-2 rounded-[12px]
    lg:py-2 lg:pr-4 lg:pl-4 lg:rounded-[15px]
    dark:text-[#CCCCCC]'>
      <option value="DESC">
        {t('timeDropDown.option1')}
      </option>
      <option value="ASC">
        {t('timeDropDown.option2')}
      </option>
    </select>
  )
}

export default TimeDropDown