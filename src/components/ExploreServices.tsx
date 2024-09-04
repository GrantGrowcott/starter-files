import "../css/Home.css";
import { explore1, explore2, explore3, explore4, explore5, explore6 } from "../constants";

const ExploreServices = () => {
  return (
    <div className="explore__services">
      <h3>EXPLORE OUR SERVICES</h3>
      <h4>Fast, Affordable and Superior</h4>\
      <div className="explore__container">
        <div className="explore__container__item">
          <img src={explore1} alt="Two Men on a Roof" />
          <div className="explore__container__item__description">
            <h5>Metal Roofing</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, amet.</p>
            <button className="explore__container__button">
              <h6>Read More</h6>
            </button>
          </div>
        </div>
        <div className="explore__container__item">
          <img src={explore2} alt="Man on Ladder Looking at Solar Panels" />
          <div className="explore__container__item__description">
            <h5>Metal Roofing</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, amet.</p>
            <button className="explore__container__button">
              <h6>Read More</h6>
            </button>
          </div>
        </div>
        <div className="explore__container__item">
          <img src={explore3} alt="Angled Metal Piping Backed By a Forest" />
          <div className="explore__container__item__description">
            <h5>Metal Roofing</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, amet.</p>
            <button className="explore__container__button">
              <h6>Read More</h6>
            </button>
          </div>
        </div>
        <div className="explore__container__item">
          <img src={explore4} alt="Two Men on a Roof" />
          <div className="explore__container__item__description">
            <h5>Metal Roofing</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, amet.</p>
            <button className="explore__container__button">
              <h6>Read More</h6>
            </button>
          </div>
        </div>{" "}
        <div className="explore__container__item">
          <img src={explore5} alt="Two Men on a Roof" />
          <div className="explore__container__item__description">
            <h5>Metal Roofing</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, amet.</p>
            <button className="explore__container__button">
              <h6>Read More</h6>
            </button>
          </div>
        </div>{" "}
        <div className="explore__container__item">
          <img src={explore6} alt="Two Men on a Roof" />
          <div className="explore__container__item__description">
            <h5>Metal Roofing</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, amet.</p>
            <button className="explore__container__button">
              <h6>Read More</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;
