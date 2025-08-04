import { useEffect,useRef } from "react";

export const usePrev=(value)=>{
  const ref=useRef();//let to strore a value nd whwn the value changes it did not re render

  useEffect(()=>{
    ref.current=value;//2
  },[value]);

  return ref.current//1

  //return first effect get called later
} 