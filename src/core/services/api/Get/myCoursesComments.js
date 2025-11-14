import Http from '../../../interceptor/interceptor';

const myCoursesComments = async (params) => {
    try {
        const result = await Http.get('/SharePanel/GetMyCoursesComments', { params });
        return result;
    } catch (error) {
        console.log(error);
    }
};

export default myCoursesComments;