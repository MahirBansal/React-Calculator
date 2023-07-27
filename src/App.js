
import './App.css';
import { useState, useRef } from "react";


function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    // minus
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    // times
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    // divide
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    // resetInput function
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    // resetResult function
    e.preventDefault();
    setResult((preVal) => preVal * 0);
  }

  return (
    <div className="App">
      <div>
        <h1>My Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          
          {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        
        <button onClick={minus}>subtract</button>
        
        <button onClick={times}>multiply</button>
        
        <button onClick={divide}>divide</button>
        
        <button onClick={resetInput}>reset input</button>
        
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App; 
