import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// eslint-disable-next-line react/prop-types
export const Timer = ({ value=1, maxValue=10 }) => {
  const [countDown, setCountDown] = useState(0);

  useEffect(()=>{
    setCountDown(value);
  },[value])

  useEffect(() => {
    if (countDown < maxValue) {
      const interval = setInterval(() => {
        setCountDown(countDown + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countDown, maxValue]);

  return (
    <div className="timer">
      <CircularProgressbar
        value={countDown}
        maxValue={maxValue}
        text={countDown}
      />
    </div>
  );
};
