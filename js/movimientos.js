const Movements = {
    registrarMovimiento(idProducto, cantidad, tipo) {
        Auth.validate(); // Seguridad
        let inventario = JSON.parse(localStorage.getItem('products')) || [];
        const producto = inventario.find(p => p.id == idProducto);
        if (producto) {
            producto.cantidad = tipo === 'SALIDA' ? producto.cantidad - cantidad : producto.cantidad + cantidad;
            localStorage.setItem('products', JSON.stringify(inventario));
            alert("Movimiento registrado");
        }
    }
};