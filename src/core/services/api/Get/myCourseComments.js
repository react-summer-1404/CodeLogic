import Http from '../../../interceptor/interceptor';

const myCourseComments = async (params) => {
    try {
        const result = await Http.get('/SharePanel/GetMyCoursesComments', { params });
        return result;
    } catch (error) {
        console.log(error);
    }
};

export default myCourseComments;