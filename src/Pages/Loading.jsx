import React, {useEffect, useState} from "react";
import "../Assets/CSS/Pages/Landing.css";
import { useNavigate } from "react-router";

const Loading = () => {
    
    const navigate = useNavigate()
    const [displayTyped, setDisplayTyped] = useState("Passion");
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
      let words = ["Passion", "Confidence", "2021", "Biology", "2022", "Developer", "Designer", "HELLO WORLD.", "HELLO WORLD..", "HELLO WORLD..."];
        function updateWord() {
          setDisplayTyped(words[currentWord]);
          if (currentWord < words.length) {
            setCurrentWord(currentWord + 1);
          } else {
            setCurrentWord(0);
            navigate("/home");
          }
        }
        setTimeout(updateWord, 1000);
      }, [currentWord,displayTyped,navigate]);

    return (
        <div className= "wordsContainer">
          <h1 className="dotted_border" id="wordPerMin">{displayTyped}</h1>
        </div>
    )
}


export default Loading;