
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
import { useUserContext } from "../../context/UserContext";
import LessonFooter from "../../component/LessonFooter";
import LessonCompleteFooter from "../../component/LessonCompleteFooter";
import LessonHeader from "../../component/LessonHeader";
import ResultModal from "../../component/ResultModal";

const cx = classNames.bind(Style);

function Lesson() {
  const {type, questionType} = useParams();
  const {testDetail,
          questionNumber,
          score,
          exp,
          answerQuestion,
          setScore,
          setExp,
          setAnswerQuestion,
          getQuestion,
          setQuestionNumber,
          getTestByType
        } 
    = useTestContext();
  const {hearts, setHearts, updatePlayer, player} = useUserContext();
  const [question, setQuestion] = useState();
  const navigate = useNavigate();
  // This state use for storing choose answer
  const [answerActive, setAnswerActive] = useState([]);
  const {lessonNumber} = useParams();

  useEffect(() => {
    const fetchData = async() => {
      await getTestByType(type);
      
    }
    fetchData();
  }, []);

  useEffect(() => {
    const questionDetail = getQuestion(lessonNumber, player?.id);
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
      player.heart = hearts-1;
      updatePlayer(player);
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


  const [showModal, setShowModal] = useState(false);

  const OpenModalHandle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className={cx("result-modal-container", { ["show"]: showModal })}>
          <ResultModal ClickToOpenModal={OpenModalHandle}/>
        </div>
        <div className="container">
          {/* header */}
          <div className={cx("lesson-container")}>

            <LessonHeader />
          </div>
          {/* header */}

          {/* content */}
          <div className={cx("content-section")}>
            {getSuitableLayout()}
          </div>
          {/* content */}

          {/* footer */}

          <div className={cx("footer-lesson-container")}>
            <LessonCompleteFooter ClickToOpenModal={OpenModalHandle}  checkQuestion={checkQuestion} skipQuestion={skipQuestion} returnHome={returnHome} answerActive={answerActive}/>
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
