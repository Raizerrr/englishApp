import classNames from "classnames/bind";
import Style from "../../pages/Lesson/Lesson.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Style);

function LessonHeader() {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-1">
        <div
          className={cx(
            "close-btn-container",
            "d-flex",
            "justify-content-end",
            "align-items-center"
          )}
        >
          <a href="/" className={cx("btn", "close-btn")}>
            <FontAwesomeIcon icon={faClose} />
          </a>
        </div>
      </div>
      <div className="col-10">
        <div
          className={cx(
            "progess-bar-container",
            "d-flex",
            "justify-content-center",
            "align-items-center"
          )}
        >
          <div className={cx("progess-bar")}></div>
        </div>
      </div>
      <div className="col-1">
        <div
          className={cx(
            "heart-container",
            "d-flex",
            "justify-content-start",
            "align-items-center"
          )}
        >
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/7631e3ee734dd4fe7792626b59457fa4.svg"
            alt=""
            className="heart pe-3"
          />
          <span className={cx("heart-count")}>5</span>
        </div>
      </div>
    </div>
  );
}

export default LessonHeader;
