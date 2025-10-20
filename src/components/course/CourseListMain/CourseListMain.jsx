import React, { useState } from 'react'
import CourseCardView1 from '../../common/CourseCardView1/CourseCardView1'
import CourseCardView2 from '../../common/CourseCardView2/CourseCardView2'
import useFetchCourses from '../../../utils/hooks/useFetchCourses/useFetchCourses'
import SortView from '../SortView/SortView'


const VIEW_TYPE_LIST = 'list';
const VIEW_TYPE_GRID = 'grid';


const Main = ({searchQuery}) => {


  const [currentView, setCurrentView] = useState(VIEW_TYPE_GRID);
  const handleViewChange = (viewType) => {
    setCurrentView(viewType);
  };
  const CourseCardComponent = currentView === VIEW_TYPE_LIST ? CourseCardView2 : CourseCardView1
  
  
  const baseUrl = '/Home/GetCoursesWithPagination';
  const apiQuery = searchQuery ? `${baseUrl}?Query=${searchQuery}`: baseUrl;
  const { data: coursesData} = useFetchCourses(apiQuery);


  return (
    <div className='flex flex-col gap-8'>
      <SortView onViewChange={handleViewChange} currentView={currentView}/>
      <div className='flex flex-row flex-wrap gap-y-8 gap-x-4'>
        {
          coursesData.filter(item => item.imageAddress && item.imageAddress.trim() !== '').map((item , index) => {
            return <CourseCardComponent item={item} key={index}/>
          })
        }
      </div>
    </div>
  )
}

export default Main