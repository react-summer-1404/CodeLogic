import { useState } from 'react';
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import { useTranslation } from 'react-i18next';
import Arrow from '../../../assets/Icons/Arrow';


const StartEndDate = ({ handleSetStartDate, handleSetEndDate }) => {

  const [isOpen, setIsOpen] = useState(false);


  const { t } = useTranslation();


  return (
    <div className='flex flex-col w-full p-4 bg-[#FFFFFF] rounded-[15px] gap-4   dark:bg-[#454545]
      md:w-[284px]'>
      <div onClick={() => { setIsOpen(!isOpen) }} className='flex justify-between cursor-pointer   dark:text-[#DDDDDD]'>
        <span className='font-bold text-[18px] text-[#1E1E1E]   dark:text-[#DDDDDD]'>{t('courseListSide.startEndDate')}</span>
        <button className={`${isOpen ? 'rotate-90' : 'rotate-270'}`}>
          <Arrow />
        </button>
      </div>
      {isOpen &&
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <span className='font-regular text-base text-[#1E1E1E]   dark:text-[#CCCCCC]'>{t('courseListSide.start')}</span>
            <input
              type='date'
              
              onChange={(e) => handleSetStartDate(e.target.value + "T15:00:00.000Z")}

              locale={gregorian_en}

              className='px-4 h-[46px] border border-[#A6A6A6] rounded-[15px]' />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-regular text-base text-[#1E1E1E]   dark:text-[#CCCCCC]'>{t('courseListSide.end')}</span>
            <input
              type='date'

              onChange={(e) => handleSetEndDate(e.target.value + "T15:00:00.000Z")}
              calendar={gregorian}
              locale={gregorian_en}


              className='px-4 h-[46px] border border-[#A6A6A6] rounded-[15px]' />
          </div>
        </div>
      }
    </div>
  )
}

export default StartEndDate