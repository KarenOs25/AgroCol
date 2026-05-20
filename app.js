const SESSION_DURATION = 20 * 60 * 1000; // 20 minutos en ms

// Validar sesión al cargar
window.onload = () => {
    const session = JSON.parse(localStorage.getItem('session_agrocol'));
    if (session) {
        if (Date.now() - session.startTime < SESSION_DURATION) {
            showApp(session.user);
        } else {
            logout("Tu sesión expiró por seguridad");
        }
    }
};

function register() {
    const user = document.getElementById('r-user').value;
    const pass = document.getElementById('r-pass').value;
    const pass2 = document.getElementById('r-pass2').value;

    if (pass !== pass2 || pass.length < 6) return alert("Error en contraseña");
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.user === user)) return alert("Usuario ya existe");

    users.push({ user, pass });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Usuario registrado");
    toggleView();
}

function login() {
    const u = document.getElementById('l-user').value;
    const p = document.getElementById('l-pass').value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userFound = users.find(usr => usr.user === u && usr.pass === p);

    if (userFound) {
        localStorage.setItem('session_agrocol', JSON.stringify({
            user: u,
            startTime: Date.now()
        }));
        showApp(u);
    } else {
        alert("Credenciales inválidas");
    }
}

function showApp(user) {
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('app-view').classList.remove('hidden');
    document.getElementById('user-display').innerText = `Usuario: ${user}`;
}

function logout(msg = "") {
    localStorage.removeItem('session_agrocol');
    if (msg) alert(msg);
    location.reload();
}

function toggleView() {
    document.getElementById('login-view').classList.toggle('hidden');
    document.getElementById('register-view').classList.toggle('hidden');
}