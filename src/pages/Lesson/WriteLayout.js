import classNames from "classnames/bind";
import Style from "./Lesson.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Style);

function WriteLayout({question}) {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className={cx("write-layout-container")}>
          <h1 className={cx("write-layout-title", "text-start")}>
            Viết lại bằng Tiếng Việt
          </h1>
          <div className="row">
            <div className="col-2">
              <div className={cx("img-container")}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"
                  alt=""
                  className={cx("w-100")}
                />
              </div>
            </div>
            <div className="col-10">
              <div
                className={cx(
                  "question-container",
                  "mb-3",
                  "position-relative"
                )}
              >
                <div className={cx("triptagon")}></div>
                <p className={cx("question")}>My birthday is in January.</p>
              </div>
            </div>
          </div>

          <div className={cx("type-answer-area-container")}>
            <textarea
              className={cx(
                "type-answer-area",
                "w-100",
                "h-100",
                "p-3",
                "rounded-4",
                "mt-5"
              )}
              name=""
              id=""
              rows="6"
              placeholder="Nhập vào câu trả lời..."
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default WriteLayout;
