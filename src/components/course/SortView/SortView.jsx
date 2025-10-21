import React from 'react'
import { useTranslation } from 'react-i18next'
import TimeDropDown from '../TimeDropDown/TimeDropDown';
import ShowNumberDropDown from '../ShowNumberDropDown/ShowNumberDropDown';
import CourseListView1 from '../../../assets/Icons/CourseListView1'
import CourseListView2 from '../../../assets/Icons/CourseListView2'


const VIEW_TYPE_LIST = 'list';
const VIEW_TYPE_GRID = 'grid';


const SortView = ({onViewChange, currentView, currentPageSize, onPageSizeChange, currentSortType, onSortChange}) => {

  const { t } = useTranslation();

  const handleViewChange = (viewType) => {
    if (viewType !== currentView && onViewChange) {
      onViewChange(viewType);
    }
  };


  return (
    <div className='flex justify-between items-center w-[1104px] h-18 px-4 bg-[#FFFFFF] rounded-[15px]'>
      <div className='flex items-center gap-4'>
        <span className='font-regular text-base text-[#1E1E1E]'>{t('مرتب سازی بر اساس :')}</span>
        <TimeDropDown currentSortType={currentSortType} onSortChange={onSortChange}/>
        <ShowNumberDropDown currentPageSize={currentPageSize} onPageSizeChange={onPageSizeChange}/>
      </div>
      <div className='flex gap-4'>
        <button onClick={() => { handleViewChange(VIEW_TYPE_LIST) }} className={`p-2 rounded-[48px] ${currentView === VIEW_TYPE_LIST
          ? 'text-[#FFFFFF] bg-[#008C78]' : ''}`}>
          <CourseListView2 />
        </button>
        <button onClick={() => { handleViewChange(VIEW_TYPE_GRID) }} className={`p-2 rounded-[48px] ${currentView === VIEW_TYPE_GRID
          ? 'text-[#FFFFFF] bg-[#008C78]' : ''}`}>
          <CourseListView1 />
        </button>
      </div>
    </div>
  )
}

export default SortView