import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel, Pagination } from 'swiper/modules';
import "../Assets/CSS/Components/Process.css";

const Process = () => {
    return(
        <div className="processContainer">
            <h1>MY</h1>
            <h1>PROCESS</h1>
            <div className="processSteps">
            <section>
                <h5>01.</h5>
                <h3>MEET UP</h3>
                <p>We will schedule a meeting (either in person or remotely) and get to know each other and what your vision. This allows me to see you overall vision, what works for you.</p>
            </section>
            <section>
                <h5>02.</h5>
                <h3>DRAW UP</h3>
                <p>After 50% down deposit I will create a mock up of the designed website where we would meet again and we would go over color scheme, fonts, and another changes before I start coding!</p>
            </section>
            <section>
                <h5>03.</h5>
                <h3>DESIGN</h3>
                <p>We go through the entire design process with check-ins and approval at each step. I will give you images and videos thorugh the design to see progress just in case we need to tweak as I go. </p>
            </section>
            <section>
                <h5>04.</h5>
                <h3>TEST & RELEASE</h3>
                <p>After rounds of testinand and iteration, you will pay the remaining balance and get full access to the website with instructions to ge the final site configured and run.</p>
            </section>
            <section>
                <h5>05</h5>
                <h3>AFTER</h3>
                <p>You're sites up! I will still be there for your future support and please dont hesitate to contact if you need help!</p>
            </section>
            </div>
            <div className="processLines" >
                <span id="line01"className="line"></span> 
                <span id="line02"className="line"></span>
                <span id="line03"className="line"></span>
                <span id="line04"className="line"></span>
                <span id="line05"className="line"></span>
            </div>
            <button className="button button--shape">
                <span>CONTACT ME</span>
            </button>
            </div>
    )
}
export default Process;