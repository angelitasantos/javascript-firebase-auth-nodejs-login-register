firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = '../../index.html';
    }
})


function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = '../../index.html';
    }).catch(() => {
        alert('Erro ao fazer logout !!!');
    })
}
