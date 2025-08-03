import { useState } from "react";
import { usePrev } from "./hooks/use-prev";

function App(){
  const [state,setState]=useState(0);

  const prev=usePrev(state);//1=>2   //0

  return (
    <>
    <p>
      {state}
    </p>
    <button onClick={()=>{
      setState((curr)=>curr+1);}}>Click me
    </button>
    <p>The previous value was {prev}</p>
    </>
  );


}

export default App;