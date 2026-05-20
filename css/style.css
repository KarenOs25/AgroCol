const App = {
    renderDashboard() {
        const prods = Storage.get('products');
        document.getElementById('main-content').innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                <div class="card"><h3>Total Productos</h3><p style="font-size: 24px;">${prods.length}</p></div>
                <div class="card"><h3>Stock Total</h3><p style="font-size: 24px;">${prods.reduce((a,b)=>a+parseInt(b.kg), 0)} Kg</p></div>
                <div class="card"><h3>Alertas</h3><p style="color:red;">${prods.filter(p=>p.kg<10).length} Activas</p></div>
            </div>
            <div class="card">
                <h2>Inventario Reciente</h2>
                <table>
                    <thead><tr><th>ID</th><th>Descripción</th><th>Kg</th><th>Unds</th><th>Acciones</th></tr></thead>
                    <tbody>
                        ${prods.map((p, i) => `<tr>
                            <td>${p.id}</td><td>${p.descripcion}</td><td>${p.kg}</td><td>${p.und}</td>
                            <td><button class="btn-erp btn-delete" onclick="App.delete(${i})">Eliminar</button></td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>
        `;
    },
    delete(i) {
        let p = Storage.get('products');
        p.splice(i, 1);
        Storage.save('products', p);
        this.renderDashboard();
    }
};