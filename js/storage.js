// js/storage.js - Base de datos simulada en LocalStorage
const DataManager = {
    getProducts: () => JSON.parse(localStorage.getItem('products')) || [],
    saveProduct: (prod) => {
        let prods = DataManager.getProducts();
        prods.push(prod);
        localStorage.setItem('products', JSON.stringify(prods));
    },
    // Método para calcular stock total automáticamente
    getTotalStock: () => {
        return DataManager.getProducts().reduce((acc, p) => acc + parseInt(p.cantidad), 0);
    }
};