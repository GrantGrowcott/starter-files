import "../css/Home.css";
import { CategoryImages } from "../helpers/ExploreImages";
import { useAppDispatch } from "../redux/useApp";
import { useAppSelector } from "../redux/useApp";

const RecentWork = () => {
  const dispatch = useAppDispatch();
  const { projectImages } = useAppSelector((state) => state.images);

  return (
    <div className="recent__work">
      <h3>OUR RECENT WORKS</h3>
      <h4>Explore Our Latest Projects for Your Inspiration</h4>
      <div className="work__categories">
        <button className="work__categories__button">
          <h5>All Projects</h5>
        </button>
        <button className="work__categories__button">
          <h5>Commercial</h5>
        </button>
        <button className="work__categories__button">
          <h5>Factory</h5>
        </button>
        <button className="work__categories__button" onClick={() => CategoryImages("Interior", dispatch)}>
          <h5>Interior</h5>
        </button>
        <button className="work__categories__button">
          <h5>Residential</h5>
        </button>
      </div>

      <div className="work__container__images">
      {projectImages.map(({ url, alt }) => (
          <img
            key={url}
            src={url}
            alt={alt}
            className="work__images"
          />
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
