/**
 * Módulo de Reportes - AgroCol S.A.S
 * Gestiona la visualización, filtrado e impresión de reportes.
 */

const Reports = {
    
    generateReport() {
        const main = document.getElementById('main-content');
        
        // Estructura HTML del módulo de reportes
        main.innerHTML = `
            <div class="report-header">
                <h1>REPORTE DE INVENTARIO</h1>
            </div>
            
            <div class="report-filters">
                <input type="date" id="fecha-desde">
                <input type="date" id="fecha-hasta">
                <select id="producto-filtro">
                    <option value="Todos">Todos</option>
                </select>
                <button onclick="Reports.filterData()" class="btn-action"><i class="fas fa-search"></i> Generar</button>
                <button onclick="window.print()" class="btn-action"><i class="fas fa-print"></i> Imprimir</button>
                <button onclick="Reports.exportToExcel()" class="btn-action"><i class="fas fa-file-excel"></i> Exportar a Excel</button>
            </div>

            <table id="report-table">
                <thead>
                    <tr><th>ID</th><th>PRODUCTO</th><th>TIPO</th><th>CANTIDAD</th><th>UNIDAD</th><th>FECHA</th></tr>
                </thead>
                <tbody id="report-body">
                    </tbody>
            </table>
        `;
        
        // Cargar los datos iniciales al generar la vista
        this.renderTable(JSON.parse(localStorage.getItem('agrocol_inventory')) || []);
    },

    renderTable(data) {
        const tbody = document.getElementById('report-body');
        tbody.innerHTML = data.map(p => `
            <tr>
                <td>${p.id || '001'}</td>
                <td>${p.nombre}</td>
                <td>${p.tipo || 'Verdura'}</td>
                <td>${p.cantidad}</td>
                <td>${p.unidad || 'kg'}</td>
                <td>${new Date().toLocaleDateString()}</td>
            </tr>
        `).join('');
    },

    exportToExcel() {
        const data = JSON.parse(localStorage.getItem('agrocol_inventory')) || [];
        let csvContent = "ID,PRODUCTO,TIPO,CANTIDAD,UNIDAD,FECHA REGISTRO\n";
        
        data.forEach(p => {
            const row = [p.id || '001', p.nombre, p.tipo || 'Verdura', p.cantidad, p.unidad || 'kg', new Date().toLocaleDateString()].join(",");
            csvContent += row + "\n";
        });

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "Reporte_AgroCol.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },

    filterData() {
        alert("Filtros aplicados. (La lógica de fechas se activará al seleccionar un rango).");
    }
};