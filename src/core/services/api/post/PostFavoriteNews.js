import http from '../../../interceptor/interceptor.js';

export const PostFavoriteNews = async (params) => {
    try {
        const result = await http.post('/News/AddFavoriteNews', { NewsId: params });
        console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
};
