import React from "react";
import "../css/about1.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function about1() {
    AOS.init({
        duration: 800,
        delay: 230,
    });


    return (
        <div className="all" >
            <div className="p-5">
                <h3 className="abt"> | CAREER OBJECTIVE |</h3>
                <div data-aos="fade-up">
                    <p className="row p-4" id="content">
                        Highly motivated and passionate UI/UX designer and front-end developer with a strong background in design principles and coding.
                        Committed to creating intuitive and visually appealing user experiences that align with user needs and business goals.
                        Skilled in conducting user research, analyzing feedback, and translating insights into actionable design improvements.
                        Proficient in responsive web design and staying updated with industry trends. Seeking a collaborative and dynamic environment
                        to contribute skills, creativity, and drive business success through exceptional design and development strategies.</p>
                </div>
            </div>
            <div className="exp">
                <h3 className="abt"> | EXPLORE |</h3>
            </div>

            <div className="line">
                <img src="line.png" className="p-4"></img>
            </div>

            <div className="row justify-content-evenly " id="Design">
                <div className="col-6 m-0" >
                    <div data-aos="fade-right">
                        <h4 className="p-4 m-0" id="i1"> DESIGN </h4>
                        <img src="design.png"></img>
                        <p>I can design the site based on your needs and suggestions.
                            I can also design the site from scratch and consult you during the job.</p>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row justify-content-evenly ">
                <div className="col-6 m-0">
                    <div data-aos="fade-left">
                        <h4 className="p-4 " id="i2">DEVELOPMENT</h4>
                        <img src="develop.png"></img>

                        <p>I can develop the responsive site based on your design and suggestions.
                            I can also develop the site from scratch and consult you during the job.</p>
                    </div>
                </div>
            </div>

            <br></br>
            <div className="row justify-content-evenly">

                <div className="col-6 m-0">
                    <div data-aos="fade-up">
                        <h4 className="p-4" id="i3"> MAINTENANCE</h4>
                        <img src="main.png"></img>
                        <p>I can maintain the site based on your needs and suggestions.
                            I can also design, develop and maintain the site from scratch and consult you during the job.</p>
                    </div>
                </div>

            </div>

            <div className="line">
                <img src="line.png" className="p-5"></img>
            </div>


            <div>
                <div className="p-5">
                    <h3 id="about1" className="abt"> | SKILLS |</h3>
                </div>

                <Container>
                    <h5 className="p-5">USING NOW :</h5>
                    <div className="d-flex justify-content-around">

                        <div data-aos="zoom-in" >
                            <img src="html.png"></img><br></br><br></br><div className="l1">HTML</div>
                        </div>
                        <div data-aos="zoom-in">
                            <img src="css.png"></img><br></br><br></br> <div className="l1">CSS</div>
                        </div>
                        <div data-aos="zoom-in">
                            <img src="js.png"></img><br></br><br></br> <div className="l1">JAVA SCRIPT</div>
                        </div>


                    </div>

                    <div className="c2">
                        <div className="d-flex justify-content-around ">

                            <div data-aos="zoom-in">
                                <img src="bootstrap.png"></img><br></br><br></br> <div className="l1">BOOTSTRAP</div>
                            </div>
                            <div data-aos="zoom-in">
                                <img src="react.png"></img><br></br><br></br> <div className="l1">REACT</div>
                            </div>
                            <div data-aos="zoom-in">
                                <img src="figma.png"></img><br></br><br></br><div className="l1">FIGMA </div>
                            </div>

                        </div>
                    </div>
                    <h5 className="p-5">LEARNING :</h5>
                    <div className="d-flex justify-content-around ">

                        <div data-aos="zoom-in">
                            <img src="node.png"></img><br></br><br></br> <div className="l1">NODEJS</div>
                        </div>
                        <div data-aos="zoom-in">
                            <img src="sql.png"></img><br></br><br></br> <div className="l1">MYSQL</div>
                        </div>
                    </div>
                    <h5 className="p-5">OTHERS :</h5>
                    <div className="d-flex justify-content-around ">

                        <div data-aos="zoom-in">
                            <img src="c.png"></img><br></br><br></br> <div className="l1">C</div>
                        </div>
                        <div data-aos="zoom-in">
                            <img src="java.png"></img><br></br><br></br> <div className="l1">JAVA</div>
                        </div>
                    </div>

                </Container>
                <div>
                    <img src="port.png" className="pt-5" id="port"></img>
                </div>

            </div>

        </div>
    );
}
export default about1;