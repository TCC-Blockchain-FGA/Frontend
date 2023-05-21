import SetupBackEnd from './config/config.js';

function login(data) {
    return SetupBackEnd.post('/login', data);
}

function register(data) {
    return SetupBackEnd.post('/register', data);
}

function userData(data) {
    return SetupBackEnd.post('/userData', data);
}

const BackendServices = {
    login,
    register,
    userData
}

export default BackendServices;
