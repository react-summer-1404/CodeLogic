import React from 'react'
import { useTranslation } from 'react-i18next'



const ShowNumberDropDown = ({ currentPageSize, onPageSizeChange }) => {

  const {t} = useTranslation();
  
  const handleChange = (event) => {
    const newSize = Number(event.target.value);
    onPageSizeChange(newSize);
  };

  const options = [15, 12, 9, 6, 3, 1];


  return (
    <div>
      <select value={currentPageSize} onChange={handleChange} className='py-2 pr-4 pl-4 font-regular text-base text-[#848484] 
      rounded-[15px] border border-[#EAEAEA]'>
        {options.map((size) => (
          <option key={size} value={size}>
            {t(size.toString())} 
          </option>
        ))}
      </select>
    </div>
    )
}

export default ShowNumberDropDown