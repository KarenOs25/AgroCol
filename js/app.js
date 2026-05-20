// js/app.js
const App = {
    init() {
        if (!sessionStorage.getItem('isLogged')) window.location.href = 'login.html';
        this.renderDashboard();
    },

    renderDashboard() {
        const products = Storage.get('products');
        document.getElementById('main-content').innerHTML = `
            <div class="card">
                <h1>Sistema AgroCol S.A.S</h1>
                <p>Bienvenido al Panel de Control. Selecciona una opción del menú.</p>
            </div>
            <div class="card">
                <h2>Inventario General</h2>
                <input type="text" id="search" placeholder="🔍 Buscar producto..." onkeyup="App.search()">
                <table id="inv-table">
                    <thead><tr><th>Nombre</th><th>Cantidad</th><th>Acción</th></tr></thead>
                    <tbody>
                        ${products.map((p, i) => `
                            <tr>
                                <td>${p.nombre}</td>
                                <td>${p.cantidad}</td>
                                <td><button class="btn btn-danger" onclick="App.delete(${i})">Eliminar</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    },

    search() {
        const query = document.getElementById('search').value.toLowerCase();
        const rows = document.querySelectorAll('#inv-table tbody tr');
        rows.forEach(row => {
            row.style.display = row.innerText.toLowerCase().includes(query) ? '' : 'none';
        });
    },

    delete(index) {
        if(confirm("¿Eliminar este registro?")) {
            let products = Storage.get('products');
            products.splice(index, 1);
            Storage.save('products', products);
            this.renderDashboard();
        }
    }
};