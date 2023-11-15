import classNames from "classnames/bind";
import Style from "./Lesson.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import getRandomNumber from "../../extra/algorithms/randomCode";
import { useEffect, useState } from "react";
const cx = classNames.bind(Style);
const initialActive = [false, false, false, false];

function ReadLayout({question, answerActive, setAnswerActive, setChosenAnswer}) {
  
  const [answerResult, setAnswerResult] = useState([]);
  

  useEffect(() => {
    setAnswerActive(initialActive);
  }, [question])

  const randomAnswer = () => {
    let answers = [question?.correctAnswer, question?.wrongAnswer1, question?.wrongAnswer2, question?.wrongAnswer3];
    let answerSet = [];

    while(answers.length > 0){
      const randomIndex = getRandomNumber(0, answers.length-1);
      answerSet.push(answers[randomIndex]);
      answers.splice(randomIndex, 1);
    }
    

    setAnswerResult(answerSet);
  }

  useEffect(() => {
    randomAnswer();
  }, [question]);

  const determineAnswer = (index) => {
    let answer = [false, false, false, false];
    answer[index] = true;
    setAnswerActive(answer);
    setChosenAnswer(answerResult[index]);
  }

  
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className={cx("read-layout-container")}>
          <h1 className={cx("read-layout-title", "text-start")}>
            Điền vào chỗ trống
          </h1>
          <div className={cx("question-container", "mb-5")}>
            <p className={cx("question")}>{question?.description}</p>
          </div>

          <div className={cx("type-answer-area-container")}>
            <ul className={cx("answer-list")}>
              {answerResult?.map((answer, index) => (
                <li onClick={() => determineAnswer(index)} className={answerActive[index] ? cx("answer-item", "position-relative", "mb-3", "answer-active") : cx("answer-item", "position-relative", "mb-3")}>
                  <div className={cx("answer-number", "m-3", "rounded-3")}>{index+1}</div>
                  {answer}
                </li>
              ))}
             
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadLayout;
