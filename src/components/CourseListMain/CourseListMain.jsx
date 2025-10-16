import React from 'react'
import CourseCardView1 from '../common/CourseCardView1/CourseCardView1'
import useFetchCourses from '../../utils/hooks/useFetchCourses/useFetchCourses'
import SortView from '../SortView/SortView'



const Main = () => {

  const thisApiUrl = '/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10'
  const { data: coursesData} = useFetchCourses(thisApiUrl);

  return (
    <div className='flex flex-col gap-8'>
      <SortView/>
      <div className='flex flex-row flex-wrap gap-y-8 gap-x-4'>
        {
          coursesData.map((item , index) => {
            return <CourseCardView1 item={item} key={index}/>
          })
        }
      </div>
    </div>
  )
}

export default Main