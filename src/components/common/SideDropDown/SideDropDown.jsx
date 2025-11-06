import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Arrow from '../../../assets/Icons/Arrow'



const SideDropDown = ({title, item1, item2, item3, handleSetCourseLevel, handleSetTeachers, handleSetTechnologies}) => {
    

    const [isOpen, setIsOpen] = useState(false);


    const inputCheck1 = (e) => {
        if(e.target.checked && item1 === t('sideDropDown.title2Item1')){
            handleSetTeachers('rahimy taha')
        }   
        else if(e.target.checked && item1 === t('sideDropDown.title3Item1')){
            handleSetTechnologies(' react next react')
        } 
    }
    const inputCheck2 = (e) => {
        if(e.target.checked && item2 === t('sideDropDown.title3Item2')){
            handleSetTechnologies(' next')
        } 
    }
    const inputCheck3 = (e) => {        
        if(e.target.checked && item3 === t('sideDropDown.title1Item3')){
            handleSetCourseLevel(1) 
        }
    }

    
    const {t} = useTranslation();

    const checkboxClasses = 'w-[26px] h-[26px] rounded-2xl text-[#008C78] border-gray-300 checked:bg-[#008C78]';
    const dropDownText = 'font-regular text-sm text-[#1E1E1E]   dark:text-[#CCCCCC]'


  return (
    <div className='flex flex-col gap-4 w-full p-4 bg-[#FFFFFF] rounded-[15px] cursor-pointer   dark:bg-[#454545]
    md:w-[284px]'>     
        <div onClick={() => {setIsOpen(!isOpen)}} className='flex justify-between items-center w-full
        dark:text-[#DDDDDD]'>
            <span className='font-bold text-[18px] text-[#1E1E1E]   dark:text-[#DDDDDD]'>{t(`${title}`)}</span>
            <button className={`${isOpen ? 'rotate-90' : 'rotate-270'}`}>
                <Arrow/>
            </button>
        </div>
        {isOpen && 
            <div className='flex flex-col items-start gap-4 w-full'>
                <div className='flex items-center gap-2'>
                    <input 
                    onChange={inputCheck1}
                    type='checkbox' className={`${checkboxClasses}`}/>
                    <span className={`${dropDownText}`}>
                        {t(`${item1}`)}    
                    </span>
                </div>
                <div className='flex items-center gap-2'>
                    <input 
                    onChange={inputCheck2}
                    type='checkbox' className={`${checkboxClasses}`}/>
                    <span className={`${dropDownText}`}>
                        {t(`${item2}`)}
                    </span>
                </div>
                <div className='flex items-center gap-2'>
                    <input 
                    onChange={inputCheck3} 
                    type='checkbox' className={`${checkboxClasses}`}/>
                    <span className={`${dropDownText}`}>
                        {t(`${item3}`)}
                    </span>
                </div>
            </div>
        }
    </div>
  )
}

export default SideDropDown