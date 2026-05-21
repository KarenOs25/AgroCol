const Auth = {
    login() {
        const u = document.getElementById('u').value;
        const p = document.getElementById('p').value;
        if (u === "admin" && p === "123") {
            sessionStorage.setItem('session', 'true');
            window.location.href = 'index.html';
        } else { alert("Usuario o contraseña incorrectos"); }
    },
    logout() {
        sessionStorage.removeItem('session');
        window.location.href = 'login.html';
    }
};