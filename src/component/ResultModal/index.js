import classNames from "classnames/bind";
import Style from "./ResultModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleArrowDown, faClose } from "@fortawesome/free-solid-svg-icons";
import { useTestContext } from "../../context/TestContext";
import { useEffect, useState } from "react";
import {Spinner} from '../../component/Spinner/Spinner';

const cx = classNames.bind(Style);

function ResultModal(props) {
  const {chosenAnswers, questions, answers} = useTestContext();
  const [questionsResult, setQuestionsResult] = useState([]);
  const [content, setContent] = useState(true);
  const [answer, setAnswer] = useState();

  useEffect(() => {
    handleCheckCorrectOrWrong();
  }, [])

  const handleCheckCorrectOrWrong = () => {
    const copiedQuestions = [];
    for(let i = 0; i < questions.length; i++) {
      let newAnswerDisplay = questions[i];
      const chosenAnswerQuestion = chosenAnswers?.find(answer => questions[i]?.id === answer?.id);
      if(chosenAnswerQuestion) {
        newAnswerDisplay.chosenAnswer = chosenAnswerQuestion?.chosenAnswer;
        if(questions[i].correctAnswer.includes(chosenAnswerQuestion.chosenAnswer)){
          newAnswerDisplay.answerDisplay = "correct-answer-display";
          newAnswerDisplay.icon = "correct-icon";
          newAnswerDisplay.fontAwesomeIcon = faCheck
        }
        else {
          newAnswerDisplay.answerDisplay = "wrong-answer-display";
          newAnswerDisplay.icon = "wrong-icon";
          newAnswerDisplay.fontAwesomeIcon = faClose
        }

      }
      else {
        newAnswerDisplay.answerDisplay = "";
        newAnswerDisplay.icon = "";
        newAnswerDisplay.fontAwesomeIcon = faCircleArrowDown
      }
      copiedQuestions.push(newAnswerDisplay);
    }

    setQuestionsResult(copiedQuestions);
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
                {questionsResult?.map((answer, index) => (
                    <div style={{cursor: "pointer"}} className="col-6 col-lg-4 col-xxl-3"  onClick={() => handleChangeContent(index)}>
                      <div
                        className={cx(
                          "result-display",
                          "p-3",
                          "rounded-4",
                          `${answer?.answerDisplay}`,
                          "position-relative"
                        )}
                      >
                        <div
                          className={cx(

                            `${answer?.icon}`,
                            "px-2",
                            "icon",
                            //   "py-1",
                            "rounded-circle"
                          )}
                        >
                          <FontAwesomeIcon icon={answer?.fontAwesomeIcon} />
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
                        <div className={cx("question-result-title")}>{answer?.description}</div>
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
                              {answer?.correctAnswer}
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
                <button style={{backgroundColor:"rgb(221,244,255)", color: "rgb(24,153,214)"}} className="btn" onClick={handleChangeContent}>Trở về</button>
              </div>
              {answer ? <div>{answer}</div> : <Spinner/>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultModal;