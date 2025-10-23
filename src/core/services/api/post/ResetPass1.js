import http from '../../../interceptor/interceptor'

const ResetPass1 = async (payload) => {
    try {
        const result = await http.post('/Sign/ForgetPassword', payload);
        console.log(result);
        return result;
    }
    catch (err) {
        console.log(err);
    }

}
export default ResetPass1;