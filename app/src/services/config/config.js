import axios from 'axios';

const SetupBackEnd = axios.create({
    baseURL: 'https://localhost:5000'
    // baseURL: 'https://192.168.0.109:5000'
    // baseURL: 'https://18.222.114.102:5000'
});

export default SetupBackEnd;
