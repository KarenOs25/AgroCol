const Inventory = {
    products: JSON.parse(localStorage.getItem('agrocol_inventory')) || [
        { id: 1, nombre: "Tomate Orgánico", cantidad: 5, unidad: "kg" }
    ],
    renderInventory() {
        const container = document.getElementById('main-content');
        container.innerHTML = `<table><thead><tr><th>Producto</th><th>Cantidad</th><th>Estado</th></tr></thead><tbody></tbody></table>`;
        const tbody = document.querySelector('tbody');
        this.products.forEach(p => {
            const isLow = p.cantidad < 10;
            tbody.innerHTML += `<tr><td>${p.nombre}</td><td>${p.cantidad} ${p.unidad}</td><td class="${isLow ? 'alert-row' : ''}">${isLow ? 'Bajo Stock' : 'OK'}</td></tr>`;
        });
    },
    save() {
        localStorage.setItem('agrocol_inventory', JSON.stringify(this.products));
    }
};