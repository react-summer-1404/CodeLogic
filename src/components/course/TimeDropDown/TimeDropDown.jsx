import React from 'react';
import { useTranslation } from 'react-i18next';


const TimeDropDown = ({ currentSortType, onSortChange }) => {

  const {t} = useTranslation();

  const handleDropdownChange = (event) => {
    if (onSortChange) {
      onSortChange(event.target.value); 
    }
  };

  return (
    <select id="sort-time" name="sort_time" value={currentSortType} onChange={handleDropdownChange}
    className='font-regular text-base text-[#848484] border border-[#EAEAEA] outline-0 py-1 pr-2 pl-2 rounded-[12px]
    lg:py-2 lg:pr-4 lg:pl-4 lg:rounded-[15px]'>
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