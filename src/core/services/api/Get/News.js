import Http from "../../../interceptor/interceptor";

const News = async (payload) => {
  try {
    const result = await Http.get(
      "/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC",
      payload
    );

    return result;
  } catch (error) {
    console.log(error);
  }
};

export default News;
