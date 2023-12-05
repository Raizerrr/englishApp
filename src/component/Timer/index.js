import { useEffect } from "react";
import { useState } from "react";
import {useTestContext} from '../../context/TestContext';

export const Timer = () => {
    const [inputMinutes, setInputMinutes] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const {testDetail} = useTestContext();

  const handleInputChange = (event) => {
    setInputMinutes(parseInt(event.target.value, 10));
  };

  const startTimer = () => {
    setRemainingTime(inputMinutes * 60);
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

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
    setInputMinutes(testDetail?.interval);
    startTimer();
    let timerId;

    if (isActive && remainingTime > 0) {
      timerId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isActive, remainingTime]);

  return (
    <div >
      <h2>Countdown Timer</h2>
      <label>
        Set Time (minutes):
        <input type="number" value={inputMinutes} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={startTimer} disabled={isActive || inputMinutes <= 0}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isActive || remainingTime <= 0}>
        Stop
      </button>
      <p>Remaining Time: {formatTime(remainingTime)}</p>
    </div>
  );
}