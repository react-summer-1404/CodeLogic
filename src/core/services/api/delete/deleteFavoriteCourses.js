import http from '../../../interceptor/interceptor'


export const deleteFavoriteCourses = async (params) => {
    try {
        const result = await http.delete('/Course/DeleteCourseFavorite', { courseId: params });
        console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}