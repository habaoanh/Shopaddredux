import { combineReducers } from 'redux';

import addCartReducer from './addCartReducer';

const reducer = combineReducers({
    arrCart: addCartReducer,
    
});

export default reducer;
