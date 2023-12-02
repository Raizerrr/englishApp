import classNames from "classnames/bind";
import Style from "./ResultModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import ExplainAnswer from "../ExplainAnswer";
import { useState } from "react";

const cx = classNames.bind(Style);

function ResultModal(props) {
  const [showExplain, setShowExplain] = useState(false);

  const ClickToShowExplainHandle = () => {
    setShowExplain(!showExplain);
  };
  return (
    <div className={cx("result-modal-wrapper")}>
      <div
        className={cx(
          "result-modal-overlay",
          "d-flex",
          "justify-content-center",
          "align-items-center"
        )}
      >
        <div className={cx("result-wrapper")}>
          <div className={cx("close-modal-btn-container")}>
            <button
              className={cx(
                "close-modal-btn",
                "w-100",
                "h-100",
                "rounded-circle"
              )}
              onClick={() => {
                props.ClickToOpenModal();
              }}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          <div
            className={cx(
              "result-modal-container",
              "p-5",
              "rounded-5",
              "w-100",
              "h-100",
              "position-relative"
            )}
          >
            <div className={cx("d-none", { ["show"]: showExplain })}>
              <ExplainAnswer
                ClickToShowExplainHandleProps={ClickToShowExplainHandle}
              />
            </div>
            <div
              className={cx("result-title-container", "text-center", "my-5")}
            >
              <h1 className={cx("result-title")}>Xem bảng điểm của bạn!</h1>
            </div>
            <div className={cx("result-display-container")}>
              <div className="row">
                <div className=" col-6 col-lg-4 col-xxl-3">
                  <div
                    className={cx(
                      "result-display",
                      "mb-3",
                      "p-3",
                      "rounded-4",
                      "correct-answer-display",
                      "position-relative"
                    )}
                    onClick={ClickToShowExplainHandle}
                  >
                    <div
                      className={cx(
                        "correct-icon",
                        "px-2",
                        "icon",
                        //   "py-1",
                        "rounded-circle"
                      )}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </div>

                    {/* <div
                      className={cx(
                        "wrong-icon",
                        "px-2",
                        "icon",
                        //   "py-1",
                        "rounded-circle"
                      )}
                    >
                      <FontAwesomeIcon icon={faClose} />
                    </div> */}
                    <div className={cx("question-result-title")}>title</div>
                    <div className={cx("result-answer-container", "py-3")}>
                      <div className={cx("wrong-answer-container", "pb-2")}>
                        <h1 className={cx("wrong-answer-title", "title")}>
                          Đáp án sai
                        </h1>
                        <div className={cx("wrong-answer", "answer")}>
                          Wrong Answer
                        </div>
                      </div>
                      <div className={cx("correct-answer-container", "pb-2")}>
                        <h1 className={cx("correct-answer-title", "title")}>
                          Đáp án đúng
                        </h1>
                        <div className={cx("correct-answer", "answer")}>
                          Correct Answer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-6 col-lg-4 col-xxl-3">
                  <div
                    className={cx(
                      "result-display",
                      "mb-3",
                      "p-3",
                      "rounded-4",
                      "wrong-answer-display",
                      "position-relative"
                    )}
                    onClick={ClickToShowExplainHandle}
                  >
                    <div
                      className={cx(
                        "correct-icon",
                        "px-2",
                        "icon",
                        //   "py-1",
                        "rounded-circle"
                      )}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </div>

                    <div
                      className={cx(
                        "wrong-icon",
                        "px-2",
                        "icon",
                        //   "py-1",
                        "rounded-circle"
                      )}
                    >
                      <FontAwesomeIcon icon={faClose} />
                    </div>
                    <div className={cx("question-result-title")}>title</div>
                    <div className={cx("result-answer-container", "py-3")}>
                      <div className={cx("wrong-answer-container", "pb-2")}>
                        <h1 className={cx("wrong-answer-title", "title")}>
                          Đáp án sai
                        </h1>
                        <div className={cx("wrong-answer", "answer")}>
                          Wrong Answer
                        </div>
                      </div>
                      <div className={cx("correct-answer-container", "pb-2")}>
                        <h1 className={cx("correct-answer-title", "title")}>
                          Đáp án đúng
                        </h1>
                        <div className={cx("correct-answer", "answer")}>
                          Correct Answer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultModal;
