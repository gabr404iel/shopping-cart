import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import cartSlice from './cartSlice'

const rootReducer = combineReducers({
    product: productSlice,
    cart: cartSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

