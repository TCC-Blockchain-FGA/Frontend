import SetupHolder from './config/holderConfig.js';

function login(data) {
    return SetupHolder.post('/login', data);
}

function loginOrg(data) {
    return SetupHolder.post('/loginOrg', data);
}

function register(data) {
    return SetupHolder.post('/register', data);
}

function updateRegister(data) {
    return SetupHolder.post('/updateRegister', data);
}

function userData(data) {
    return SetupHolder.post('/userData', data);
}

function generateCredential(data) {
    return SetupHolder.post('/generateCredential', data);
}

function getCredentials(data) {
    return SetupHolder.post('/getCredentials', data);
}

function userByLogin(data) {
    return SetupHolder.post('/userByLogin', data);
}

const HolderServices = {
    login,
    register,
    updateRegister,
    userData,
    loginOrg,
    generateCredential,
    getCredentials,
    userByLogin
}

export default HolderServices;
