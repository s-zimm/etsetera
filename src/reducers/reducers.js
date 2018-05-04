import { combineReducers } from 'redux';
import { SET_CATEGORIES, SET_PRODUCTS, SET_CART, UPDATE_CART, SET_USER } from '../actions/actions';
import axios from 'axios';

const initialAuth = {
    jwt: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWUwY2NiY2Y0YTlmZjAwMTQ2NjU3ZGQiLCJpYXQiOjE1MjQ2ODIwNTIsImV4cCI6MTUyNzI3NDA1Mn0.huKbQu2mikb4bEWhWhsi_4tEq7HCttp8JFh9wopaty4',
    id: '5ae0ccbcf4a9ff00146657dd'
}

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

const authentication = (state = initialAuth, action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload;
    }
    return state;
}

const cart = (state = [], action) => {
    switch (action.type) {
        case SET_CART:
            return action.payload.data;

        case UPDATE_CART:
            return [...state, action.payload]
    }
    return state;
}

export default combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    authentication,
    cart
});