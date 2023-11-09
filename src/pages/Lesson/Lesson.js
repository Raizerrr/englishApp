import classNames from "classnames/bind";
import Style from "./Lesson.module.scss";
import ListenLayout from "./ListenLayout";
import ReadLayout from "./ReadLayout";
import SpeakLayout from "./SpeakLayout";
import WriteLayout from "./WriteLayout";
import LessonComplete from "./LessonComplete";
import LessonFooter from "../../component/LessonFooter";
import LessonCompleteFooter from "../../component/LessonCompleteFooter";
import LessonHeader from "../../component/LessonHeader";
import ResultModal from "../../component/ResultModal";
import { useState } from "react";

const cx = classNames.bind(Style);

function Lesson() {
  const [showModal, setShowModal] = useState(false);

  const OpenModalHandle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className={cx("result-modal-container", { ["show"]: showModal })}>
          <ResultModal ClickToOpenModal={OpenModalHandle} />
        </div>
        <div className="container">
          {/* header */}
          <div className={cx("lesson-container")}>
            <LessonHeader />/
          </div>
          {/* header */}

          {/* content */}
          <div className={cx("content-section")}>
            <LessonComplete />
          </div>
          {/* content */}

          {/* footer */}
          <div className={cx("footer-lesson-container")}>
            <LessonCompleteFooter ClickToOpenModal={OpenModalHandle} />
          </div>
          {/* footer */}

          <div
            className={cx(
              "wrong-modal-container",
              "d-flex",
              "justify-content-center",
              "d-none"
            )}
          >
            <div className={cx("wrong-modal")}>
              <div className="row">
                <div className="col-2 d-flex justify-content-end px-3">
                  <div
                    className={cx(
                      "wrong-icon-container",
                      "d-flex",
                      "align-items-center",
                      "justify-content-center"
                    )}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/9a4bf74a74e801ca35402f2c2837e24c.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-7">
                  <div className={cx("wrong-text-container", "px-3", "mb-5")}>
                    <h1 className={cx("wrong-text-title")}>Đáp án đúng:</h1>
                    <p className={cx("wrong-text")}>is</p>
                  </div>
                  <div className={cx("wrong-text-container", "px-3", "mb-5")}>
                    <h1 className={cx("wrong-text-title")}>Nghĩa là:</h1>
                    <p className={cx("wrong-text")}>
                      Sinh Nhật của tôi là vào tháng 1
                    </p>
                  </div>
                </div>
                <div
                  className={cx(
                    "col-3",
                    "d-flex",
                    "align-items-center",
                    "justify-content-center"
                  )}
                >
                  <a
                    href="/"
                    className={cx("btn", "wrong-next-question-btn", "p-3")}
                  >
                    Tiếp tục
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={cx(
              "correct-modal-container",
              "d-flex",
              "justify-content-center",
              "align-items-center",
              "d-none"
            )}
          >
            <div className={cx("correct-modal")}>
              <div className="row">
                <div className="col-2 d-flex justify-content-end px-3">
                  <div
                    className={cx(
                      "check-icon-container",
                      "d-flex",
                      "align-items-center",
                      "justify-content-center"
                    )}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/bed2a542bc7eddc78e75fbe85260b89e.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-7">
                  <div className={cx("correct-text-container", "px-3")}>
                    <h1 className={cx("corrext-text-title")}>
                      Chính xác! Dịch nghĩa:
                    </h1>
                    <p className={cx("correct-text")}>
                      Sinh Nhật của tôi là vào tháng 1
                    </p>
                  </div>
                </div>
                <div
                  className={cx(
                    "col-3",
                    "d-flex",
                    "align-items-center",
                    "justify-content-center"
                  )}
                >
                  <a href="/" className={cx("btn", "next-question-btn", "p-3")}>
                    Tiếp tục
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lesson;
