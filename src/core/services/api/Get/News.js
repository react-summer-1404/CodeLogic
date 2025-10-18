import Http from "../../../interceptor/interceptor";

const News = async (payload) => {
  try {
    const result = await Http.get("/News/:Id", payload);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export default News;
