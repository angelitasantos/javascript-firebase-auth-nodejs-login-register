const firebaseConfig = {
    apiKey: 'AIzaSyAEnamhEx3rlGSgysnUqVlxLknBvCfbYUQ',
    authDomain: 'controle-de-gastos-v01.firebaseapp.com',
    projectId: 'controle-de-gastos-v01',
    storageBucket: 'controle-de-gastos-v01.appspot.com',
    messagingSenderId: '481060228501',
    appId: '1:481060228501:web:33ed2c78a4a73779fe7a9c'
};

firebase.initializeApp(firebaseConfig);

const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    
    loginButton: () => document.getElementById('login-button'),
    registerButton: () => document.getElementById('register-button'),
    
    password: () => document.getElementById('password'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    passwordMinLengthError: () => document.getElementById('password-min-length-error'),
    recoverPasswordButton: () => document.getElementById('recover-password-button'),

    confirmPassword: () => document.getElementById('confirmPassword'),
    confirmPasswordDoesntMatchError: () => document.getElementById('password-doesnot-match-error'),
}


