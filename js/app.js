const App = {
    renderDashboard() {
        const prods = Storage.get('products');
        const lowStock = prods.filter(p => p.cantidad < 10);
        
        let html = `<h1>Dashboard AgroCol</h1>`;
        
        if(lowStock.length > 0) {
            html += `<div class="alert-low-stock">⚠️ ALERTA: ${lowStock.map(p=>p.nombre).join(', ')} tienen bajo stock.</div>`;
        }
        
        html += `<div class="card">
            <h2>Inventario en Tiempo Real</h2>
            <table id="table">
                <thead><tr><th>Producto</th><th>Cantidad</th><th>Acción</th></tr></thead>
                <tbody>${prods.map((p, i) => `<tr><td>${p.nombre}</td><td>${p.cantidad}</td>
                <td><button class="btn btn-danger" onclick="App.delete(${i})">Eliminar</button></td></tr>`).join('')}</tbody>
            </table>
        </div>`;
        document.getElementById('main-content').innerHTML = html;
    },
    delete(i) {
        let p = Storage.get('products');
        p.splice(i, 1);
        Storage.save('products', p);
        this.renderDashboard();
    }
};