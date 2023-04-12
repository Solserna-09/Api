import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://my-backend-api.herokuapp.com/api/'

});

export {axiosInstance}
