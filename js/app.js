const App = {
    init() {
        // Al iniciar, si hay productos en el almacenamiento, los muestra; si no, inicia vacío
        this.renderInventario();
    },

    renderInventario() {
        const inv = JSON.parse(localStorage.getItem('products')) || [];
        let html = `
            <div class="content-box">
                <h1>Inventario AgroCol</h1>
                <div class="input-group">
                    <input id="n-prod" placeholder="Nombre del producto">
                    <input id="c-prod" type="number" placeholder="Cantidad">
                    <button onclick="Inventory.agregarProducto()">Agregar Producto</button>
                </div>
                <table>
                    <thead>
                        <tr><th>Producto</th><th>Stock</th><th>Acción</th></tr>
                    </thead>
                    <tbody>
                        ${inv.map((p, index) => `
                            <tr>
                                <td>${p.nombre}</td>
                                <td>${p.cantidad}</td>
                                <td><button onclick="Inventory.eliminarProducto(${index})">Eliminar</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        document.getElementById('main-content').innerHTML = html;
    }
};

const Inventory = {
    agregarProducto() {
        const nombre = document.getElementById('n-prod').value;
        const cantidad = document.getElementById('c-prod').value;
        if (nombre && cantidad) {
            let inv = JSON.parse(localStorage.getItem('products')) || [];
            inv.push({ nombre, cantidad: parseInt(cantidad) });
            localStorage.setItem('products', JSON.stringify(inv));
            App.renderInventario();
        } else {
            alert("Por favor llena ambos campos");
        }
    },
    eliminarProducto(index) {
        let inv = JSON.parse(localStorage.getItem('products'));
        inv.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(inv));
        App.renderInventario();
    }
};