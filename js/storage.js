const Storage = {
    save: (k, d) => localStorage.setItem(k, JSON.stringify(d)),
    get: (k) => JSON.parse(localStorage.getItem(k)) || [],
    initData: () => {
        if(!localStorage.getItem('products')) Storage.save('products', [{id:1, nombre:'Tomate', cantidad: 3}]);
    }
};
Storage.initData();