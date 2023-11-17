import classNames from "classnames/bind";
import Style from "./WelcomeModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCheck,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Style);

function WelcomeModal() {
  return (
    <>
      <div className={cx("welcome-modal-wrapper")}>
        <div
          id="carouselExampleIndicators"
          className={cx("carousel", "slide", "carousel-container")}
          data-bs-ride="true"
        >
          <div className="carousel-indicators d-none">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className={cx("welcome-modal-container", "w-100")}>
                <h1>Page 1</h1>
              </div>
            </div>
            <div className="carousel-item">
              <div className={cx("welcome-modal-container", "w-100")}>
                <h1>Page 2</h1>
              </div>
            </div>
            <div className="carousel-item">
              <div className={cx("welcome-modal-container", "w-100")}>
                <h1>Page 3</h1>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev text-dark"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next text-dark"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <FontAwesomeIcon icon={faAngleRight} />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      ;
    </>
  );
}

export default WelcomeModal;
