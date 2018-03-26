import { combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import todoApp  from './todoApp.reducer';

const rootReducer = combineReducers({
    todoApp,
    counterReducer,
});

export default rootReducer;

