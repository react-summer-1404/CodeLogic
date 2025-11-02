import React from 'react'
import UserPanelSearch from '../../../components/common/UserPanelSearch/UserPanelSearch'
import UserPanelFilter from '../../../components/common/UserPanelFilter/UserPanelFilter'
import UserPanelTitle from '../../../components/common/UserPanelTitle/UserPanelTitle' 
import UserPanelShowNumber from '../../../components/common/UserPanelShowNumber/UserPanelShowNumber'
import { useTranslation } from 'react-i18next'
import ReactPaginate from 'react-paginate'



const MyCourses = () => {

  const {t} = useTranslation();

  return (
    <div className='flex flex-col gap-10 h-[85%] p-8 bg-[#F3F4F6] rounded-4xl   dark:bg-[#333333]'>
      <div className='flex justify-between items-center'>
        <UserPanelSearch width={'w-[439px]'}/>  
        <UserPanelFilter/>
      </div>
      <div className='h-[440px] p-6 bg-[#FFFFFF] rounded-2xl'>
        <UserPanelTitle 
        titleData={{
          title1: t('myCourses.title1'), pl1: 'pl-32',
          title2: t('myCourses.title2'), pl2: 'pl-16',
          title3: t('myCourses.title3'), pl3: 'pl-14',
          title4: t('myCourses.title4'), pl4: 'pl-14',
          title5: t('myCourses.title5'), pl5: 'pl-14',
          title6: t('myCourses.title6'), pl6: 'pl-14'
        }}/>
      </div>
      <div className='flex justify-between items-center'>
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          previousLabel="< "
          // onPageChange={handlePageChange}
          // pageCount={pageSize}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          // forcePage={currentPage}
          containerClassName="flex flex-wrap justify-center gap-1 sm:gap-2"
          pageClassName="px-3 py-2 sm:px-5 sm:py-3 rounded-[15px] font-semibold shadow-md cursor-pointer text-sm sm:text-xl bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
          activeClassName="!bg-[#008C78] text-white rounded-2xl shadow-md"
          previousClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
          nextClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
          previousLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
          nextLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
        />
        <UserPanelShowNumber/>
      </div>
    </div>
  )
}

export default MyCourses