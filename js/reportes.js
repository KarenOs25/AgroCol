const Reportes = {
    generarCSV() {
        const prods = JSON.parse(localStorage.getItem('productos') || '[]');
        let csv = "ID,Nombre,Categoria,Cantidad,Unidad\n";
        
        prods.forEach(p => {
            csv += `${p.id},${p.nombre},${p.categoria},${p.cantidad},${p.unidad}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', 'Reporte_Inventario.csv');
        a.click();
    },

    imprimirHistorial() {
        const hist = JSON.parse(localStorage.getItem('historial') || '[]');
        let win = window.open('', '_blank');
        win.document.write(`
            <html><head><title>Reporte Historial AgroCol</title>
            <style>table{width:100%; border-collapse:collapse;} th,td{border:1px solid #ccc; padding:8px;}</style>
            </head><body>
            <h1>Reporte de Movimientos - AgroCol S.A.S</h1>
            <table>
                <tr><th>Producto ID</th><th>Cantidad</th><th>Tipo</th><th>Fecha</th><th>Usuario</th></tr>
                ${hist.map(h => `<tr><td>${h.id}</td><td>${h.cant}</td><td>${h.tipo}</td><td>${h.fecha}</td><td>${h.user}</td></tr>`).join('')}
            </table>
            <script>window.print();<\/script>
            </body></html>
        `);
    }
};