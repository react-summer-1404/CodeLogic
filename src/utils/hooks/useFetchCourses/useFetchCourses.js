import { useState, useEffect, useMemo } from 'react';
import apiClient from '../../../core/interceptor/interceptor';


const useFetchCourses = (url, pageNumber = 1, pageSize = 10) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0); 
  
  const finalUrl = useMemo(() => {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}PageNumber=${pageNumber}&RowsOfPage=${pageSize}`;
  }, [url, pageNumber, pageSize]); 


  useEffect(() => {
    const fetchData = async () => {
      if(!url) return;
      setIsLoading(true);
      try{
        const response = await apiClient.get(finalUrl); 
        setCourses(response.data?.courseFilterDtos || []);
        setTotalRecords(response.data.totalCount || 0); 
      }
      catch(error){
        setCourses([]);
        setTotalRecords(0); 
      }
      finally{
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [finalUrl]); 

  return {courses, totalRecords, isLoading};
};

export default useFetchCourses;