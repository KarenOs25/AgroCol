/**
 * Módulo de Reportes - AgroCol S.A.S
 * Gestión avanzada de inventarios, filtros y exportación profesional.
 */

const Reports = {
    // 1. Generar la estructura de la vista de reportes
    generateReport() {
        const main = document.getElementById('main-content');
        main.innerHTML = `
            <div class="report-container">
                <h1>REPORTE DE INVENTARIO</h1>
                <div class="report-filters">
                    <input type="date" id="fecha-desde">
                    <input type="date" id="fecha-hasta">
                    <button onclick="Reports.filterData()" class="btn-action">Filtrar</button>
                    <button onclick="Reports.exportToExcel()" class="btn-action"><i class="fas fa-file-excel"></i> Exportar a Excel</button>
                </div>
                <table id="report-table">
                    <thead>
                        <tr><th>ID</th><th>PRODUCTO</th><th>TIPO</th><th>CANTIDAD</th><th>UNIDAD</th></tr>
                    </thead>
                    <tbody id="report-body"></tbody>
                </table>
            </div>
        `;
        this.renderTable(JSON.parse(localStorage.getItem('products')) || []);
    },

    // 2. Renderizar la tabla con datos
    renderTable(data) {
        const tbody = document.getElementById('report-body');
        tbody.innerHTML = data.map(p => `
            <tr>
                <td>${p.id}</td>
                <td>${p.nombre}</td>
                <td>${p.tipo}</td>
                <td>${p.cantidad}</td>
                <td>${p.unidad}</td>
            </tr>
        `).join('');
    },

    // 3. Lógica de Exportación a Excel (Formato CSV nativo)
    exportToExcel() {
        const data = JSON.parse(localStorage.getItem('products')) || [];
        let csv = "ID,PRODUCTO,TIPO,CANTIDAD,UNIDAD\n";
        
        data.forEach(p => {
            csv += `${p.id},${p.nombre},${p.tipo},${p.cantidad},${p.unidad}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Reporte_AgroCol_${new Date().toLocaleDateString()}.csv`;
        a.click();
    },

    // 4. Lógica de Filtrado
    filterData() {
        const desde = document.getElementById('fecha-desde').value;
        const hasta = document.getElementById('fecha-hasta').value;
        alert(`Filtrando datos desde ${desde} hasta ${hasta}...`);
        // Aquí conectarías con tu lógica de fechas
    }
};