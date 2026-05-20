const Auth = {
    register(user, pass) {
        if(user && pass) {
            localStorage.setItem('user_db', JSON.stringify({user, pass}));
            alert("Usuario registrado. Ya puedes ingresar.");
            window.location.href = "login.html";
        } else {
            alert("Completa todos los campos.");
        }
    },
    
    login(user, pass) {
        const stored = JSON.parse(localStorage.getItem('user_db'));
        if(stored && user === stored.user && pass === stored.pass) {
            sessionStorage.setItem('isLogged', 'true');
            window.location.href = "index.html";
        } else {
            alert("Credenciales incorrectas.");
        }
    },

    logout() {
        sessionStorage.clear();
        window.location.href = "login.html";
    },

    validate() {
        const path = window.location.pathname;
        const esPublico = path.includes('login.html') || path.includes('register.html');
        if (!esPublico && !sessionStorage.getItem('isLogged')) {
            window.location.href = 'login.html';
        }
    }
};