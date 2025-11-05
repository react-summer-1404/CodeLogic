import React, {useState} from 'react'
import DatePicker from 'react-multi-date-picker';
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import Arrow from '../../../assets/Icons/Arrow'
import { useTranslation } from 'react-i18next';


const StartEndDate = ({handleSetStartDate , handleSetEndDate}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);

  const {t} = useTranslation();


  return (
    <div className='flex flex-col w-full p-4 bg-[#FFFFFF] rounded-[15px] gap-4
      md:w-[284px]'>
        <div onClick={() => {setIsOpen(!isOpen)}} className='flex justify-between cursor-pointer'>
          <span className='font-bold text-[18px] text-[#1E1E1E]'>{t('courseListSide.startEndDate')}</span>
          <button className={`${isOpen ? 'rotate-90' : 'rotate-270'}`}>
            <Arrow />
          </button>
        </div>
        {isOpen &&
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <span className='font-regular text-base text-[#1E1E1E]'>{t('courseListSide.start')}</span>
              <DatePicker 
              value={startValue} 
              onChange={(startValue) => {setStartValue(startValue); handleSetStartDate(startValue)}} 
              calendar={gregorian} 
              locale={gregorian_en} 
              format="YYYY/MM/DD" 
              calendarPosition="bottom-right" 
              inputClass='px-4 h-[46px] border border-[#A6A6A6] rounded-[15px]'/>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='font-regular text-base text-[#1E1E1E]'>{t('courseListSide.end')}</span>
              <DatePicker 
              value={endValue} 
              onChange={(endDate) => {setEndValue(endDate); handleSetEndDate(endDate)}} 
              calendar={gregorian} 
              locale={gregorian_en} 
              format="YYYY/MM/DD"
              calendarPosition="bottom-right" 
              inputClass='px-4 h-[46px] border border-[#A6A6A6] rounded-[15px]' />
            </div>
          </div>
        }
    </div>
  )
}

export default StartEndDate