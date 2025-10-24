import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ArrowUp from '../../../assets/Icons/ArrowUp'



const SideDropDown = ({title, item1, item2, item3}) => {

    const {t} = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [showMore , setShowMore] = useState(false);

    const checkboxClasses = 'w-[26px] h-[26px] rounded-2xl text-[#008C78] border-gray-300 checked:bg-[#008C78]';

  return (
    <div className='flex flex-col gap-4 w-full p-4 bg-[#FFFFFF] rounded-[15px] cursor-pointer
    md:w-[284px]'>     
        <div onClick={() => {setIsOpen(!isOpen)}} className='flex justify-between items-center w-full'>
            <span className='font-bo ld text-[18px] text-[#1E1E1E]'>{t(`${title}`)}</span>
            <button className={`${isOpen ? 'rotate-0' : 'rotate-180'}`}>
                <ArrowUp/>
            </button>
        </div>
        {isOpen && 
            <div className='flex flex-col items-start gap-4 w-full'>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className={`${checkboxClasses}`}/>
                    <span className='font-regular text-sm text-[#1E1E1E]'>{t(`${item1}`)}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className={`${checkboxClasses}`}/>
                    <span className='font-regular text-sm text-[#1E1E1E]'>{t(`${item2}`)}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className={`${checkboxClasses}`}/>
                    <span className='font-regular text-sm text-[#1E1E1E]'>{t(`${item3}`)}</span>
                </div>
                {showMore &&
                    <div className='flex flex-col items-start gap-4 w-full'>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' className={`${checkboxClasses}`}/>
                            <span className='font-regular text-sm text-[#1E1E1E]'>{t(`${item1}`)}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' className={`${checkboxClasses}`}/>
                            <span className='font-regular text-sm text-[#1E1E1E]'>{t(`${item2}`)}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' className={`${checkboxClasses}`}/>
                            <span className='font-regular text-sm text-[#1E1E1E]'>{t(`${item3}`)}</span>
                        </div>
                    </div>
                }
                <button onClick={() => {setShowMore(!showMore)}} className='font-regular text-sm text-[#008C78] cursor-pointer'>
                    {showMore ? t('- نمایش کمتر') : t('+ نمایش بیشتر')}
                </button>
            </div>
        }
    </div>
  )
}

export default SideDropDown