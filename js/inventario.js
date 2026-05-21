const Inventario = {
    productos: JSON.parse(localStorage.getItem('productos') || '[]'),

    guardar(p) {
        if (p.id) {
            const idx = this.productos.findIndex(x => x.id == p.id);
            this.productos[idx] = p;
        } else {
            p.id = Date.now();
            this.productos.push(p);
        }
        localStorage.setItem('productos', JSON.stringify(this.productos));
        this.renderTable();
    },

    eliminar(id) {
        if (confirm('¿Eliminar producto?')) {
            this.productos = this.productos.filter(p => p.id != id);
            localStorage.setItem('productos', JSON.stringify(this.productos));
            this.renderTable();
        }
    },

    renderTable(filter = '') {
        const tbody = document.getElementById('lista');
        const prods = this.productos.filter(p => 
            p.nombre.toLowerCase().includes(filter.toLowerCase()) || 
            p.categoria.toLowerCase().includes(filter.toLowerCase())
        );

        tbody.innerHTML = prods.map(p => `
            <tr>
                <td>${p.id.toString().slice(-4)}</td>
                <td>${p.nombre}</td>
                <td>${p.categoria}</td>
                <td>${p.cantidad} ${p.unidad}</td>
                <td>
                    <button class="btn" onclick="editar(${p.id})">Editar</button>
                    <button class="btn" style="background:#e11d48" onclick="Inventario.eliminar(${p.id})">X</button>
                </td>
            </tr>
        `).join('');
    }
};

// Buscador en tiempo real
function filterTable() {
    const term = document.getElementById('search').value;
    Inventario.renderTable(term);
}