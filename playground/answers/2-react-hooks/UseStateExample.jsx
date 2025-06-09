import { useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  const [showParagraph, setShowParagraph] = useState(false);

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const paragraphHandler = () => {
    setShowParagraph((prevIsVisible) => !prevIsVisible);
  };

  return (
    <>
      <div>
        <h2>useState() Example</h2>
      </div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <div>
        <button onClick={paragraphHandler}>
          {showParagraph ? "My Bad" : "Click Me"}
        </button>
      </div>
      <div>
        {showParagraph && (
          <div>
            <p1>You did not see anything</p1>
          </div>
        )}
      </div>
    </>
  );
};

export default UseStateExample;
