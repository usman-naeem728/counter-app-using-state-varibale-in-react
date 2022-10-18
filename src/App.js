import './App.css';
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const [islit, setLit] = useState(true);


  return (
    <div className="App">
      <div className={(islit) ? "light" : "dark"}>

        <div className='btn'>
          <button onClick={() => {
            setLit(!islit)
          }} >
            {(islit) ? "light" : "Dark"}
          </button>
        </div>

        <div className='Counter'>
          <h1>{count}</h1>
        </div>
        <div className='btnCounter'>

          <button className='btn1' onClick={() => {
            setCount(count + 1)
          }}>+</button>

          <button className='btn2' onClick={() => {
            setCount(count - 1)
          }}>-</button>

        </div>
      </div>
    </div>
  );
}

export default App;
