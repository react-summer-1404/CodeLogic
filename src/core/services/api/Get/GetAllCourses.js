import Http from "../../../interceptor/interceptor";

const GetAllCourses = async (params) => {
    try {
        const result = await Http.get(
            "/Home/GetCoursesWithPagination",
            { params }
        );
        return result;
    } catch (error) {
        console.log(error);
    }

    return {result}
};

export default GetAllCourses;
