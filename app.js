const users = { admin: "1234", ventas: "1234", produccion: "1234" };
let inventory = JSON.parse(localStorage.getItem('agrocol_db')) || [];

function auth() {
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;
    if (users[u] === p) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('app-screen').classList.remove('hidden');
        show('dashboard');
    } else { document.getElementById('error-msg').innerText = "Credenciales incorrectas"; }
}

function show(section) {
    const main = document.getElementById('main-content');
    if(section === 'dashboard') {
        main.innerHTML = `<h1>Dashboard</h1>
            <div class="card"><h3>Total Productos: ${inventory.length}</h3></div>
            <div class="card"><h3>Alertas Stock Bajo: ${inventory.filter(i => i.cantidad < 10).length}</h3></div>`;
    } else if(section === 'inventario') {
        main.innerHTML = `<h1>Inventario</h1>
            <input type="text" id="newProd" placeholder="Nombre Producto">
            <input type="number" id="newCant" placeholder="Cantidad">
            <button onclick="addProduct()">Guardar</button>
            <table>${inventory.map(i => `<tr><td>${i.nombre}</td><td class="${i.cantidad < 10 ? 'warning' : ''}">${i.cantidad}</td></tr>`).join('')}</table>`;
    }
}

function addProduct() {
    const nombre = document.getElementById('newProd').value;
    const cantidad = parseInt(document.getElementById('newCant').value);
    if(!nombre || isNaN(cantidad)) return alert("Completa los campos");
    inventory.push({nombre, cantidad});
    localStorage.setItem('agrocol_db', JSON.stringify(inventory));
    show('inventario');
}

function logout() { location.reload(); }