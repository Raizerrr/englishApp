import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import ListenLayout from "./ListenLayout";
import ReadLayout from "./ReadLayout";
import SpeakLayout from "./SpeakLayout";
import WriteLayout from "./WriteLayout";
import LessonComplete from "./LessonComplete";
import { useNavigate, useParams } from "react-router";
import { useTestContext } from "../../context/TestContext";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Style from "./Lesson.module.scss";
import { ReaheardButton } from "../../component/Buttons/ReheardButton";

const cx = classNames.bind(Style);

function Lesson() {
  const {type, questionType} = useParams();
  const {testDetail,
          questionNumber,
          questionsTotal,
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
  const [answerRemain, setAnswerRemain] = useState({
    answer: 0,
    remain: 100
  });
  const [question, setQuestion] = useState();
  const navigate = useNavigate();
  // This state use for storing choose answer
  const [answerActive, setAnswerActive] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      await getTestByType(type);
      
    }
    fetchData();
  }, []);

  useEffect(() => {
    const questionDetail = getQuestion();
    setQuestion(questionDetail);
  }, [testDetail, questionNumber]);


  const checkQuestion = () => {
    addNewAnswerQuestionItem();
    if(answerActive.indexOf(true) === 0){
      setScore(score+question?.score);
      setExp(exp+2);
    }
  }

  const skipQuestion = () => {
    if(hearts>0) {
      addNewAnswerQuestionItem();
      setHearts(hearts-1);
    
    }
    else {
      alert("Bạn đã hết mạng");
    }
  }

  const addNewAnswerQuestionItem = () => {
    setQuestionNumber(questionNumber+1);

    setQuestionNumber(questionNumber+1);
    const answerQuestionItem = {
      question,
      answer: [question?.correctAnswer, question?.wrongAnswer1, question?.wrongAnswer2, question?.wrongAnswer3],
      choosenAnswer: null
    }
    setAnswerQuestion([...answerQuestion, answerQuestionItem]);
  }


  const returnHome = () => {
    navigate("/");
  }


  const getSuitableLayout = () => {
    if(type === "complete") {
      return <LessonComplete/>
    } 
    else if(questionType === "read"){
      return <ReadLayout question={question} answerActive={answerActive} setAnswerActive={setAnswerActive}/>
    }
    else if(questionType === "write") {
      return <WriteLayout question={question}/>
    }
    else if(questionType === "listen") {
      return <ListenLayout question={question}/>
    }
    else {
      return <SpeakLayout question={question}/>
    }
  }


  return (
    <>
      <div className="container-fluid p-0">
        <div className="container">
          {/* header */}
          <div className={cx("lesson-container")}>
            <div className="row justify-content-center align-items-center">
              <div className="col-1">
                <div
                  className={cx(
                    "close-btn-container",
                    "d-flex",
                    "justify-content-end",
                    "align-items-center"
                  )}
                >
                  <a href="/" className={cx("btn", "close-btn")}>
                    <FontAwesomeIcon icon={faClose} />
                  </a>
                </div>
              </div>
              <div className="col-10">
                <div
                  className={cx(
                    "progess-bar-container",
                    "d-flex",
                    "justify-content-center",
                    "align-items-center"
                  )}
                >
                  <div style={{width: `${100/questionsTotal*answerQuestion.length}%`}} className={cx("progess-bar")}></div>
                  <div style={{width: `${100-100/questionsTotal*answerQuestion.length}%`}} className={cx("progress-bar-remain")}></div>
                </div>
              </div>
              <div className="col-1">
                <div
                  className={cx(
                    "heart-container",
                    "d-flex",
                    "justify-content-start",
                    "align-items-center"
                  )}
                >
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/7631e3ee734dd4fe7792626b59457fa4.svg"
                    alt=""
                    className="heart pe-3"
                  />
                  <span className={cx("heart-count")}>{hearts}</span>
                </div>
              </div>
            </div>
          </div>
          {/* header */}

          {/* content */}
          <div className={cx("content-section")}>
            {getSuitableLayout()}
          </div>
          {/* content */}

          {/* footer */}
          <div
            className={cx(
              "lesson-footer",
              "d-flex",
              "justify-content-around",
              "align-items-center"
            )}
          >
            {type==="complete" ? (
              <>
                <ReaheardButton/>
                <button className={cx("check-btn", "btn", "disabled")} onClick={returnHome}>
                  Trở về
                </button>
              </>
            ): (
              <>
                <button className={cx("skip-btn", "btn")} onClick={skipQuestion}>
                  Bỏ qua
                </button>
                <button disabled={answerActive.indexOf(true)!==-1?false:true} 
                  style={answerActive.indexOf(true)!==-1?{backgroundColor:"rgb(221,244,255)", color: "rgb(24,153,214)"}:null}
                 className={cx("check-btn", "btn", "disabled")} onClick={checkQuestion}>
                  kiểm tra
                </button>
              </>

            )}
            
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
