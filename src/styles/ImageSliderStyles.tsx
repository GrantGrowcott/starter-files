import Stylesheet from "reactjs-stylesheet";

const styles = Stylesheet.create({
  imgSlider: {
    width: "100%",
    height: "90vh",
    aspectRatio: "10 / 6",
    margin: "0 auto",
    
  },

  imgContainer: {
    width: "100%",
    height: "90vh",
    position: "relative",
  },

  imgInnerContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    overflow: "hidden",
  },

  leftArrow: {
    left: 0,
    zIndex:100
  },

  rightArrow: {
    right: 0,
    zIndex:100
  },

  sliderContainer: {
    position: "absolute",
    bottom: "0.75rem",
    left: "50%",
    translate: "-50%",
    display: "flex",
    gap: "0.25rem",
    zIndex: 100
  },
});
export default styles;
