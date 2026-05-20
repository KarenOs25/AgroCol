const App = {
    // Renderizado del contenido central
    loadContent(page) {
        const content = document.getElementById('main-content');
        if (page === 'dashboard') {
            content.innerHTML = `
                <div class="card">
                    <h1>Dashboard AgroCol</h1>
                    <p>Bienvenido al sistema. Gestión de inventarios agrícolas eficiente.</p>
                </div>
                <div class="card">
                    <h2>Inventario Actual</h2>
                    <table>
                        <thead><tr><th>ID</th><th>Descripción</th><th>Kg</th><th>Unds</th></tr></thead>
                        <tbody id="inventory-body"></tbody>
                    </table>
                </div>`;
            this.refreshTable();
        }
    },

    refreshTable() {
        const data = Storage.get('products');
        const tbody = document.getElementById('inventory-body');
        tbody.innerHTML = data.map(p => `
            <tr><td>${p.id}</td><td>${p.descripcion}</td><td>${p.kg}</td><td>${p.und}</td></tr>
        `).join('');
    }
};