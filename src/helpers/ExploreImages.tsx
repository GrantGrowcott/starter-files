import { setProjectImages } from "../redux/slices/ImagesSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { interiorImages } from "../constants";

export function CategoryImages(list: string, dispatch: Dispatch) {
  // Set Images Array Here

  if (list === "Interior") {
    dispatch(setProjectImages(interiorImages));
    console.log("Gosling");
  }
}
