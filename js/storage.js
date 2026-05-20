const Storage = {
    save: (k, d) => localStorage.setItem(k, JSON.stringify(d)),
    get: (k) => JSON.parse(localStorage.getItem(k)) || [],
    
    // RF-09: Historial de movimientos
    addMovement: (type, product, qty) => {
        const history = Storage.get('history');
        history.push({ 
            type, product, qty, 
            date: new Date().toLocaleString(), 
            user: sessionStorage.getItem('username') || 'Admin' 
        });
        Storage.save('history', history);
    }
};