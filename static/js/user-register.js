firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = '../../pages/home/home.html';
    }
})


function onChangeEmail() {
    toggleRegisterButtonDisable();
    toggleEmailErrors();
}


function onChangePassword() {
    validatePasswordsMatch();
    togglePasswordErrors();
    toggleRegisterButtonDisable();
}


function onChangeConfirmPassword() {
    validatePasswordsMatch();
    toggleRegisterButtonDisable()
}


function login() {
    showLoading();
    window.location.href = '../../index.html'
}


function register() {
    showLoading();

    const email = form.email().value;
    const password = form.password().value;
    firebase.auth().createUserWithEmailAndPassword(
        email, password
    ).then(() => {
        hideLoading();
        window.location.href = '../../pages/home/home.html';
    }).catch(error => {
        hideLoading();
        alert(getUserErrorMessage(error));
    })
}


function validatePasswordsMatch() {
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    form.confirmPasswordDoesntMatchError().style.display = password == confirmPassword ? 'none' : 'block';
}


function togglePasswordErrors() {
    const password = form.password().value;

    form.passwordRequiredError().style.display = password ? 'none' : 'block';
    form.passwordMinLengthError().style.display = password.length >= 6 ? 'none' : 'block';
}


function toggleRegisterButtonDisable() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    const confirmPasswordValid = isConfirmPasswordValid();
    form.registerButton().disabled = !emailValid || !passwordValid || !confirmPasswordValid;
}
