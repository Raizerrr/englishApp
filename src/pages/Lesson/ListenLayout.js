import classNames from "classnames/bind";
import Style from "./Lesson.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Style);

function ListenLayout() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className={cx("listen-layout-container")}>
          <h1 className={cx("listen-secton-title", "fs-1", "mb-5")}>
            Nghe và trả lời câu hỏi
          </h1>
          <div
            className={cx(
              "listen-button-container",
              "d-flex",
              "justify-content-center",
              "mb-5"
            )}
          >
            <div>
              <a
                className={cx(
                  "btn",
                  "listen-button",
                  "d-flex",
                  "justify-content-center",
                  "align-items-center",
                  "me-4"
                )}
              >
                <FontAwesomeIcon icon={faVolumeHigh} />
              </a>
            </div>
            <div className={cx("d-flex", "align-items-end")}>
              <a
                className={cx(
                  "btn",
                  "listen-slow-button",
                  "d-flex",
                  "justify-content-center",
                  "align-items-center"
                )}
              >
                <FontAwesomeIcon icon={faVolumeHigh} />
              </a>
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
                "mt-5",
                "disabled"
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

export default ListenLayout;
