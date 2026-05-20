const UI = {
    render(view) {
        const main = document.getElementById('main-content');
        switch(view) {
            case 'dashboard':
                this.loadDashboard(main);
                break;
            case 'inventario':
                this.loadInventory(main);
                break;
        }
    },

    loadDashboard(container) {
        const prods = DB.get('products');
        const lowStock = prods.filter(p => p.cantidad < 10);
        
        container.innerHTML = `
            <div class="card-grid">
                <div class="card"><h3>Total Productos</h3><p>${prods.length}</p></div>
                <div class="card alert"><h3>Alerta Stock Bajo</h3><p>${lowStock.length}</p></div>
            </div>
            <div class="alert-box">
                <i class="fas fa-exclamation-triangle"></i> 
                ${lowStock.map(p => `Producto crítico: ${p.nombre}`).join('<br>')}
            </div>
        `;
    }
};