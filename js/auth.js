const Auth = {
    login() {
        const u = document.getElementById('u').value;
        const p = document.getElementById('p').value;
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find(x => x.user === u && x.pass === p) || (u === "admin" && p === "123")) {
            sessionStorage.setItem('session', 'true');
            window.location.href = 'index.html';
        } else { alert("Credenciales incorrectas"); }
    },
    registrar() {
        const u = document.getElementById('u').value;
        const p = document.getElementById('p').value;
        if (!u || !p) return alert("Completa los campos");
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push({ user: u, pass: p });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Usuario registrado");
        window.location.href = 'login.html';
    },
    logout() {
        sessionStorage.removeItem('session');
        window.location.href = 'login.html';
    }
};