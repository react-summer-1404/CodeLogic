import http from '../../../interceptor/interceptor.js';
export const deleteFavCourses = async (id) => {
    try {
        const result = await http.delete('/Course/DeleteCourseFavorite', {
            data: { CourseFavoriteId: id },
        });
        console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
};
