const App = {
    init() {
        Auth.validate();
        this.renderInventario();
    },

    renderInventario() {
        const inv = JSON.parse(localStorage.getItem('products')) || [];
        let html = `
            <div class="content-box">
                <h1>Gestión de Inventario - AgroCol</h1>
                <div class="input-group">
                    <input id="n-prod" placeholder="Nombre producto">
                    <input id="c-prod" type="number" placeholder="Cantidad">
                    <button onclick="Inventory.agregar()">Registrar</button>
                </div>
                <input type="text" id="search" placeholder="Buscar por nombre..." onkeyup="App.filtrar()">
                <table id="tabla-inv">
                    <thead><tr><th>Producto</th><th>Stock</th><th>Acción</th></tr></thead>
                    <tbody>
                        ${inv.map((p, i) => `
                            <tr>
                                <td>${p.nombre}</td>
                                <td>${p.cantidad} ${p.cantidad < 5 ? '⚠️' : ''}</td>
                                <td><button onclick="Inventory.eliminar(${i})">Eliminar</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        document.getElementById('main-content').innerHTML = html;
    },

    filtrar() {
        const query = document.getElementById('search').value.toLowerCase();
        const filas = document.querySelectorAll('#tabla-inv tbody tr');
        filas.forEach(fila => {
            fila.style.display = fila.innerText.toLowerCase().includes(query) ? '' : 'none';
        });
    }
};

const Inventory = {
    agregar() {
        const nombre = document.getElementById('n-prod').value;
        const cantidad = parseInt(document.getElementById('c-prod').value);
        if(nombre && cantidad) {
            let inv = JSON.parse(localStorage.getItem('products')) || [];
            inv.push({ nombre, cantidad });
            localStorage.setItem('products', JSON.stringify(inv));
            App.renderInventario();
        }
    },
    eliminar(index) {
        let inv = JSON.parse(localStorage.getItem('products'));
        inv.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(inv));
        App.renderInventario();
    }
};