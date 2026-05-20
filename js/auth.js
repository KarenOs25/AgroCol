if (!sessionStorage.getItem('isLogged')) {
    window.location.href = 'login.html';
}

const Auth = {
    login(user, pass) {
        if(user === "admin" && pass === "1234") {
            sessionStorage.setItem('isLogged', 'true');
            window.location.href = "index.html";
        } else {
            alert("Credenciales incorrectas");
        }
    },
    logout() {
        sessionStorage.clear();
        window.location.href = "login.html";
    },
    validate() {
        if (!sessionStorage.getItem('isLogged')) window.location.href = 'login.html';
    }
};