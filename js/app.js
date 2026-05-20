const App = {
    init() {
        if (!sessionStorage.getItem('isLogged')) window.location.href = 'login.html';
        this.renderDashboard();
    },

    renderDashboard() {
        const prods = Storage.get('products');
        const lowStock = prods.filter(p => p.kg < 10); // Alerta stock bajo (RF-05)
        
        document.getElementById('main-content').innerHTML = `
            ${lowStock.length > 0 ? `<div class="card" style="border: 2px solid #ffc107">⚠️ ALERTA STOCK BAJO: ${lowStock.map(p=>p.descripcion).join(', ')}</div>` : ''}
            <div class="table-container">
                <h2>Inventario General (AgroCol S.A.S)</h2>
                <table>
                    <thead><tr><th>ID</th><th>Descripción</th><th>Kg</th><th>Unds</th><th>Acción</th></tr></thead>
                    <tbody>
                        ${prods.map((p, i) => `<tr>
                            <td>${p.id}</td><td>${p.descripcion}</td><td>${p.kg}</td><td>${p.und}</td>
                            <td><button class="btn-action btn-delete" onclick="App.delete(${i})">Eliminar</button></td>
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