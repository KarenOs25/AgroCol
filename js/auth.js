const Auth = {
    registrar() {
        const user = document.querySelector('input[type=text]').value;
        const pass = document.querySelector('input[type=password]').value;
        if(!user || !pass) return alert("Completa los campos");
        
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push({ user, pass });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Registro exitoso");
        window.location.href = 'login.html';
    },

    login() {
        const user = document.querySelector('input[type=text]').value;
        const pass = document.querySelector('input[type=password]').value;
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        if (users.find(u => u.user === user && u.pass === pass)) {
            sessionStorage.setItem('session', 'true');
            window.location.href = 'index.html';
        } else {
            alert("Credenciales incorrectas");
        }
    },

    logout() {
        sessionStorage.removeItem('session');
        window.location.href = 'login.html';
    }
};