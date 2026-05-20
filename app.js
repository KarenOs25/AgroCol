// Cargar datos al iniciar
document.addEventListener('DOMContentLoaded', mostrarInventario);

function mostrarFormulario() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('form-section').classList.remove('hidden');
}

function ocultarFormulario() {
    document.getElementById('main-menu').classList.remove('hidden');
    document.getElementById('form-section').classList.remove('hidden');
}

function guardarProducto() {
    const nombre = document.getElementById('nombre').value;
    const cantidad = document.getElementById('cantidad').value;
    
    // Guardar en localStorage
    let inventario = JSON.parse(localStorage.getItem('inventario')) || [];
    inventario.push({ nombre, cantidad });
    localStorage.setItem('inventario', JSON.stringify(inventario));
    
    alert("¡Registrado!");
    mostrarInventario();
    ocultarFormulario();
}

function mostrarInventario() {
    const lista = document.getElementById('inventario');
    lista.innerHTML = "";
    let inventario = JSON.parse(localStorage.getItem('inventario')) || [];
    inventario.forEach(item => {
        lista.innerHTML += `<li>${item.nombre} - ${item.cantidad} unidades</li>`;
    });
}