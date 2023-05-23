import React, { useState } from "react";
import "../css/about.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ReadMore() {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };


    return (
        <div className="bg" id="about">
            <h2>IT EXPERIENCE</h2>
            <br></br>
            <p className="cont">
                Designed and developed responsive websites and user interfaces using HTML, CSS, JS. worked collaboratively with cross functional <br></br>
                teams to identify and prioritize project requirements and ensure time delivery, utilized agile methodologies to manage project task and sprints.<br></br>
                <span style={{ display: isReadMore ? "inline" : "none" }} id="more">
                1.Created responsible user interface website and mobile app design<br></br>
                2.Created wireframes and prototypes to test our Ideas<br></br>    
                3.Enhanced software components using object-oriented programming languages.<br></br>
                4.Analyzed user requirements to derive software design and performance requirements.<br></br>
                5.Delegated programming and testing responsibilities to one or more teams, consistently monitoring performance.<br></br>
                6.Collaborated with stakeholders to design user interfaces that provided intuitive navigation and enhanced user experience on various platforms.<br></br>
                7.Prepared reports or correspondence concerning project specifications, activities or status.</span>
                <span style={{ display: "inline" }} id="dots">

        </span>
        <a onClick={toggleReadMore} id="myBtn">
        {isReadMore ? "| Read less |" : " | Read more |"}
      </a>
            </p>

        </div>
    );

}

export default ReadMore;