// js/storage.js
const Storage = {
    // Guarda datos en el navegador
    save: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
    // Obtiene datos del navegador
    get: (key) => JSON.parse(localStorage.getItem(key)) || [],
    
    // Historial para cumplir con RF-09
    recordMovement: (type, product, qty) => {
        const history = Storage.get('history');
        history.push({ type, product, qty, user: 'Admin', date: new Date().toLocaleString() });
        Storage.save('history', history);
    }
};