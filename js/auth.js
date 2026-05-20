const AuthService = {
    login(username, password) {
        const users = DB.get('users');
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            sessionStorage.setItem('session', JSON.stringify({
                user: user.username,
                loginTime: Date.now()
            }));
            window.location.href = 'index.html';
        } else {
            alert('Credenciales incorrectas');
        }
    },
    
    validate() {
        const session = JSON.parse(sessionStorage.getItem('session'));
        if (!session || (Date.now() - session.loginTime) > 1200000) {
            window.location.href = 'login.html';
        }
    }
};