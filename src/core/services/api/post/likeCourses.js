import http from '../../../interceptor/interceptor.js';

export const likeCourses = async (params) => {
    try {
        const result = await http.post('/Course/AddCourseLike', { courseId: params });
        console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
};
