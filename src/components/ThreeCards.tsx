import "../css/Home.css";
import { SlPresent } from "react-icons/sl";
import { GrUserWorker } from "react-icons/gr";
import { ImHeadphones } from "react-icons/im";

const ThreeCards = () => {
  return (
    <div className="three__cards">
      <div className="three__cards__container">
        <div className="container">
          <div className="three__cards__icon">
            <SlPresent className="icon" color="orange" />
          </div>
        </div>
        <h4>Quality Products</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, rerum nisi inventore corporis amet
          exercitationem. Dolorum rerum tempora vel pariatur labore sunt voluptatum nesciunt aliquam.
        </p>
      </div>
      <div className="three__cards__container">
        <div className="container">
          <div className="three__cards__icon">
            <GrUserWorker className="icon" color="orange" />
          </div>
        </div>
        <h4>Trained Workers</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, rerum nisi inventore corporis amet
          exercitationem. Dolorum rerum tempora vel pariatur labore sunt voluptatum nesciunt aliquam.
        </p>
      </div>
      <div className="three__cards__container">
        <div className="container">
          <div className="three__cards__icon">
            <ImHeadphones  className="icon" color="orange" />
          </div>
        </div>
        <h4>Quick Response</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, rerum nisi inventore corporis amet
          exercitationem. Dolorum rerum tempora vel pariatur labore sunt voluptatum nesciunt aliquam.
        </p>
      </div>
    </div>
  );
};

export default ThreeCards;
