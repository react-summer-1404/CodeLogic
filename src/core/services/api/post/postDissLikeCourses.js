import http from '../../../interceptor/interceptor.js';

export const postDissLikeCourses = async (params) => {
    try {
        const result = await http.post('/Course/AddCourseDissLike', { courseId: params });
        console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
};
