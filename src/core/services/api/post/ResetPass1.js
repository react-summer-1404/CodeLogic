import http from "../../../interceptor/interceptor";

const ResetPass1 = async (payload) => {
  try {
    const result = await http.post("/Sign/ForgetPassword", {
      email: payload.email,
      baseUrl: "https://localhost:5173/resetpassword",
    });
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
export default ResetPass1;
