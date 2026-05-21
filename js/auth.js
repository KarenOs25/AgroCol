const Auth = {
    login(user, pass) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const u = users.find(x => x.user === user && x.pass === pass);
        if (u) {
            const session = { ...u, loginTime: new Date().getTime() };
            sessionStorage.setItem('session', JSON.stringify(session));
            return true;
        }
        return false;
    },
    checkSession() {
        const s = JSON.parse(sessionStorage.getItem('session'));
        if (!s) window.location.href = 'login.html';
        if (new Date().getTime() - s.loginTime > 20 * 60 * 1000) {
            this.logout();
        }
    },
    logout() {
        sessionStorage.removeItem('session');
        window.location.href = 'login.html';
    },
    getRole() { return JSON.parse(sessionStorage.getItem('session'))?.role; }
};