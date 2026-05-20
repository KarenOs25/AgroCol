if (!sessionStorage.getItem('isLogged')) {
    window.location.href = 'login.html';
}

const Inventory = {
    // Cargar datos
    getAll: () => JSON.parse(localStorage.getItem('products')) || [],
    
    // Guardar nuevo producto
    add: (product) => {
        const list = Inventory.getAll();
        list.push({ ...product, id: Date.now() });
        localStorage.setItem('products', JSON.stringify(list));
        alert("Producto registrado correctamente");
    },
    
    // Eliminar producto
    delete: (id) => {
        let list = Inventory.getAll();
        list = list.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(list));
        renderInventario(); // Refrescar vista
    }
};