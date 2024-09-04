import { house } from "../constants";
import "../css/Home.css";
import { FaPhoneAlt } from "react-icons/fa";

const QuickInquiry = () => {
  return (
    <div className="about">
      <div className="about__container">
        <img src={house} alt="Frame and BluePrint of House" />
      </div>
      <div className="about__description">
        <h3>Quick Inquiry</h3>
        <h4>Are You Looking for Roofing Service?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur, adipisci nulla fuga sequi
          voluptatum eligendi, vero expedita inventore quibusdam quis temporibus ipsa odit iste.
        </p>
        <div className="container__start">
          <FaPhoneAlt color="white"/>
          <h5>+92 (003) 68-090</h5>
        </div>
      </div>
    </div>
  );
};

export default QuickInquiry;
