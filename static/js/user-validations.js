function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}


function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}


function isPasswordValid() {
    return form.password().value ? true : false;
}


function isConfirmPasswordValid() {
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;
    if (password == confirmPassword){
        return form.confirmPassword().value ? true : false;
    } else {
        return false
    }
}


function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? 'none' : 'block';
    form.emailInvalidError().style.display = validateEmail(email) ? 'none' : 'block';
}