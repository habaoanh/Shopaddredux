
const addCartReducer = (state = [], action) => {
    if (action.type === 'ADD_CART') {
        return [{
            id: state.length + 1,
            product: action.product,
            quanlity: 1,
        }].concat(state);
    }
    if (action.type === 'SUB') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, quanlity: e.quanlity + 1 };
        });
    }
    if (action.type === 'SUB') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, quanlity: e.quanlity - 1 };
        });
    }
    return state;
};
export default addCartReducer;
