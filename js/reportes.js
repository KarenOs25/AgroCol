if (!sessionStorage.getItem('isLogged')) {
    window.location.href = 'login.html';
}

const Reports = {
    generateReport() {
        const main = document.getElementById('main-content');
        main.innerHTML = `
            <h1>REPORTE DE INVENTARIO</h1>
            <button onclick="Reports.exportToExcel()">Exportar a Excel</button>
            <table id="report-table">
                <thead><tr><th>PRODUCTO</th><th>CANTIDAD</th></tr></thead>
                <tbody id="report-body"></tbody>
            </table>
        `;
        Auth.validate(); // Seguridad
    },
    exportToExcel() {
        let csv = "PRODUCTO,CANTIDAD\n";
        const data = JSON.parse(localStorage.getItem('products')) || [];
        data.forEach(p => csv += `${p.nombre},${p.cantidad}\n`);
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "Reporte_AgroCol.csv";
        a.click();
    }
};