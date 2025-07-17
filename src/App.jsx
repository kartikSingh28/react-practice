import { useState } from "react"

function App() {

  return <div>
      <h1>
        <b>
          BASIC COUNTER
        </b>

      </h1>
    <Counter></Counter>
   
  </div>
}

function Counter(){//component

  const [count,setCount]=useState(0);//count is a state variable whose value get re rendered

  function increaseCount(){
    setCount(count+1);
  }

  function decreaseCount(){
    setCount(count-1);
  }

  function resetCount(){
    setCount(0);
  }
  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease count</button>
    <button onClick={resetCount}>Reset count</button>
  </div>
}
export default App
