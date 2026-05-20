let inventario = JSON.parse(localStorage.getItem('agrocol_db')) || [];

function saveProduct() {
    const p = {
        nombre: document.getElementById('nombre').value,
        tipo: document.getElementById('tipo').value,
        cantidad: parseInt(document.getElementById('cantidad').value)
    };
    if(!p.nombre || p.cantidad < 0) return alert("Datos inválidos");
    inventario.push(p);
    localStorage.setItem('agrocol_db', JSON.stringify(inventario));
    updateDashboard();
    hideForm();
}

function updateDashboard() {
    document.getElementById('total-productos').innerText = inventario.length;
    const bajos = inventario.filter(i => i.cantidad < 10).length;
    document.querySelector('#alerta-stock p').innerText = bajos;
    renderTable();
}

function renderTable() {
    const tbody = document.querySelector('#tabla-inventario tbody');
    tbody.innerHTML = inventario.map(i => `
        <tr><td>${i.nombre}</td><td>${i.tipo}</td><td>${i.cantidad}</td>
        <td><button onclick="addStock('${i.nombre}')">+</button></td></tr>
    `).join('');
}

function showSection(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function showForm() { document.getElementById('modal').classList.remove('hidden'); }
function hideForm() { document.getElementById('modal').classList.add('hidden'); }

updateDashboard();