import http from '../../../interceptor/interceptor.js';
export const deleteFavCourses = async (id) => {
    try {
        const formData = new FormData();
        formData.append('CourseFavoriteId', id);
        const result = await http.delete('/Course/DeleteCourseFavorite', formData);
        console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
};
