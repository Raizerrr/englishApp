import classNames from "classnames/bind";
import Style from "./THPTQGExams.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClock, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(Style);

function THPTQGExams() {
  return (
    <>
      <div className="container justify-content-center align-items-center d-flex py-5">
        <div className={cx("THPTQGExams-container")}>
          <div className="row justify-content-between align-items-center pb-5 mb-3">
            <div className="col-6">
              <h1 className={cx("THPTQG-Exams-title")}>Đề Thi THPTQG</h1>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <div
                className={cx(
                  "THPTQG-search-form-container",
                  "w-75",
                  "position-relative"
                )}
              >
                <input
                  type="text"
                  className={cx(
                    "THPTQG-search-input",
                    "px-3",
                    "py-2",
                    "w-100",
                    "rounded-3"
                  )}
                />
                <button
                  className={cx(
                    "THPTQG-search-button",
                    "px-3",
                    "py-1",
                    "rounded-3"
                  )}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className={cx("THPTQGExams-list")}>
              <div
                className={cx("row", "THPTQGExams-items", "border-top", "p-4")}
              >
                <div className="col-9">
                  <h1 className={cx("title")}>
                    Đề Thi Chính Thức THPT Quốc Gia Năm 2020 Mã 403- Ngoại Ngữ -
                    Tiếng Anh{" "}
                  </h1>
                  <small
                    className={cx(
                      "question-qualtity",
                      "d-inline-block",
                      "px-3"
                    )}
                  >
                    <FontAwesomeIcon icon={faBook} className="pe-3" />
                    50 câu hỏi
                  </small>
                  <small
                    className={cx("time-to-testing", "d-inline-block", "px-3")}
                  >
                    <FontAwesomeIcon icon={faClock} className="pe-3" />
                    60 phút
                  </small>
                </div>
                <div className="col-3">
                  <div className="d-flex w-100 h-100 justify-content-center align-items-center">
                    <Link
                      to={"/readQuestionPage"}
                      className={cx("btn", "button")}
                    >
                      Thi Thử
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={cx("row", "THPTQGExams-items", "border-top", "p-4")}
              >
                <div className="col-9">
                  <h1 className={cx("title")}>
                    Đề Thi Chính Thức THPT Quốc Gia Năm 2020 Mã 403- Ngoại Ngữ -
                    Tiếng Anh{" "}
                  </h1>
                  <small
                    className={cx(
                      "question-qualtity",
                      "d-inline-block",
                      "px-3"
                    )}
                  >
                    <FontAwesomeIcon icon={faBook} className="pe-3" />
                    50 câu hỏi
                  </small>
                  <small
                    className={cx("time-to-testing", "d-inline-block", "px-3")}
                  >
                    <FontAwesomeIcon icon={faClock} className="pe-3" />
                    60 phút
                  </small>
                </div>
                <div className="col-3">
                  <div className="d-flex w-100 h-100 justify-content-center align-items-center">
                    <button className={cx("btn", "button")}>Thi Thử</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default THPTQGExams;