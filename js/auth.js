const Auth = {
    login() {
        const u = document.getElementById('u').value;
        const p = document.getElementById('p').value;
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Verifica si el usuario existe en el registro
        if (users.find(x => x.user === u && x.pass === p) || (u === "admin" && p === "123")) {
            sessionStorage.setItem('session', 'true');
            window.location.href = 'index.html';
        } else {
            alert("Credenciales incorrectas");
        }
    },

    registrar() {
        const nombre = document.getElementById('nombre').value;
        const u = document.getElementById('u').value;
        const p = document.getElementById('p').value;
        const p2 = document.getElementById('p2').value;

        if (!u || !p) return alert("Completa los campos obligatorios");
        if (p !== p2) return alert("Las contraseñas no coinciden");

        let users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find(x => x.user === u)) return alert("El usuario ya existe");

        users.push({ nombre, user: u, pass: p });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Usuario registrado con éxito");
        window.location.href = 'login.html';
    },

    logout() {
        sessionStorage.removeItem('session');
        window.location.href = 'login.html';
    }
};