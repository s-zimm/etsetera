import { combineReducers } from 'redux';
import { SET_CATEGORIES, SET_PRODUCTS } from '../actions/actions';

const categoriesReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return action.payload
    }
    return state;
}

const productsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.payload
    }
    return state;
}

const usersReducer = (state = [], action) => {
    return state
}

const authentication = (state = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWUwY2NiY2Y0YTlmZjAwMTQ2NjU3ZGQiLCJpYXQiOjE1MjQ2ODIwNTIsImV4cCI6MTUyNzI3NDA1Mn0.huKbQu2mikb4bEWhWhsi_4tEq7HCttp8JFh9wopaty4', action) => {
    return state;
}

export default combineReducers({
    categories: categoriesReducer,
    users: usersReducer,
    products: productsReducer,
    authentication
});