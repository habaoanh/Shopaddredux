export function addCart(product, id) {
    return { type: 'ADD_CART', product, id };
}
export function Add(id) {
    return { type: 'ADD', id };
}
export function Sub(id) {
    return { type: 'SUB', id };
}
export function Remove(id) {
    return { type: 'REMOVE', id };
}
