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

  const {t, i18n} = useTranslation();
  const isRtl = i18n.language === "fa";

  const [startValue, setStartValue] = useState(new Date());
  const [endValue, setEndValue] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');


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
        <input type='search' placeholder={t('courseListSide.searchPlaceholder')} value={search} onChange={(e) => {setSearch(e.target.value)}} 
        onKeyDown={handleKeyDown} 
        className='w-[284px] h-[46px] px-4 font-regular text-base text-[#848484] bg-[#FFFFFF] rounded-[15px] outline-0'/>
        <div onClick={handleSearchClick} className={`absolute top-[15px] ${isRtl ? 'left-4' : 'right-4'}`}>
          <Search />
        </div>
      </div>

      <div className='flex flex-col p-4 bg-[#FFFFFF] rounded-[15px] gap-4 w-[284px]'>
        <div onClick={() => {setIsOpen(!isOpen)}} className='flex justify-between cursor-pointer'>
          <span className='font-bold text-[18px] text-[#1E1E1E]'>{t('courseListSide.startEndDate')}</span>
          <button className={`${isOpen ? 'rotate-0' : 'rotate-180'}`}>
            <ArrowUp />
          </button>
        </div>
        {isOpen &&
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <span className='font-regular text-base text-[#1E1E1E]'>{t('courseListSide.start')}</span>
              <DatePicker value={startValue} onChange={setStartValue} calendar={persian} locale={persian_fa} format="YYYY/MM/DD" 
              calendarPosition="bottom-right" inputClass='px-4 h-[46px] border border-[#A6A6A6] rounded-[15px]'/>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='font-regular text-base text-[#1E1E1E]'>{t('courseListSide.end')}</span>
              <DatePicker value={endValue} onChange={setEndValue} calendar={persian} locale={persian_fa} format="YYYY/MM/DD"
                calendarPosition="bottom-right" inputClass='px-4 h-[46px] border border-[#A6A6A6] rounded-[15px]' />
            </div>
          </div>
        }
      </div>

      <SideDropDown title={t('sideDropDown.title1')} item1={t('sideDropDown.title1Item1')} 
      item2={t('sideDropDown.title1Item2')} item3={t('sideDropDown.title1Item3')} />
      <SideDropDown title={t('sideDropDown.title2')} item1={t('sideDropDown.title2Item1')} 
      item2={t('sideDropDown.title2Item2')} item3={t('sideDropDown.title2Item3')} />
      <SideDropDown title={t('sideDropDown.title3')} item1={t('sideDropDown.title3Item1')} 
      item2={t('sideDropDown.title3Item2')} item3={'UI UX'} />

    </div>
  )
}

export default CourseListSide