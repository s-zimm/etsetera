import { combineReducers } from 'redux';
import { SET_CATEGORIES } from '../actions/actions';

const categoriesReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return action.payload
    }
    return state;
}

const usersReducer = (state = [], action) => {
    return state
}

export default combineReducers({
    categories: categoriesReducer,
    users: usersReducer
});