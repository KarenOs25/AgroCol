// js/auth-guard.js
(function() {
    if (!sessionStorage.getItem('isLogged')) {
        window.location.href = 'login.html';
    }
})();