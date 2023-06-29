import React, {useEffect, useRef, useState} from "react";
import "../Assets/CSS/Pages/Landing.css";
import { useNavigate } from "react-router";

const Landing = () => {
    let ref = useRef(null);
    let words = ["passion", "confidencee", "2021", "biology", "2022", "computers"];
    const navigate = useNavigate()
    const [index, setIndex] = useState(0);
    const [wordItem, setWordItem] = useState(words[0]);

    // useEffect(()=> {
        // const element = ref.current;
    //     const timerId = setInterval(
    //         () => {
    //             setIndex((i) => (i + 1) % words.length)},
    //         1000
            
    //       );
    //       return () => clearInterval(timerId);

    // },[])

    // useEffect(()=> {
    //     let wordCount = 0;
    //     let showWords = setInterval(()=> {
    //         if (words[wordCount] === undefined) {
    //             clearInterval(showWords);
    //             navigate("/home");
    //         } else {
    //             setIndex(wordCount);
    //             wordCount++;
    //         }
    //         // for(let i = 0; i < words.length; i++){
    //         //     setIndex(i);
    //         // }
            
    //     },2000)
    // })
    // useEffect(() => {
    //     setWordItem(words[index]);
    //   },[words])
    useEffect(() => {
  
        const interval = setInterval(() => {
            if (index === words.length){
                clearInterval(interval);
                setIndex(0);
                navigate("/home");
            } else {
                setIndex(index + 1);
                setWordItem(words[index]);
                // console.log(index);
            }
            
        }, 1000);
        
        // return () => clearInterval(interval);
    }, [index]);
    // navigate("/home")
    return (
        <>
        <h1>Landing</h1>
        <p ref={ref} id="wordPerMin">{wordItem}</p>
        </>
    )
}


export default Landing;