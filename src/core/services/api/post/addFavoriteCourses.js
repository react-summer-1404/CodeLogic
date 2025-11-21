import { toast } from "react-toastify";
import http from "../../../interceptor/interceptor.js";

export const addFavoriteCourses = async (params) => {
  try {
    const result = await http.post("/Course/AddCourseFavorite", {
      courseId: params,
    });
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
