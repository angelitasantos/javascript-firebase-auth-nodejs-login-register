function voltarHome() {
    window.location.href = '../home/home.html';
}


function onChangeDate() {
    const date = form.date().value;
    form.dateRequiredError().style.display = !date ? 'block' : 'none';

    toggleSaveButtonDisable();
}


function onChangeValue() {
    const value = form.value().value;
    form.valueRequiredError().style.display = !value ? 'block' : 'none';
    form.valueLessOrEqualToZeroError().style.display = value <= 0 ? 'block' : 'none';

    toggleSaveButtonDisable();
}


function onChangeTransactionType() {
    const transactionType = form.transactionType().value;
    form.transactionTypeRequiredError().style.display = !transactionType ? 'block' : 'none';

    toggleSaveButtonDisable();
}


function toggleSaveButtonDisable() {
    form.saveButton().disabled = !isDateValid() || !isValueValid() || !isTransactionTypeValid();
}


function isDateValid() {
    const date = form.date().value;
    if (!date) {
        return false;
    } else if (date == '') {
        return false;
    } else {
        return true;
    } 
}


function isValueValid() {
    const value = form.value().value;
    if (!value) {
        return false;
    } else if (value <= 0) {
        return false;
    } else {
        return true;
    } 
}


function isTransactionTypeValid() {
    const transactionType = form.transactionType().value;
    if (!transactionType) {
        return false;
    } else {
        return true;
    } 
}


const form = {
    date: () => document.getElementById('date'),
    dateRequiredError: () => document.getElementById('date-required-error'),
    saveButton: () => document.getElementById('save-button'),
    transactionType: () => document.getElementById('transaction-type'),
    transactionTypeRequiredError: () => document.getElementById('transaction-type-required-error'),
    value: () => document.getElementById('value'),
    valueRequiredError: () => document.getElementById('value-required-error'),
    valueLessOrEqualToZeroError: () => document.getElementById('value-less-or-equal-to-zero-error')
}