import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        click: false,
    },
    reducers: {
        setClick:(state, action: PayloadAction<boolean>) => {
            state.click = action.payload;
          },
    },

})

export const {setClick} = navigationSlice.actions;

export default navigationSlice.reducer