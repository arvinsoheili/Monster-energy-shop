import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Product = {
	id: number;
	name: string;
	price: number;
	image: string;
};

export type CartItem = Product & { qty: number };

type CartState = {
	items: Record<number, CartItem>; // keyed by product id
};

// Load cart from localStorage if it exists
const savedCart = localStorage.getItem("cart");
const initialState: CartState = savedCart
	? JSON.parse(savedCart)
	: { items: {} };

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			const p = action.payload;
			const existing = state.items[p.id];
			if (existing) {
				existing.qty += 1;
			} else {
				state.items[p.id] = { ...p, qty: 1 };
			}
			localStorage.setItem("cart", JSON.stringify(state)); // save after update
		},

		removeFromCart: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			if (!state.items[id]) return;
			if (state.items[id].qty > 1) {
				state.items[id].qty -= 1;
			} else {
				delete state.items[id];
			}
			localStorage.setItem("cart", JSON.stringify(state));
		},

		increaseQty: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			if (state.items[id]) state.items[id].qty += 1;
			localStorage.setItem("cart", JSON.stringify(state));
		},

		clearCart: (state) => {
			state.items = {};
			localStorage.setItem("cart", JSON.stringify(state));
		},
	},
});

export const { addToCart, removeFromCart, clearCart, increaseQty } =
	cartSlice.actions;

export default cartSlice.reducer;
