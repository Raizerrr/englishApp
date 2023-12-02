import classNames from "classnames/bind";
import Style from "./ExplainAnswer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCheck,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Style);

function ExplainAnswer(props) {
  return (
    <>
      <div className={cx("explain-answer-container", "p-5")}>
        <div className="position-relative">
          <button
            className={cx("btn", "back-btn")}
            onClick={() => props.ClickToShowExplainHandleProps()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h1 className={cx("explain-answer-title", "mb-3", "mt-5")}>
            Giải thích
          </h1>
          <small className={cx("explain-desc", "mb-3")}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            dignissimos earum dolorem eligendi labore numquam nulla beatae sunt
            placeat repellendus perspiciatis, eaque molestiae sequi inventore
            necessitatibus quos, soluta saepe facere.
          </small>
        </div>
      </div>
    </>
  );
}

export default ExplainAnswer;
