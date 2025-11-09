import http from "../../../interceptor/interceptor.js";
export const PutTwoStepVerify = async (payload) => {
  try {
    const result = await http.put("/SharePanel/EditSecurity", payload);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
