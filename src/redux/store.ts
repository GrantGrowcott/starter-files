import { configureStore } from "@reduxjs/toolkit";
import NavigationSlice from "./slices/NavigationSlice";


export const store = configureStore({
    reducer: {
        navigation: NavigationSlice
     
    },
  });


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;