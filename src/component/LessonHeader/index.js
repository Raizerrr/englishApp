import classNames from "classnames/bind";
import Style from "../../pages/Lesson/Lesson.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useTestContext } from "../../context/TestContext";
import { useMemo } from "react";
import { useUserContext } from "../../context/UserContext";

const cx = classNames.bind(Style);

function LessonHeader(props) {
  const {
      questionsTotal,
      questionNumber,
      skippedQuestionsTotal,
      skippedQuestionNumber
    } 
  = useTestContext();

  const {hearts} = useUserContext();  
  const progress = useMemo(() => {

    let result = 0;
    if(questionNumber>=questionsTotal){
      console.log("ping go");
      const questionNumberWithSkippedQuestions = (questionNumber-skippedQuestionsTotal+skippedQuestionNumber)/questionsTotal;
      const percent = questionNumberWithSkippedQuestions*100;
      result = Math.floor(percent);
      
    }
    else {
      if(skippedQuestionsTotal===0){
        result = Math.floor(questionNumber/questionsTotal*100);
      }
      else {
        result = Math.floor((questionNumber-skippedQuestionsTotal)/questionsTotal*100);
      }
    }

    return result;

  }, [questionNumber, skippedQuestionsTotal, skippedQuestionNumber])

  return (
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
        <span onClick={props.handleClose} className={cx("btn", "close-btn")}>
          <FontAwesomeIcon icon={faClose}/>
        </span>
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
        <div style={{width: `${Number.isNaN(progress)?0:progress}%`}} className={cx("progess-bar")}></div>
        <div style={{width: `${100-(Number.isNaN(progress)?0:progress)}%`}} className={cx("progress-bar-remain")}></div>
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
  );
}

export default LessonHeader;
