import { combineReducers } from 'redux';

import addCartReducer from './addCartReducer';

const reducer = combineReducers({
    cartArray: addCartReducer,
    
});

export default reducer;
