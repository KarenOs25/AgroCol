const Auth = {
    login() {
        const u = document.getElementById('user').value;
        const p = document.getElementById('pass').value;
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        const validUser = users.find(user => user.user === u && user.pass === p);
        
        if (validUser) {
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