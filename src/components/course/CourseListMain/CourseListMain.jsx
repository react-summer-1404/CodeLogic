import React, { useState, useMemo, useCallback} from 'react'
import CourseCardView1 from '../../common/CourseCardView1/CourseCardView1'
import CourseCardView2 from '../../common/CourseCardView2/CourseCardView2'
import useFetchCourses from '../../../utils/hooks/useFetchCourses/useFetchCourses'
import SortView from '../SortView/SortView'
import PaginationButtons from '../../common/PaginationButtons/PaginationButtons'


const VIEW_TYPE_LIST = 'list';
const VIEW_TYPE_GRID = 'grid';
const SORT_COLUMN = 'startTime'; 
const DEFAULT_SORT_TYPE = 'DESC';

const Main = ({ searchQuery }) => {

  
  const [currentView, setCurrentView] = useState(VIEW_TYPE_GRID);
  const [currentPage, setCurrentPage] = useState(1); 
  const [pageSize, setPageSize] = useState(3);
  const [sortType, setSortType] = useState(DEFAULT_SORT_TYPE);


  const handleViewChange = (viewType) => {
    setCurrentView(viewType);
  };
  const CourseCardComponent = currentView === VIEW_TYPE_LIST ? CourseCardView2 : CourseCardView1
  

  const apiQuery = useMemo(() => {
    const baseUrl = '/Home/GetCoursesWithPagination';
    const params = [];

    params.push(`SortingCol=${SORT_COLUMN}`);
    params.push(`SortType=${sortType}`);

    if (searchQuery) {
      params.push(`Query=${searchQuery}`);
    }

    const queryString = params.length > 0 ? `?${params.join('&')}` : '';

    return `${baseUrl}${queryString}`;

}, [searchQuery, sortType]);
  


  // ۲. فراخوانی Hook با ارسال شماره صفحه و اندازه صفحه
  const { 
    courses: coursesData,
    totalRecords = 0, 
    isLoading 
  } = useFetchCourses(apiQuery, currentPage, pageSize); 
  // ۳. محاسبه تعداد کل صفحات (ساده و مستقیم)
  const totalPages = useMemo(() => {
    return Math.ceil(totalRecords / pageSize);
  }, [totalRecords, pageSize]);
  // ۴. تابع تغییر صفحه برای دکمه‌ها
  const handlePageChange = (newPage) => {
    // فقط در صورتی صفحه را عوض کن که معتبر باشد
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };


  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1); 
  };



  const handleSortChange = useCallback((newSortType) => {
    setSortType(newSortType);
    setCurrentPage(1); 
  }, []);


  return (

    <div className='flex flex-col gap-8'>
      <SortView onViewChange={handleViewChange} currentView={currentView} currentPageSize={pageSize} 
      onPageSizeChange={handlePageSizeChange}/>
      <div className='flex flex-row flex-wrap gap-y-8 gap-x-4'>
        {
          coursesData.filter(item => item.imageAddress && item.imageAddress.trim() !== '').map((item, index) => {
            return <CourseCardComponent item={item} key={index} />
          })
        }
      </div>
      <PaginationButtons currentPage={currentPage} totalPages={totalPages} isLoading={isLoading} onPageChange={handlePageChange}/>
    </div>
  )
}

export default Main