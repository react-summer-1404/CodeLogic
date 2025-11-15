import Http from '../../../interceptor/interceptor';

const GetMyCourses = async (params) => {
    try {
        const result = await Http.get('/SharePanel/GetMyCourses', { params });
        return result;
    } catch (error) {
        console.log(error);
    }
};

export default GetMyCourses;