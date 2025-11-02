import React, { useState } from 'react'
import SideDropDown from '../../common/SideDropDown/SideDropDown';
import PriceFilter from '../PriceFilter/PriceFilter';
import { useTranslation } from 'react-i18next';
import CourseNewsSearch from '../../common/CourseNewsSearch/CourseNewsSearch';
import StartEndDate from '../StartEndDate/StartEndDate';


const CourseListSide = ({handleSearchSubmit}) => {
  
  
  const {t} = useTranslation();
  

  return (
    <div className='w-full flex flex-col gap-4
    md:w-[284px]'>
      <CourseNewsSearch handleSearchSubmit={handleSearchSubmit}/>
      <StartEndDate/>
      <SideDropDown title={t('sideDropDown.title1')} item1={t('sideDropDown.title1Item1')} 
      item2={t('sideDropDown.title1Item2')} item3={t('sideDropDown.title1Item3')} />
      <SideDropDown title={t('sideDropDown.title2')} item1={t('sideDropDown.title2Item1')} 
      item2={t('sideDropDown.title2Item2')} item3={t('sideDropDown.title2Item3')} />
      <SideDropDown title={t('sideDropDown.title3')} item1={t('sideDropDown.title3Item1')} 
      item2={t('sideDropDown.title3Item2')} item3={'UI UX'} />
      <PriceFilter/>

    </div>
  )
}

export default CourseListSide