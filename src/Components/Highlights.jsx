import React from "react";
import "../Assets/CSS/Components/Highlight.css"

const Highlight = () => {
    return (
        <div className="highlightContainer">
              <div class="cardTop">
      </div>      
        <div class="timeline">
         
          <h3>Timeline So Far</h3>
          <div class="box">
            
            <div class="container">
              
              <div class="lines">
                {/* when it is at a smaller media query make it go up and down and not to the side! */}
                {/* <div class="dot"></div>
                <div class="line"></div> */}
                <div class="dot"></div>
                <div class="line"></div>
                <div class="dot"></div>
                <div class="line"></div>
                <div class="dot"></div>
                <div class="line"></div>
                <div class="dot"></div>
                <div class="line"></div>
                <div class="dot"></div>
                <div class="line"></div>
              </div>
              
              <div class="card-Container">
                {/* <div class="card">
                  <h4>2017</h4>
                  <p>Graduated Highschool</p>
                </div> */}
                <div class="card">
                  <h4>2021</h4>
                  <p>BS in Biology At Washington State University</p>
                </div>
                <div class="card">
                  <h4>2022</h4>
                  <p>3-Month Fullstack Develoment</p>
                </div>
                 <div class="card">
                  <h4>2022</h4>
                  <p>Becoming a FSF Bootcamp TA Edx</p>
                </div>
                  <div class="card">
                  <h4>2022</h4>
                  <p>Started MS in Software Developemnt At Boston University</p>
                </div>
                <div class="card">
                  <h4>2023</h4>
                  <p>Working at Citadel Cyber</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default Highlight;