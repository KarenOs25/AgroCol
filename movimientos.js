/**
 * Módulo de Movimientos - AgroCol S.A.S
 * Gestiona entradas (cosechas) y salidas (ventas)
 */

const Movements = {
    
    // Registrar una entrada de producto
    registerEntry(productId, quantity, responsable) {
        const product = Inventory.products.find(p => p.id === productId);
        if (product) {
            product.cantidad += parseInt(quantity);
            this.logMovement(productId, 'ENTRADA', quantity, responsable);
            Inventory.save();
            alert("¡Entrada registrada con éxito!");
        }
    },

    // Registrar una salida con validación de stock
    registerExit(productId, quantity, destination, responsable) {
        const product = Inventory.products.find(p => p.id === productId);
        
        if (product && product.cantidad >= quantity) {
            product.cantidad -= parseInt(quantity);
            this.logMovement(productId, 'SALIDA', quantity, responsable, destination);
            Inventory.save();
            alert("¡Salida registrada correctamente!");
        } else {
            alert("Error: Stock insuficiente para esta salida.");
        }
    },

    // Guardar el historial en LocalStorage
    logMovement(prodId, type, qty, user, dest = 'N/A') {
        const history = JSON.parse(localStorage.getItem('agrocol_history')) || [];
        history.push({
            prodId,
            type,
            qty,
            user,
            dest,
            date: new Date().toLocaleString()
        });
        localStorage.setItem('agrocol_history', JSON.stringify(history));
    }
};