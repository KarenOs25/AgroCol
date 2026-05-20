function renderDashboard() {
    const main = document.getElementById('main-content');
    main.innerHTML = `
        <h1>Inicio</h1>
        <div class="card-grid">
            <div class="card"><h3>Inicio</h3><p>Ir al dashboard</p></div>
            <div class="card"><h3>Entradas/Salidas</h3><p>Registrar</p></div>
            <div class="card"><h3>Reportes</h3><p>Ver estadísticas</p></div>
            <div class="card"><h3>Inventario</h3><p>Ver productos</p></div>
        </div>
        <div class="alert-box">
            <i class="fas fa-exclamation-triangle"></i> <strong>Alerta: ¡Stock bajo!</strong><br>
            Tomate Chonto (Menos de 10 kg)
        </div>
    `;
}