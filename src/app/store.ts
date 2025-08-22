import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/services/cartSlice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
	middleware: (getDefault) => getDefault(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
