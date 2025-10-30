import { useState, useEffect } from 'react';
import apiClient from '../../../../core/interceptor/interceptor';


const startEndDate = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const fetchCourses = async () => {
    setIsLoading(true);
    try{
      const response = await apiClient.get();
      const courses = response;
      setCourses(courses);
      setIsError(false);
    }
    catch(error){
      setIsError(true);
    }
    finally{
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // if(!url) return;
    fetchCourses();
  }, []);

  return {courses, setCourses, fetchCourses, isLoading, isError};
};

export default startEndDate;