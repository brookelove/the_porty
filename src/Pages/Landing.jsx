import React, {useEffect, useRef, useState} from "react";
import "../Assets/CSS/Pages/Landing.css";
import { useNavigate } from "react-router";

const Landing = () => {
    let ref = useRef(null);
    let words = ["Passion", "Confidence", "2021", "Biology", "2022", "Developer", "Designer",];
    const navigate = useNavigate()
    const [displayTyped, setDisplayTyped] = useState("Passion");
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        function updateWord() {
          setDisplayTyped(words[currentWord]);
          if (currentWord < 7) {
            setCurrentWord(currentWord + 1);
          } else {
            setCurrentWord(0);
            navigate("/home");
          }
        }
        setTimeout(updateWord, 1500);
      }, [currentWord]);

    return (
        <div className= "wordsContainer">
        {/* <h1>Landing</h1> */}
        <h1 id="wordPerMin">{displayTyped}</h1>
        </div>
    )
}


export default Landing;