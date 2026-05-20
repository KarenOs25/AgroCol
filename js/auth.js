const Auth = {
    register(user, pass) {
        if(user && pass) {
            localStorage.setItem('user_db', JSON.stringify({user, pass}));
            alert("Usuario registrado con éxito. Ya puedes ingresar.");
            window.location.href = "login.html";
        } else {
            alert("Por favor, llena todos los campos.");
        }
    },
    
    login(user, pass) {
        const stored = JSON.parse(localStorage.getItem('user_db'));
        if(stored && user === stored.user && pass === stored.pass) {
            sessionStorage.setItem('isLogged', 'true');
            window.location.href = "index.html";
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    },

    logout() {
        sessionStorage.clear();
        window.location.href = "login.html";
    },

    validate() {
        // Obtenemos la ruta actual para saber dónde estamos
        const path = window.location.pathname;
        
        // Páginas públicas donde NO necesitamos validar sesión
        const esPublico = path.includes('login.html') || path.includes('register.html');
        
        // Si la página NO es pública y NO hay sesión iniciada, enviamos al login
        if (!esPublico && !sessionStorage.getItem('isLogged')) {
            window.location.href = 'login.html';
        }
    }
};