import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
	name: "menu",
	initialState: "false",
	reducers: {
		togglerShowMenu(state, action) {
			// setShowState(!isShowState);
		},
	},
});

export const { togglerShowMenu } = menuSlice.actions;
export default menuSlice.reducer;
