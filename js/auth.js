// js/auth.js
const Auth = {
    login(user, pass) {
        // Simulación de validación contra LocalStorage
        if(user === "admin" && pass === "1234") {
            sessionStorage.setItem('user_logged', JSON.stringify({username: user}));
            window.location.href = "index.html";
        } else {
            alert("Credenciales incorrectas");
        }
    },
    logout() {
        sessionStorage.removeItem('user_logged');
        window.location.href = "login.html";
    }
};