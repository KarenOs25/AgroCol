const Inventory = {
    render() {
        document.getElementById('main-content').innerHTML = `
            <div class="card">
                <h2>Registrar Producto / Cosecha</h2>
                <input type="text" id="id" placeholder="ID"><input type="text" id="desc" placeholder="Descripción">
                <input type="number" id="kg" placeholder="Kg"><input type="number" id="und" placeholder="Unidades">
                <button class="btn-action btn-edit" onclick="Inventory.save()">Registrar</button>
            </div>`;
    },

    save() {
        const p = { 
            id: document.getElementById('id').value,
            descripcion: document.getElementById('desc').value,
            kg: document.getElementById('kg').value,
            und: document.getElementById('und').value
        };
        let prods = Storage.get('products');
        prods.push(p);
        Storage.save('products', prods);
        Storage.addMovement('ENTRADA', p.descripcion, p.kg); // RF-09
        alert("Guardado correctamente");
        App.renderDashboard();
    }
};