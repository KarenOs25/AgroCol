const Movements = {
    registerExit(productId, quantity) {
        const p = Inventory.products.find(prod => prod.id === productId);
        if(p && p.cantidad >= quantity) {
            p.cantidad -= quantity;
            Inventory.save();
            alert("Salida registrada");
        } else {
            alert("Stock insuficiente");
        }
    }
};