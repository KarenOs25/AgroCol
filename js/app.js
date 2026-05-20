if (!sessionStorage.getItem('isLogged')) {
    window.location.href = 'login.html';
}

const App = {
    init() {
        Auth.validate();
        this.renderDashboard();
    },
    renderDashboard() {
        document.getElementById('main-content').innerHTML = `
            <h1>Dashboard</h1>
            <div class="card"><h3>Bienvenido al sistema AgroCol</h3></div>
            <div class="alert-box">Alerta: Verificar stock de productos.</div>
        `;
    }
};