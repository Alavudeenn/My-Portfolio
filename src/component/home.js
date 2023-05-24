import React from "react";
import "../css/home.css";
import { Nav, Navbar } from 'react-bootstrap';
import { Button } from "bootstrap";
import { Outlet, Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';




function Home() {
    const onClickMailtoHandler = () => {
        //TODO: open default e-mail client e.g. via mailto link with text from (state) variable as body
    }

    <Button onClick={onClickMailtoHandler}>Send E-Mail</Button>


    return (

        <div id="home">
            <br></br><br></br>
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-12">
                        <h3 className="first">Hii, I am</h3>


                        <div className="body">
                            <div class="waviy">
                                <span id="--i:1">A</span>
                                <span id="--i:2">l</span>
                                <span id="--i:3">a</span>
                                <span id="--i:4">v</span>
                                <span id="--i:5">u</span>
                                <span id="--i:6">d</span>
                                <span id="--i:7">e</span>
                                <span id="--i:8">e</span>
                                <span id="--i:9">n</span>

                            </div>

                        </div>

                        <h3 className="content">JUNIOR DEVELOPER</h3>
                        <div className="">
                            <a href="Resume.pdf" download="resume.pdf">
                                <button className="button my-5"> Download Resume</button>
                            </a>
                        </div>
                        <div className="row">
                            <div className="col">

                            </div>

                            <div className="col">

                                <a href="mailto:mohamedalavudeen@outlook.com?body=Dear Alavudeen,

I hope this email finds you well. My name is [Your Name], and I am reaching out to you to discuss next process.

I have come across your expertise in relevant field/experience, and I am impressed with your work in Portfolio . I believe your knowledge and insights would greatly benefit for our company.

I am happy to connect with you and discuss further details. may let me know if you would be available for a phone call/meeting at your earliest convenience.

Thank you and I look forward to hearing from you soon.

Best regards,

[Your Name]
[Your Contact Information]

" target="_blank">
                                    <img className="bimg" src="mail.png"></img>

                                </a>

                            </div>
                            <div className="col">

                                <a target="_blank" href="https://github.com/Alavudeenn">
                                    <img className="bimg" src="git.png" target="_blank"></img>
                                </a>

                            </div>
                            <div className="col">

                                <a target="_blank" href="https://www.linkedin.com/in/mohamed-alavudeen201?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwYRyUNdYQpqOb2tLWpTjjw%3D%3D" open>
                                    <img className="bimg" src="link.png"></img>
                                </a>

                            </div>
                            <div className="col">

                            </div>


                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-12">
                        <div data-aos="zoom-in">
                            <img className="img-fluid" id="pic" src="picc.png" ></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}



export default Home;
