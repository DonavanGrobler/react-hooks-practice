import { useEffect, useState } from "react";

const UseStateAndEffectExample = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div>
          <h2>useState() and useEffect() </h2>
        </div>
        <h1>Timer: {seconds} seconds</h1>
      </div>
    </>
  );
};

export default UseStateAndEffectExample;
