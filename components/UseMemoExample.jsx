import { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);

  const factorial = useMemo(() => {
    const calculate = (number) => {
      if (number == 0) return 1;
      return number * calculate(number - 1);
    };
    return calculate(number);
  }, [number]);

  return (
    <>
      <div>useMemo() Example</div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 1)}
        min="1"
      />
      <p>Factorial: {factorial}</p>
    </>
  );
};

export default UseMemoExample;
