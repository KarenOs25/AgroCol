const App = {
    renderDashboard() {
        const prods = Storage.get('products');
        document.getElementById('main-content').innerHTML = `
            <div class="card">
                <h2>Inventario General</h2>
                <table>
                    <thead><tr><th>ID</th><th>Descripción</th><th>Kg</th><th>Unds</th></tr></thead>
                    <tbody>
                        ${prods.map(p => `<tr><td>${p.id}</td><td>${p.desc}</td><td>${p.kg}</td><td>${p.und}</td></tr>`).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
};