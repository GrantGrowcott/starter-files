import "../css/Home.css";
import { construction } from "../constants";

const AboutCompany = () => {
  return (
    <div className="about">
      <div className="about__description">
        <h3>About Our Company</h3>
        <h4>Achieving Your Goals Easier & Faster</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur, adipisci nulla fuga sequi voluptatum eligendi, vero expedita inventore quibusdam quis temporibus ipsa odit iste.</p>
      <button className="more__about">More About</button>
      </div>
      <div className="about__container">
        <img src= {construction} alt="Construction Worker on Roof Frame"/>
      </div>
    </div>
  );
};

export default AboutCompany;
