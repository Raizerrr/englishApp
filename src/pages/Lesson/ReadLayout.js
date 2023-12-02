import classNames from "classnames/bind";
import Style from "./Lesson.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Style);

function ReadLayout() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className={cx("read-layout-container")}>
          <h1 className={cx("read-layout-title", "text-start")}>
            Điền vào chỗ trống
          </h1>
          <div className={cx("question-container", "mb-5")}>
            <p className={cx("question")}>
              My birthday ... in January. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Velit ut quo voluptates exercitationem ducimus
              animi rerum quis voluptatum similique nostrum quisquam, fuga eius
              sint, magnam voluptate aut consectetur ipsum aliquam!
            </p>
          </div>

          <div className={cx("type-answer-area-container")}>
            <ul className={cx("answer-list")}>
              <li
                className={cx(
                  "answer-item",
                  "position-relative",
                  "my-3",
                  "answer-active"
                )}
              >
                <div className={cx("answer-number", "m-3", "rounded-3")}>1</div>
                is
              </li>
              <li className={cx("answer-item", "position-relative", "mb-3")}>
                <div className={cx("answer-number", "m-3", "rounded-3")}>2</div>
                on
              </li>
              <li className={cx("answer-item", "position-relative", "mb-3")}>
                <div className={cx("answer-number", "m-3", "rounded-3")}>3</div>
                at
              </li>
              <li className={cx("answer-item", "position-relative", "mb-3")}>
                <div className={cx("answer-number", "m-3", "rounded-3")}>4</div>
                at
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadLayout;
