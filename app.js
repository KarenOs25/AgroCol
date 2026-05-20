const App = {
    views: {
        dashboard: `
            <div class="stats-container">
                <div class="card"><h3>Total Productos</h3><p id="total-prod">0</p></div>
                <div class="card alert"><h3>Stock Bajo</h3><p id="low-stock">0</p></div>
            </div>
            <div id="movimientos-recientes"></div>
        `,
        inventario: `
            <div class="table-actions">
                <button onclick="Inventory.openModal()">+ Nuevo Producto</button>
            </div>
            <table id="inv-table">...</table>
        `
    },
    
    render(view) {
        if (!AuthService.checkSession()) return;
        document.getElementById('app').innerHTML = this.views[view];
        this.initViewLogic(view);
    },

    initViewLogic(view) {
        // Lógica específica para cada vista
    }
};