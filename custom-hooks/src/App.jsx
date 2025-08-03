// src/App.jsx

import { useState } from "react";
import { useFetch} from "./hooks/useFetch";

function App() {

  const [currentPost,setCurrentPost]=useState(1);
  const {finaldata,loading,error} = useFetch("https://jsonplaceholder.typicode.com/posts/1"+currentPost,10);

  if(loading){
    return <div>
      Loading.....
    </div>
  }

  return (
    <div>
      <h1>Post Title:</h1>
      <button onClick={()=>setCurrentPost(1)}>1</button>
      <button onClick={()=>setCurrentPost(2)}>2</button>
      <button onClick={()=>setCurrentPost(3)}>3</button>
      <p>{JSON.stringify(finaldata)}</p>
    </div>
  );
}

export default App;
