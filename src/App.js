import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const calculatorResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please enter value");
    }
  };

  return (
    <div className="App">
      <div className="container-calculator">
        <Input input={input} />
        <div className="row">
          <Button setClic={addInput}>+</Button>
          <Button setClic={addInput}>-</Button>
          <Button setClic={addInput}>*</Button>
          <Button setClic={addInput}>/</Button>
        </div>
        <div className="row">
          <Button setClic={addInput}>1</Button>
          <Button setClic={addInput}>2</Button>
          <Button setClic={addInput}>3</Button>
          <Button setClic={addInput}>4</Button>
        </div>
        <div className="row">
          <Button setClic={addInput}>5</Button>
          <Button setClic={addInput}>6</Button>
          <Button setClic={addInput}>7</Button>
          <Button setClic={addInput}>8</Button>
        </div>
        <div className="row">
          <Button setClic={calculatorResult}>=</Button>
          <Button setClic={addInput}>9</Button>
          <Button setClic={addInput}>0</Button>
          <Button setClic={addInput}>.</Button>
        </div>
        <div className="row">
          <ClearButton setClear={() => setInput("")}> Clear </ClearButton>
        </div>
      </div>
      <div className="coder-info">
        Coded by 🇪🇨
        <a
          href="https://www.linkedin.com/in/maggi-bastidas-013734104/"
          target="_blank"
          className="link-info"
        >
          M.B.
        </a>
        <br />
        Open source on&nbsp;
        <a
          href="hhttps://github.com/MaggiMBR/calculator-react-app"
          className="link-info"
        >
          GitHub.&nbsp;
        </a>
      </div>
    </div>
  );
}

export default App;
