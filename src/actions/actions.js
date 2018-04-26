export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories
});

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products
});