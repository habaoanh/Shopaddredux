
const addCartReducer = (state = [], action) => {
    if (action.type === 'ADD_CART') {
        return [{
            product: action.product,
            quantity: 1,
        }].concat(state);
    }
    if (action.type === 'ADD') {
        return state.map(e => {
            if (e.product.id !== action.id) return e;
            return { ...e, quantity: e.quantity + 1 };
        });
    }
    if (action.type === 'SUB') {
        return state.map(e => {
            if (e.product.id !== action.id) return e;
            return { ...e, quantity: e.quantity - 1 };
        });
    }
    if (action.type === 'REMOVE') {
        return state.filter(e => e.product.id !== action.id);
    }
    return state;
};
export default addCartReducer;
