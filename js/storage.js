/**
 * Motor de Base de Datos Local - AgroCol
 */
const DB = {
    save: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
    get: (key) => JSON.parse(localStorage.getItem(key)) || [],
    
    // Inicializar datos demo si está vacío
    init() {
        if (!this.get('products').length) {
            this.save('products', [
                { id: '001', nombre: 'Tomate Chonto', tipo: 'Verdura', cantidad: 8, unidad: 'kg' },
                { id: '002', nombre: 'Papa Pastusa', tipo: 'Tubérculo', cantidad: 50, unidad: 'kg' }
            ]);
        }
    }
};
DB.init();