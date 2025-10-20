import React from 'react'
import { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import SideDropDown from '../../common/SideDropDown/SideDropDown';
import ArrowUp from '../../../assets/Icons/ArrowUp';
import Search from '../../../assets/Icons/Search'
import { useTranslation } from 'react-i18next';


const CourseListSide = ({handleSearchSubmit}) => {

  const {t} = useTranslation();

  const [startValue, setStartValue] = useState(new Date());
  const [endValue, setEndValue] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [search , setSearch] = useState('');


  const handleKeyDown = (e) => {
    if(e.key === 'Enter' && handleSearchSubmit){
      handleSearchSubmit(search); 
    }
  };
    
  const handleSearchClick = () => {
    if(handleSearchSubmit){
      handleSearchSubmit(search);
    }
  };



  return (
    <div className='flex flex-col gap-4'>

      <div className='relative'>
        <input type='search' placeholder='جستجو ...' value={search} onChange={(e) => {setSearch(e.target.value)}} 
        onKeyDown={handleKeyDown} 
        className='w-[284px] h-[46px] px-4 font-regular text-base text-[#848484] bg-[#FFFFFF] rounded-[15px] outline-0'/>
        <div onClick={handleSearchClick} className='absolute top-[15px] left-4'>
          <Search/>
        </div>
      </div>

      <div className='flex flex-col p-4 bg-[#FFFFFF] rounded-[15px] gap-4 w-[284px]'>
        <div onClick={() => {setIsOpen(!isOpen)}} className='flex justify-between cursor-pointer'>
          <span className='font-bold text-[18px] text-[#1E1E1E]'>{t('تاریخ شروع برگزاری و پایان')}</span>
          <button className={`${isOpen ? 'rotate-0' : 'rotate-180'}`}>
            <ArrowUp/>
          </button>
        </div>
        {isOpen &&
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <span className='font-regular text-base text-[#1E1E1E]'>{t('شروع')}</span>
              <DatePicker value={startValue} onChange={setStartValue} calendar={persian} locale={persian_fa} format="YYYY/MM/DD" 
              calendarPosition="bottom-right" inputClass='px-4 h-[46px] border border-[#A6A6A6] rounded-[15px]'/>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='font-regular text-base text-[#1E1E1E]'>پایان</span>
              <DatePicker value={endValue} onChange={setEndValue} calendar={persian} locale={persian_fa} format="YYYY/MM/DD" 
              calendarPosition="bottom-right" inputClass='px-4 h-[46px] border border-[#A6A6A6] rounded-[15px]'/>
            </div>
          </div>
        }
      </div>

      <SideDropDown title={'سطح دوره'} item1={'حرفه ای'} item2={'متوسط'} item3={'تازه کار'}/>
      <SideDropDown title={'اساتید'} item1={'دکتر محمدحسین بحرالعلومی'} item2={'آقای ایکس'} item3={'آقای فلان فلان'}/>
      <SideDropDown title={'تکنولوژی ها'} item1={'فرانت اند'} item2={'بک اند'} item3={'UI UX'}/>

    </div>
  )
}

export default CourseListSide