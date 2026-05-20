/**
 * Módulo de Inventario - AgroCol S.A.S
 * Gestiona el cálculo automático de stock y alertas.
 */

const Inventory = {
    // Lista de productos precargados para demostración (esto simula tu base de datos)
    products: JSON.parse(localStorage.getItem('agrocol_inventory')) || [
        { id: 1, nombre: "Tomate Orgánico", cantidad: 5, unidad: "kg" },
        { id: 2, nombre: "Cebolla Cabezona", cantidad: 20, unidad: "kg" }
    ],

    // Función para renderizar la tabla y aplicar la lógica de alertas
    renderInventory() {
        const tableBody = document.querySelector('#inv-table tbody');
        tableBody.innerHTML = ''; // Limpiar tabla

        this.products.forEach(p => {
            // Lógica de alerta: si es menor a 10kg, marcamos la fila con clase 'warning'
            const isLowStock = p.cantidad < 10;
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${p.nombre}</td>
                <td>${p.cantidad} ${p.unidad}</td>
                <td class="${isLowStock ? 'alert-row' : 'status-ok'}">
                    ${isLowStock ? '<i class="fas fa-exclamation-triangle"></i> Bajo Stock' : 'Disponible'}
                </td>
            `;
            tableBody.appendChild(row);
        });
    },

    // Guardar cambios en LocalStorage para que los datos persistan
    save() {
        localStorage.setItem('agrocol_inventory', JSON.stringify(this.products));
        this.renderInventory();
    }
};

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => Inventory.renderInventory());