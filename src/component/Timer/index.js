import { useEffect } from "react";
import { useState } from "react";
import {useTestContext} from '../../context/TestContext';
import {useNavigate, useParams} from 'react-router-dom';
import { useUserContext } from "../../context/UserContext";

export const Timer = () => {
  const [inputMinutes, setInputMinutes] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const {testDetail, calculateScoreForTest} = useTestContext();
  const {player} = useUserContext();
  const {lessonNumber} = useParams();
  const navigate = useNavigate();


  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    let timerStorage = localStorage.getItem("timer");
    if(!timerStorage){
      timerStorage = testDetail?.interval;
    }
    setInputMinutes(timerStorage);
    setRemainingTime(inputMinutes * 60);
  }, [inputMinutes])

  useEffect(() => {
    let timerId;

    if (remainingTime > 0) {
      timerId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
        localStorage.setItem("timer", remainingTime/60);
      }, 1000);
    }
    else if(remainingTime === 0 && inputMinutes !== 0) {
      navigate(`/lesson/complete/normal/${lessonNumber}`);
      calculateScoreForTest(lessonNumber, player?.id);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [remainingTime]);

  return (
    <div style={{color: "rgb(24,153,214)", fontSize: "3rem", fontWeight: "bold"}}>
      
      <p>{formatTime(remainingTime)}</p>
    </div>
  );
}