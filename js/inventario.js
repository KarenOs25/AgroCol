// js/inventario.js - Módulo de Gestión de Inventario
const Inventory = {
    // Renderiza el formulario para agregar productos
    render() {
        document.getElementById('main-content').innerHTML = `
            <div class="card">
                <h2>Registrar Nuevo Producto</h2>
                <div class="input-group">
                    <input type="text" id="id-prod" placeholder="ID (ej: A001)">
                    <input type="text" id="desc-prod" placeholder="Descripción del producto">
                    <input type="number" id="kg-prod" placeholder="Cantidad en Kg">
                    <input type="number" id="und-prod" placeholder="Cantidad en Unidades">
                    <button class="btn btn-success" onclick="Inventory.add()">Guardar Producto</button>
                </div>
            </div>
        `;
    },

    // Agrega el producto al almacenamiento local
    add() {
        const id = document.getElementById('id-prod').value;
        const descripcion = document.getElementById('desc-prod').value;
        const kg = document.getElementById('kg-prod').value;
        const und = document.getElementById('und-prod').value;

        if (id && descripcion && kg && und) {
            let products = Storage.get('products');
            products.push({ id, descripcion, kg, und });
            Storage.save('products', products);
            
            alert("¡Producto registrado con éxito!");
            // Regresamos al dashboard para ver la tabla actualizada
            App.renderDashboard();
        } else {
            alert("Por favor, completa todos los campos.");
        }
    }
};