import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { interiorImages } from "../../constants";



type InteriorImage = {
  url: string;
  alt: string;
};

type InteriorImages = InteriorImage[];

const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        projectImages:interiorImages
        
    } ,
    reducers: {
        setProjectImages:(state, action: PayloadAction<InteriorImages>) => {
            state.projectImages = action.payload;
          },
    },

})

export const {setProjectImages} = imagesSlice.actions;

export default imagesSlice.reducer