import SetupBackEnd from './config/config.js';

function login(data) {
    return SetupBackEnd.post('/login', data);
}

function loginOrg(data) {
    return SetupBackEnd.post('/loginOrg', data);
}

function register(data) {
    return SetupBackEnd.post('/register', data);
}

function updateRegister(data) {
    return SetupBackEnd.post('/updateRegister', data);
}

function userData(data) {
    return SetupBackEnd.post('/userData', data);
}

function generateCredential(data) {
    return SetupBackEnd.post('/generateCredential', data);
}

const BackendServices = {
    login,
    register,
    updateRegister,
    userData,
    loginOrg,
    generateCredential
}

export default BackendServices;
