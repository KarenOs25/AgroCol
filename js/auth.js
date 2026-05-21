const Auth = {
    registrar() {
        const u = document.getElementById('u').value;
        const p = document.getElementById('p').value;
        if (!u || !p) return alert("Completa los campos");
        
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find(x => x.user === u)) return alert("Usuario ya existe");
        
        users.push({ user: u, pass: p });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Usuario creado. Ahora ingresa.");
        window.location.href = 'login.html';
    },

    login() {
        const u = document.getElementById('u').value;
        const p = document.getElementById('p').value;
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        if (users.find(x => x.user === u && x.pass === p)) {
            sessionStorage.setItem('session', 'true');
            window.location.href = 'index.html';
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    },

    logout() {
        sessionStorage.removeItem('session');
        window.location.href = 'login.html';
    }
};