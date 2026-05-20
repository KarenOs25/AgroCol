const App = {
    renderDashboard() {
        // Obtenemos los productos
        const prods = Storage.get('products'); 
        
        document.getElementById('main-content').innerHTML = `
            <div class="table-container">
                <h2>Inventario de Productos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descripción</th>
                            <th>Cant (Kg)</th>
                            <th>Cant (Und)</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${prods.map((p, i) => `
                            <tr>
                                <td>${p.id || i+1}</td>
                                <td>${p.descripcion}</td>
                                <td>${p.kg}</td>
                                <td>${p.und}</td>
                                <td>
                                    <button class="btn-action btn-edit">Editar</button>
                                    <button class="btn-action btn-delete" onclick="App.delete(${i})">Eliminar</button>
                                </td>
                            </tr>
                        `).join('')}
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