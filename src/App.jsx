import { useState } from "react";
import { Test } from "../components";
import BasicPropComponent from "../components/BasicPropComponent";
import UseCallbackExample from "../components/UseCallbackExample";
import UseEffectExample from "../components/UseEffectExample";
import UseMemoExample from "../components/UseMemoExample";
import UseReducerExample from "../components/UseReducerExample";
import UseStateAndEffectExample from "../components/UseStateAndEffectExample";
import UseStateExample from "../components/UseStateExample";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Donavan", surname: "Grobler" },
    { name: "Anica", surname: "Grobler" },
    { name: "Caitlyn", surname: "Grobler" },
    { name: "Kobus", surname: "Grobler" },
    { name: "Teresa", surname: "Grobler" },
  ]);
  const [input, setInput] = useState("");

  const inputHandler = () => {
    setInput(value);
  };

  return (
    <>
      <Test />
      <UseStateExample />
      <UseStateAndEffectExample />
      <UseEffectExample />
      <UseMemoExample />
      <BasicPropComponent users={users} />
      <UseReducerExample input={input} />
      <UseReducerExample />
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button onClick={inputHandler}>Submit</button>
        <h1>{input}</h1>
      </form>
      <UseCallbackExample />
    </>
  );
};

export default App;
