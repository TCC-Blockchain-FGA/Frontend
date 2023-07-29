import axios from 'axios';

const SetupHolder = axios.create({
    baseURL: 'https://localhost:5001'
    // baseURL: 'https://3.145.67.169:5001/'
    // baseURL: 'https://192.168.0.109:5001'
    // baseURL: 'https://18.222.114.102:5001'
});

// "start": "export PORT=443&&export HTTPS=true&&SSL_CRT_FILE=cert.pem&&SSL_KEY_FILE=key.pem react-scripts start",
export default SetupHolder;
