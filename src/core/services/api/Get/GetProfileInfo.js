import Http from "../../../interceptor/interceptor";

const GetProfileInfo = async (payload) => {
  try {
    const result = await Http.get("/SharePanel/GetProfileInfo", payload);

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default GetProfileInfo;
