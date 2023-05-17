import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //set initial state to be an empty array with no fields
    value: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItems: (state, action) => {
            const { product, quantity } = action.payload;
            //check to prevent adding duplicates of the same object
            const existingItem = state.value.itemsInCart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.value.itemsInCart.push({ ...product, quantity });
                state.value.totalItems += 1;
            }
            state.value.totalPrice += product.price * quantity;
        },

        removeItem: (state, action) => {
            state.value.itemsInCart = state.value.itemsInCart.filter(item => item.id !== action.payload.id);
            state.value.totalItems -= 1;
            state.value.totalPrice -= action.payload.price;
        },
        clearItem: (state,action) => {
            //to remove the item according to the id provided
            const itemId = action.payload;
            const itemIndex = state.value.itemsInCart.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                state.value.totalPrice -= state.value.itemsInCart[itemIndex].price * state.value.itemsInCart[itemIndex].quantity;
                state.value.totalItems -= 1;
                state.value.itemsInCart.splice(itemIndex, 1);
            }
        },
        incrementItem: (state, action) => {
            const itemId = action.payload;
            const itemIndex = state.value.itemsInCart.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                state.value.itemsInCart[itemIndex].quantity += 1;
                state.value.totalPrice += state.value.itemsInCart[itemIndex].price;
            }
        },
        decrementItem: (state, action) => {
            const itemId = action.payload;
            const itemIndex = state.value.itemsInCart.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                state.value.itemsInCart[itemIndex].quantity -= 1;
                state.value.totalPrice -= state.value.itemsInCart[itemIndex].price;
                if (state.value.itemsInCart[itemIndex].quantity === 0) {
                    state.value.itemsInCart.splice(itemIndex, 1);
                    state.value.totalItems -= 1;
                }
            }
        },
        setNumber: (state, action) => {
            state.value.totalItems = action.payload;
        },
        setCart: (state, action) => {
            state.value = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItems, removeItem, clearItem, incrementItem, decrementItem, setNumber, setCart } = cartSlice.actions

export default cartSlice.reducer