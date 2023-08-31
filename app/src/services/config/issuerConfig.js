import axios from 'axios';

const SetupIssuer = axios.create({
    baseURL: 'https://localhost:5000'
    // baseURL: 'https://146.190.157.57:5000/'
});

// "start": "export PORT=443&&export HTTPS=true&&SSL_CRT_FILE=cert.pem&&SSL_KEY_FILE=key.pem react-scripts start",
export default SetupIssuer;
