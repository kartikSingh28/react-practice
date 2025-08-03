import { useEffect, useState } from "react";



export function useFetch(url,retryTime){
    const [finaldata,setFinalData] = useState({});
    console.log(url);

    const [loading,setloading]=useState(true);

    async function getDetails() {
        setloading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setloading(false);
    } 

    useEffect(()=>{
        getDetails();
    },[url])

    useEffect(()=>{
        setInterval(getDetails,retryTime*1000)
    },[])

    return {
        finaldata,loading
    };
}
