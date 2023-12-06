
import ListenLayout from "./ListenLayout";
import ReadLayout from "./ReadLayout";
import SpeakLayout from "./SpeakLayout";
import WriteLayout from "./WriteLayout";
import LessonComplete from "./LessonComplete";
import { useNavigate, useParams } from "react-router";
import { useTestContext } from "../../context/TestContext";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import Style from "./Lesson.module.scss";
import { useUserContext } from "../../context/UserContext";
import LessonCompleteFooter from "../../component/LessonCompleteFooter";
import LessonHeader from "../../component/LessonHeader";
import ResultModal from "../../component/ResultModal";
import SkippedPopup from "../../component/Popup/SkiippedPopup";
import DontClosePopup from "../../component/Popup/DontClosePopup";

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
          getTestByType,
          saveTestDetailInLocalStorage,
          resetAllCachingTestDetails,
          directPopup,
          setDirectPopup,
          skippedQuestions,
          setSkippedQuestions,
          questionsTotal,
          skippedQuestionNumber,
          setSkippedQuestionNumber,
          getAnswers,
          chosenAnswers,
          setChosenAnswers,
          questions
        } 
    = useTestContext();
  const {hearts, setHearts, updatePlayer, player} = useUserContext();
  const [question, setQuestion] = useState();
  const [triggerPopup, setTriggerPopup] = useState(false);
  const navigate = useNavigate();
  // This state use for storing choose answer
  const [answerActive, setAnswerActive] = useState([]);
  const [chosenAnswer, setChosenAnswer] = useState([]);
  const {lessonNumber} = useParams();
  const hasMounted = useRef(true);

  useEffect(() => {
    
    if(hasMounted.current) {
      hasMounted.current = false;
      const fetchData = async() => {
        
        await getTestByType("lesson",lessonNumber); 
      }
      fetchData();
    }

    const handleBeforeUnload = (event) => {
      const message = "Bạn có chắc muốn rời khỏi trang?";
      event.returnValue = message; // Chuẩn cho các trình duyệt cũ
      return message; // Chuẩn cho các trình duyệt mới
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload); 
    };
  }, []);

  useEffect(() => {
    const fetchData = async() => {
      const questionDetail = await getQuestion(lessonNumber, player?.id, handleShowPopup);
      setQuestion(questionDetail);
    }
    fetchData();
  }, [testDetail, questionNumber, skippedQuestionNumber]);



  const checkQuestion = () => {
    addNewAnswerQuestionItem();

    let checked = false;

    if(questionNumber<questionsTotal){
      if(questions[questionNumber].correctAnswer===chosenAnswer){
        checked = true;
      }
    }
    else {
      if(skippedQuestions[skippedQuestionNumber].correctAnswer === chosenAnswer) {
        checked = true;
      }
    }

    if(checked){
      setScore(score+question?.score);
      setExp(exp+2);
    }
    else {
      if(hearts!==0){
        setHearts(hearts-1);
        setScore(score+question?.score);
        setExp(exp+2);
      }
      if(player?.id) {
        player.heart = hearts;
        updatePlayer(player);
  
      }
      else {
        const account = JSON.parse(localStorage.getItem("account"));
        account.hearts = hearts;
        localStorage.setItem('account', JSON.stringify(account));
      }
    }
    saveTestDetailInLocalStorage();

  }

  const skipQuestion = () => {
    addNewAnswerQuestionItem();
    skippedQuestions.push(question);
    setSkippedQuestions(skippedQuestions);
    
    saveTestDetailInLocalStorage();
  }

  const addNewAnswerQuestionItem = () => {
    if(questionNumber>=questionsTotal){
      setSkippedQuestionNumber(skippedQuestionNumber+1);
    }
    else {
      setQuestionNumber(questionNumber+1);
    }
    const chosenAnswersItem = {
      id: question?.id,
      chosenAnswer
    };
    chosenAnswers.push(chosenAnswersItem);
    setChosenAnswers(chosenAnswers);
    const answerQuestionItem = `${question?.description}. Và 4 đáp án là: ${question?.correctAnswer}, 
                                                              ${question?.wrongAnswer1},
                                                              ${question?.wrongAnswer2},
                                                              ${question?.wrongAnswer3},
                                                              ${question?.wrongAnswer4}.
                                Câu trả lời nào đúng và giải thích từng câu`;
    answerQuestion.push(answerQuestionItem)
    setAnswerQuestion(answerQuestion);
  }


  const returnHome = () => {
    resetAllCachingTestDetails();
    navigate("/");
  }


  const getSuitableLayout = () => {
    if(type === "complete") {
      return <LessonComplete/>
    } 
    else if(questionType === "read"){
      return <ReadLayout question={question} setChosenAnswer={setChosenAnswer} answerActive={answerActive} setAnswerActive={setAnswerActive}/>
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

  const OpenModalHandle = async() => {
    setShowModal(!showModal);
    await getAnswers();
  };

  const handleShowPopup = () => {
    setTriggerPopup(!triggerPopup);
  };

  const handleClose = () => {
    if(type==="complete"){
      returnHome();
      return;  
    }
    handleShowPopup();
    setDirectPopup("close");
  }


  return (
    <>
      <div className="container-fluid p-0">
        <div className={cx("d-none", { ["show"]: triggerPopup })}>
          {directPopup==="close" ? (
            <DontClosePopup ClickToClosePopup={handleShowPopup} returnHome={returnHome}/>

          ): (
            
            <SkippedPopup ClickToClosePopup={handleShowPopup}  returnHome={returnHome}/>
          )}
        </div>
        <div className={cx("result-modal-container", { ["show"]: showModal })}>
          <ResultModal ClickToOpenModal={OpenModalHandle}/>
        </div>
        <div className="container">
          {/* header */}
          <div className={cx("lesson-container")}>

            <LessonHeader returnHome={returnHome} handleClose={handleClose}/>
          </div>
          {/* header */}

          {/* content */}
          <div className={cx("content-section")}>
            {getSuitableLayout()}
          </div>
          {/* content */}

          {/* footer */}

          <div className={cx("footer-lesson-container")}>
            <LessonCompleteFooter testDetail={testDetail} ClickToOpenModal={OpenModalHandle}  checkQuestion={checkQuestion} skipQuestion={skipQuestion} returnHome={returnHome} answerActive={answerActive}/>
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
