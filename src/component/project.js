import React, { useState } from "react";
import "../css/project.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


function Project() {
    const [showFirstSection, setShowFirstSection] = useState(false);
    const [showSecondSection, setShowSecondSection] = useState(true);

    const hideFirstSection = (event) => {
        event.preventDefault();
        setShowFirstSection(true);
        setShowSecondSection(false);
    };

    const hideSecondSection = (event) => {
        event.preventDefault();
        setShowFirstSection(false);
        setShowSecondSection(true);
    };

    return (
        <div>
            <div id="hdsdv" className="d-flex justify-content-center p-3">
                <div className="ds">
                    <button id="lik" onClick={hideSecondSection}> DESIGNED </button>
                </div>
                <div className="dv">
                    <button id="lik" onClick={hideFirstSection}> DEVELOPED </button>
                </div>

            </div>
            <div id="full">

                <div className="row d-flex">
                    <div className="overflow-auto ">
                        <center>
                            {showSecondSection && (
                                <div>
                                    <a href="https://www.figma.com/proto/J4gMYOMAFefqyotp1HpzeK/trucklah-web?node-id=0%3A1" target="_blank">
                                        <img src="tw.png" className="img-fluid p-2" id="ima"></img></a>
                                    <a href="https://www.figma.com/proto/i362wcNJfDRY6mcHTzlTE2/Civil-Landing-page?node-id=0%3A1" target="_blank">
                                        <img src="civi.png" className="img-fluid p-2" id="ima"></img></a>
                                    <a href="https://www.figma.com/proto/ux7EBWbT1wVSt48APzT3ni/ALAVUDEEN-hireyou.me?node-id=0%3A1" target="_blank">
                                        <img src="hire.png" className="img-fluid p-2" id="ima"></img></a>
                                    <a href="https://www.figma.com/proto/ZASw7hDys347PGBUD3lF9n/ALAVUDEEN-ECARE?node-id=15%3A36" target="_blank">
                                        <img src="ecare.png" className="img-fluid p-2" id="ima"></img></a>
                                    <a href="https://www.figma.com/proto/Bdt5qF5ecoKdARckCyE8wu/training?node-id=0%3A1" target="_blank">
                                        <img src="ecc.png" className="img-fluid p-2" id="ima"></img></a>
                                    <a href="https://www.figma.com/proto/RDxV7mm8JR03Zoo55zPjfH/land?node-id=0%3A1" target="_blank">
                                        <img src="ecl.png" className="img-fluid p-2" id="ima"></img></a>
                                    <a href="https://www.figma.com/proto/Y55HvvXyxFRBvuv0l7mjS0/alavudeen-driver-app?node-id=0%3A1" target="_blank">
                                        <img src="td.png" className="img-fluid p-2" id="ima"></img></a>
                                    <a href="https://www.figma.com/proto/Bl1fsYMGFUaozXXTQWhRF0/alavudeen-trucklah-user?node-id=0%3A1" target="_blank">
                                        <img src="tu.png" className="img-fluid p-2" id="ima"></img></a>
                                    <a href="https://www.figma.com/proto/ZWc87fjL2gFIiRcoCw4LqC/insurance-deen?node-id=0%3A1" target="_blank">
                                        <img src="ins.png" className="img-fluid p-2" id="ima"></img></a>
                                </div>
                            )}
                            {showFirstSection && (
                                <div>
                                    <a href="https://hireyou.me/" target="_blank">
                                        <img src="hire.png" className="img-fluid p-2" id="ima"></img></a>
                                        <a href="#!" target="_blank">
                                        <img src="ecc.png" className="img-fluid p-2" id="ima"></img></a>
                                    <a href="#!" target="_blank">
                                        <img src="ecl.png" className="img-fluid p-2" id="ima"></img></a>
                                </div>
                            )}

                        </center>

                    </div>

                </div>
            </div>
        </div>
    );
}
export default Project;