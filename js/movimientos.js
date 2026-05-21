const Movimientos = {
    registrar(id, cantidad, tipo) { // tipo: 'ENTRADA' o 'SALIDA'
        let prods = JSON.parse(localStorage.getItem('productos') || '[]');
        const idx = prods.findIndex(p => p.id == id);
        
        if (idx === -1) return alert('Producto no encontrado');

        const cantidadNum = Number(cantidad);
        
        if (tipo === 'SALIDA' && prods[idx].cantidad < cantidadNum) {
            return alert('Stock insuficiente');
        }

        // Actualizar stock
        prods[idx].cantidad = tipo === 'ENTRADA' 
            ? prods[idx].cantidad + cantidadNum 
            : prods[idx].cantidad - cantidadNum;

        localStorage.setItem('productos', JSON.stringify(prods));
        
        // Registrar en historial
        this.guardarHistorial(id, cantidadNum, tipo);
        alert('Movimiento registrado con éxito');
    },

    guardarHistorial(id, cant, tipo) {
        let hist = JSON.parse(localStorage.getItem('historial') || '[]');
        hist.push({
            id, cant, tipo,
            fecha: new Date().toLocaleString(),
            user: JSON.parse(sessionStorage.getItem('session'))?.user || 'Admin'
        });
        localStorage.setItem('historial', JSON.stringify(hist));
    }
};