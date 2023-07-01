import SetupIssuer from './config/issuerConfig.js';

function login(data) {
    return SetupIssuer.post('/login', data);
}

function loginOrg(data) {
    return SetupIssuer.post('/loginOrg', data);
}

function register(data) {
    return SetupIssuer.post('/register', data);
}

function updateRegister(data) {
    return SetupIssuer.post('/updateRegister', data);
}

function userData(data) {
    return SetupIssuer.post('/userData', data);
}

function generateCredential(data) {
    return SetupIssuer.post('/generateCredential', data);
}

function getCredentials(data) {
    return SetupIssuer.post('/getCredentials', data);
}

function userByLogin(data) {
    return SetupIssuer.post('/userByLogin', data);
}

const IssuerServices = {
    login,
    register,
    updateRegister,
    userData,
    loginOrg,
    generateCredential,
    getCredentials,
    userByLogin
}

export default IssuerServices;
