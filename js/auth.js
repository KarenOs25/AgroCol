const AUTH_CONFIG = {
    SESSION_DURATION: 20 * 60 * 1000,
    STORAGE_KEY: 'agrocol_session'
};

const AuthService = {
    checkSession() {
        const session = JSON.parse(sessionStorage.getItem(AUTH_CONFIG.STORAGE_KEY));
        if (!session) return false;
        
        const isExpired = (Date.now() - session.loginTime) > AUTH_CONFIG.SESSION_DURATION;
        if (isExpired) {
            this.logout("Tu sesión ha expirado por seguridad.");
            return false;
        }
        return true;
    },
    logout(message = "Sesión cerrada") {
        sessionStorage.removeItem(AUTH_CONFIG.STORAGE_KEY);
        alert(message);
        window.location.href = "login.html";
    }
};