const Storage = {
    get: (k) => JSON.parse(localStorage.getItem(k)) || [],
    save: (k, d) => localStorage.setItem(k, JSON.stringify(d))
};