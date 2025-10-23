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
    <div>
      <select id="sort-time" name="sort_time" value={currentSortType} onChange={handleDropdownChange}
      className='py-2 pr-4 pl-4 font-regular text-base text-[#848484] rounded-[15px] border border-[#EAEAEA] outline-0'>
        <option value="DESC">
          {t('timeDropDown.option1')}
        </option>
        <option value="ASC">
          {t('timeDropDown.option2')}
        </option>
      </select>
    </div>
  )
}

export default TimeDropDown