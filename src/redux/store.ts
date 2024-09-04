import { configureStore } from "@reduxjs/toolkit";
import NavigationSlice from "./slices/NavigationSlice";
import ImagesSlice from "./slices/ImagesSlice";


export const store = configureStore({
    reducer: {
        navigation: NavigationSlice,
        images:ImagesSlice
     
    },
  });


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;