const Inventario = {
    guardar() {
        const p = {
            nombre: document.getElementById('nombre').value,
            cat: document.getElementById('cat').value,
            cantidad: document.getElementById('cantidad').value
        };
        const prods = JSON.parse(localStorage.getItem('productos') || '[]');
        prods.push(p);
        localStorage.setItem('productos', JSON.stringify(prods));
        alert("Producto registrado");
        render('inventario');
    }
};