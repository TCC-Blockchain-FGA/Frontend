import axios from 'axios';

const SetupBackEnd = axios.create({
    // baseURL: 'https://localhost:5000'
    baseURL: 'https://192.168.0.109:5000'
});

export default SetupBackEnd;
