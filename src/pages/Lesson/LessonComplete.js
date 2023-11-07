import classNames from "classnames/bind";
import Style from "./Lesson.module.scss";
import { useTestContext } from "../../context/TestContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";
const cx = classNames.bind(Style);

function LessonComplete() {
  const {testDetail,
    questionNumber,
    questionsTotal,
    scoreTotalOfTest,
    score,
    exp,
    answerQuestion,
    hearts,
    setHearts,
    setScore,
    setExp,
    setAnswerQuestion,
    getQuestion,
    setQuestionNumber,
    getTestByType
  } 
= useTestContext();

  return (
    <>
      <div className="container justify-content-center align-items-center d-flex">
        <div className={cx("lesson-complete-container")}>
          <div className={cx("conrats-container", "text-center")}>
            <h1 className={cx("conrats-title", "my-3")}>
              Quá Đỉnh! Bạn đã hoàn thành bài học
            </h1>
            <p className={cx("conrats-small-title", "mt-3")}>
              Cố gắng tiếp tục lộ trình thật tốt nhé!
            </p>
          </div>
          <div className={cx("result-contaner")}>
            <div className="row">
              <div className="col justify-content-end align-items-center d-flex">
                <div className={cx("exp-point-container", "pt-3", "rounded-4")}>
                  <h1 className={cx("exp-point-container-title")}>
                    Tổng điểm KN
                  </h1>
                  <div
                    className={cx(
                      "exp-point-display",
                      "rounded-4",
                      "d-flex",
                      "justify-content-center",
                      "align-items-center"
                    )}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/f5358b2d4087a109790fc809eedc08c5.svg"
                      alt=""
                      className="me-3"
                    />
                    <span>{exp}</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={cx("point-container", "pt-3", "rounded-4")}>
                  <h1 className={cx("point-container-title")}>Chính xác</h1>
                  <div
                    className={cx(
                      "point-display",
                      "rounded-4",
                      "d-flex",
                      "justify-content-center",
                      "align-items-center"
                    )}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/9ace13520a375f5661415ff7d470f243.svg"
                      alt=""
                      className="me-3"
                    />
                    <span>{Math.floor(score/scoreTotalOfTest*100)}%</span>
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

export default LessonComplete;
