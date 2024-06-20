import React, { useEffect, useRef } from "react";
import "../Assets/CSS/Components/Highlight.css";


const Highlight = () => {
  const containerRef = useRef(null);

  useEffect(()=> {
    const stickyDiv = containerRef.current;
    console.log(containerRef)
    const transform = (section) => {
      const offsetTop = section.parentElement.offsetTop; // gets the parent container's offset top
      const scrollSection = section.querySelector('.scroll_section');
      const parentHeight = section.parentElement.offsetHeight;
      const maxScroll = parentHeight - window.innerHeight; // max vertical scroll distance
      const maxHorizontalScroll = scrollSection.scrollWidth - window.innerWidth; // max horizontal scroll distance

      const scrollProgress = (window.scrollY - offsetTop) / maxScroll; // progress as a fraction
      const horizontalScroll = Math.min(Math.max(scrollProgress * maxHorizontalScroll, 0), maxHorizontalScroll); // constrain scroll

      scrollSection.style.transform = `translate3d(${-horizontalScroll}px, 0, 0)`;
    }

    const handleScroll = () => {
      transform(stickyDiv);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

},[])


  return (
    <div className="highlight-container">
      <div className="timeline">
        <h3>So Far I've ...</h3>
        <div className="sticky_parent">
        <div className="box sticky" ref={containerRef}>
          <div className="card-container scroll_section">
            <div  className="card">
              <p>BS in Biology At Washington State University</p>
              <h4>2021</h4>
            </div>
            <div className="card">
              <p>3-Month Fullstack Development</p>
              <h4>2022</h4>
            </div>
            <div className="card">
              <p>Becoming a FSF Bootcamp TA Edx</p>
              <h4>2022</h4>
            </div>
            <div className="card">
              <p>Conducted Multiple Personal Contracts</p>
              <h4>2022</h4>
            </div>
            <div className="card">
              <p>Started MS in Software Development At Boston University</p>
              <h4>2022</h4>
            </div>
            <div className="card">
              <p>Working at Citadel Cyber</p>
              <h4>2023</h4>
            </div>
            <div className="card">
              <p>Working at GRWNDED Startup</p>
              <h4>2024</h4>
            </div>
            <div  className="card">
              <p>MS in Software Development At Boston University</p>
              <h4>2024</h4>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
