// js/app.js - El controlador central
const App = {
    // Inicialización del sistema
    init() {
        // Verificar autenticación
        const session = sessionStorage.getItem('user_logged');
        if (!session && window.location.pathname !== '/login.html') {
            window.location.href = 'login.html';
        }
        this.renderDashboard();
    },

    renderDashboard() {
        const main = document.getElementById('main-content');
        main.innerHTML = `
            <h1>Inicio</h1>
            <div class="card-grid">
                <div class="card" onclick="renderInventario()"><h3>Inventario</h3><p>Ver productos</p></div>
                <div class="card" onclick="renderReportes()"><h3>Reportes</h3><p>Ver estadísticas</p></div>
            </div>
            <div class="alert-box">Alerta: Tomate Chonto (Stock bajo)</div>
        `;
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());