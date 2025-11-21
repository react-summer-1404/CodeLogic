import Http from '../../../interceptor/interceptor';

const getCourseTechnologies = async (params) => {
    try {
        const result = await Http.get('/Home/GetTechnologies', { params });
        return result;
    } catch (error) {
        console.log(error);
    }
};

export default getCourseTechnologies;
