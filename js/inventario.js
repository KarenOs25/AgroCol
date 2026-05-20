const Inventory = {
    render() {
        document.getElementById('main-content').innerHTML = `
            <div class="card">
                <h2>Registrar Producto</h2>
                <input id="id" placeholder="ID"><input id="desc" placeholder="Descripción">
                <input id="kg" type="number" placeholder="Kg"><input id="und" type="number" placeholder="Unds">
                <button class="btn" onclick="Inventory.save()">Guardar</button>
            </div>
        `;
    },
    save() {
        const p = { 
            id: document.getElementById('id').value,
            desc: document.getElementById('desc').value,
            kg: document.getElementById('kg').value,
            und: document.getElementById('und').value
        };
        let prods = Storage.get('products');
        prods.push(p);
        Storage.save('products', prods);
        alert("Guardado");
        App.renderDashboard();
    }
};