let lastId = 0;

export const newId = (prefix) => {
    lastId++; 
    return `${prefix}${lastId}`
}