import Http from '../../../interceptor/interceptor';

const myNewsComments = async (params) => {
    try {
        const result = await Http.get('/SharePanel/GetMyNewsComments', { params });
        return result;
    } catch (error) {
        console.log(error);
    }
};

export default myNewsComments;  