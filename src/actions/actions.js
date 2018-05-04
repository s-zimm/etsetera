import axios from 'axios';

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_CART = 'SET_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const SET_USER = 'SET_USER';

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories
});

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products
});

export const setCart = (userId, jwt) => {
    let cartItems = axios.get('https://etsetera.herokuapp.com/cartItem?user._id=' + userId, {
        headers: {
            Authorization: jwt
        }
    });
    return ({ 
        type: SET_CART,
        payload: cartItems 
    });
};

export const updateCart = (product) =>({
    type: UPDATE_CART,
    payload: product
})


export const setUserInfo = (userInfo) => ({
    type: SET_USER,
    payload: userInfo
});