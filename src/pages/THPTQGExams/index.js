import classNames from "classnames/bind";
import Style from "./THPTQGExams.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClock, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useTestContext } from "../../context/TestContext";
import { useEffect } from "react";

const cx = classNames.bind(Style);

function THPTQGExams() {
  const {allTestType} = useParams();
  const {getAllTestAtTestType, tests} = useTestContext();
  const navigate = useNavigate();


  useEffect(() => {
    getAllTestAtTestType(allTestType);
  }, [])

  const handleClick = (test) => {
    localStorage.setItem("testDetail", JSON.stringify(test))
    navigate(`/readQuestionPage/test/${test?.id}`);
  }

  return (
    <>
      <div className="container justify-content-center align-items-center d-flex py-5">
        <div className={cx("THPTQGExams-container")}>
          <div className="row justify-content-between align-items-center pb-5 mb-3">
            <div className="col-6">
              <h1 className={cx("THPTQG-Exams-title")}>Toàn bộ đề</h1>
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
              {tests?.map(test => (
                <div
                  className={cx("row", "THPTQGExams-items", "border-top", "p-4")}
                >
                  <div className="col-9">
                    <h1 className={cx("title")}>
                      {test?.title}{" "}
                    </h1>
                    <small
                      className={cx(
                        "question-qualtity",
                        "d-inline-block",
                        "px-3"
                      )}
                    >
                      <FontAwesomeIcon icon={faBook} className="pe-3" />
                      {test?.requiredQuestionAmount} câu hỏi
                    </small>
                    <small
                      className={cx("time-to-testing", "d-inline-block", "px-3")}
                    >
                      <FontAwesomeIcon icon={faClock} className="pe-3" />
                      {test?.interval} phút
                    </small>
                  </div>
                  <div className="col-3">
                    <div className="d-flex w-100 h-100 justify-content-center align-items-center">
                      <div
                        onClick={() => handleClick(test)}
                        className={cx("btn", "button")}
                      >
                        Thi Thử
                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default THPTQGExams;