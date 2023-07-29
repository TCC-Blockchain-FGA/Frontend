import axios from 'axios';

const SetupIssuer = axios.create({
    baseURL: 'https://localhost:5000'
    // baseURL: 'https://3.145.67.169:5000/'
    // baseURL: 'https://192.168.0.109:5000'
    // baseURL: 'https://18.222.114.102:5000'
});

// "start": "export PORT=443&&export HTTPS=true&&SSL_CRT_FILE=cert.pem&&SSL_KEY_FILE=key.pem react-scripts start",
export default SetupIssuer;
