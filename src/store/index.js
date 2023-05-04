import { configureStore } from "@reduxjs/toolkit";
import menuSliceReducer from "./menuSlice";

const store = configureStore({
	reducer: {
		menu: menuSliceReducer,
	},
});

export default store;
