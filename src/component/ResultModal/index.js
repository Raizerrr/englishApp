import classNames from "classnames/bind";
import Style from "./ResultModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { useTestContext } from "../../context/TestContext";
import { useState } from "react";

const cx = classNames.bind(Style);

function ResultModal(props) {
  const {chosenAnswers, questions, answers} = useTestContext();
  const [content, setContent] = useState(true);
  const [answer, setAnswer] = useState();

  const handleCheckCorrectOrWrong = (index) => {
    for(let i = 0; i < questions.length; i++) {
      if(questions[i].correctAnswer.includes(chosenAnswers[index].chosenAnswer)){
        return true;
      }
    }

    return false;
  }

  const getQuestionFromId = (index) => {
    return questions.find(question => question.id===chosenAnswers[index].id);
  }

  const handleChangeContent = (index) => {
    setAnswer(answers[index]);
    setContent(!content);
  }

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
                setContent(true);
                props.ClickToOpenModal();
              }}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          {content ? (
            <div
              className={cx(
                "result-modal-container",
                "p-5",
                "rounded-5",
                "w-100",
                "h-100"
              )}
            >
              <div
                className={cx("result-title-container", "text-center", "my-5")}
              >
                <h1 className={cx("result-title")}>Xem bảng điểm của bạn!</h1>
              </div>
              <div className={cx("result-display-container")}>
                <div className="row">
                {chosenAnswers?.map((answer, index) => (
                    <div style={{cursor: "pointer"}} className="col-6 col-lg-4 col-xxl-3"  onClick={() => handleChangeContent(index)}>
                      <div
                        className={cx(
                          "result-display",
                          "p-3",
                          "rounded-4",
                          `${handleCheckCorrectOrWrong(index)?"correct-answer-display":"wrong-answer-display"}`,
                          "position-relative"
                        )}
                      >
                        <div
                          className={cx(

                            `${handleCheckCorrectOrWrong(index)?"correct-icon":"wrong-icon"}`,
                            "px-2",
                            "icon",
                            //   "py-1",
                            "rounded-circle"
                          )}
                        >
                          <FontAwesomeIcon icon={handleCheckCorrectOrWrong(index)?faCheck:faClose} />
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
                        <div className={cx("question-result-title")}>{getQuestionFromId(index).description}</div>
                        <div className={cx("result-answer-container", "py-3")}>
                          <div className={cx("wrong-answer-container", "pb-2")}>
                            <h1 className={cx("wrong-answer-title", "title")}>
                              Đáp án bạn chọn
                            </h1>
                            <div className={cx("wrong-answer", "answer")}>
                              {answer?.chosenAnswer}
                            </div>
                          </div>
                          <div className={cx("correct-answer-container", "pb-2")}>
                            <h1 className={cx("correct-answer-title", "title")}>
                              Đáp án đúng
                            </h1>
                            <div className={cx("correct-answer", "answer")}>
                              {getQuestionFromId(index).correctAnswer}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  ))}
                

                </div>
              </div>
            </div>

          ): (
            <div className={cx(
              "result-modal-container",
              "p-5",
              "rounded-5",
              "w-100",
              "h-100"
            )}>
              <div>
                <button onClick={handleChangeContent}>Trở về</button>
              </div>
              <div>{answer}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultModal;