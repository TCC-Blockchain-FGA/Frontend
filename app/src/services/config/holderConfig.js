import axios from 'axios';

const SetupHolder = axios.create({
    baseURL: 'https://localhost:5001'
    // baseURL: 'https://146.190.157.57:5001/'
});

// "start": "export PORT=443&&export HTTPS=true&&SSL_CRT_FILE=cert.pem&&SSL_KEY_FILE=key.pem react-scripts start",
export default SetupHolder;
