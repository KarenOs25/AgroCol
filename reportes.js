const Reports = {
    generateReport() {
        const content = document.getElementById('main-content');
        content.innerHTML = `<h1>Reporte de Inventario</h1><button onclick="window.print()">Imprimir PDF</button>`;
    }
};