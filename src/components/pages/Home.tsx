import "../../css/Home.css";
import { ImageSlider } from "../ImageSlider";
import { sliderImages } from "../../constants";
import styles from "../../styles/ImageSliderStyles";
import ThreeCards from "../ThreeCards";
import AboutCompany from "../AboutCompany";

export default function Home() {
  return (
    // Relative Positioning
    <div className="home">
      {/* Relative positioning */}
      <div style={styles.imgSlider}>
        <ImageSlider images={sliderImages} />
      </div>
      {/* Absolute positioning */}
      <div className="home__container">
        <div className="home__inner">
          <h1>COMPLETE SOLUTION FOR YOUR ROOFING VISION</h1>
          <h2>EXPERT ROOFING & FIXING SERVICES</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis neque praesentium molestias
            numquam accusamus velit, nobis rerum fuga odit?
          </p>
        </div>
        <div className="home__buttons">
          <button className="home__buttons__schedule">
            <h3>Book a Schedule</h3>
          </button>
          <button className="home__buttons__about">
            <h3>About Us</h3>
          </button>
        </div>
      </div>
      <div className="outer__container">
        <ThreeCards />
        <AboutCompany/>
      </div>
    </div>
  );
}
