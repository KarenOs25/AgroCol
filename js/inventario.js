const Inventory = {
    render() {
        document.getElementById('main-content').innerHTML = `
            <div class="card">
                <h2>Gestión de Inventario</h2>
                <input type="text" id="name" placeholder="Nombre">
                <input type="number" id="qty" placeholder="Cantidad">
                <button class="btn btn-success" onclick="Inventory.add()">Registrar</button>
            </div>`;
    },
    add() {
        const nombre = document.getElementById('name').value;
        const cantidad = parseInt(document.getElementById('qty').value);
        let p = Storage.get('products');
        p.push({nombre, cantidad});
        Storage.save('products', p);
        alert("Producto registrado");
        App.renderDashboard();
    }
};