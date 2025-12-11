import http from "../../../interceptor/interceptor.js";

export const addCommentCourses = async (commentData, token) => {

  if (!token) throw new Error("User not logged in");
  try{
    const { id, title, describe } = commentData;
    const formData = new FormData();
    formData.append("CourseId", id);
    formData.append("Title", title);
    formData.append("Describe", describe);
    const result = await http.post("/Course/AddCommentCourse", formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return result;
  }
  catch(err){
    console.log(err);
    throw err;
  }

};
