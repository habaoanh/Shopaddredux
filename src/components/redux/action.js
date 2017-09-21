export function addCart(product) {
    return { type: 'ADD_PRODUCT', product };
}
export function add(id) {
    return { type: 'ADD', id };
}
export function sub(id) {
    return { type: 'SUB', id };
}
