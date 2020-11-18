import { combineReducers } from 'redux';
import DataReducer from './data';

const appReducer = combineReducers({
    data: DataReducer,
});

const rootReducer = (state, action) => {
    let newState = state;
    return appReducer (newState, action);
};

export default rootReducer;
