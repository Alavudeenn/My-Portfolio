import React from "react";
import "../css/footer.css";
import { FaTwitter, FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


function footer() {

    return (
        <footer className="text-center text-lg-start" id="contact">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <u><h5 className="text-uppercase ">Contact</h5></u>
                        <p className="py-2"><span><b> Mohamed Alavudeen M</b> <br></br>
                            MMA association,<br></br>
                            kennet lane,<br></br>
                            Egmore, Chennai-600008</span><br></br><br></br>
                            <b>Phone </b>: +91 9360302955<br></br>
                            <b> Email </b>: mohamedalavudeen@outlook.com,<br></br> mohamedalavudeen88@gmail.com </p>


                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <u> <h5 className="text-uppercase">OUR&nbsp;MENU</h5></u>
                        <ul className="list-unstyled mb-0 py-2" >
                            <li>
                                <a href="#home" className="b text-dark text-decoration-none" id="btm">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="b text-dark text-decoration-none" id="btm">About</a>
                            </li>
                            <li>
                                <a href="#about1" className="b text-dark text-decoration-none" id="btm">Skills</a>
                            </li>
                            <li>
                                <a href="#full" className="b text-dark text-decoration-none" id="btm">Project</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0 "><u>FOLLOW&nbsp;ME</u></h5><br></br>

                        <a className="text-dark" target="_blank" href="https://twitter.com/alavudeenn_m"><FaTwitter className="me-3 " size="35px"></FaTwitter></a>
                        <a className="text-dark" target="_blank" href="https://www.instagram.com/alavudeenn_m/"><RiInstagramFill className="me-3" size="35px"></RiInstagramFill></a>
                        <a className="text-dark" target="_blank" href="https://wa.me/919360302955"  ><FaWhatsapp className="me-3" size="35px"></FaWhatsapp></a>
                        <a className="text-dark" target="_blank" href="https://www.linkedin.com/in/mohamed-alavudeen201?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwYRyUNdYQpqOb2tLWpTjjw%3D%3D" >
                            <FaLinkedin className="me-3" size="35px" id="four"></FaLinkedin></a>


                    </div>
                    {/* <div className="col-lg-2 col-md-6 py-5 mb-4 mb-md-0 a">
                        <a href="/" ><img  src={google} /></a><br></br><br></br>
                        <a href="/" ><img src={app} /></a>
                    </div> */}
                </div>

            </div>

            <div className="text-center p-3 f">
                <hr></hr>
                <a className="text-dark text-decoration-none" href="/">2023 © Copyright Alavudeen. All Rights Reserved.</a>
            </div>

        </footer>
    );
}
export default footer;