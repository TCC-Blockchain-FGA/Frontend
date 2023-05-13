import axios from 'axios';

const SetupBackEnd = axios.create({
    baseURL: 'http://localhost:5000'
});

export default SetupBackEnd;
