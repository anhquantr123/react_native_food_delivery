import {createStore, combineReducers} from 'redux'
import {foodReducer} from './food-reducer'

const allReducer=combineReducers({
    foodReducer: foodReducer
});

const configureStore = ()=> createStore(allReducer);
export default configureStore
