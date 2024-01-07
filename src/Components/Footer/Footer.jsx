import React from "react";
import "./Footer.css";

import Wave from "../../img/wave.png";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";




const Footer = () => {
    const githubfun=()=>{
        const link = document.createElement('a');
    link.href = 'https://github.com/vaishalikamble47';
    link.target = "_blank";
    link.click();
    }
    const linkdin=()=>{
        const link = document.createElement('a');
    link.href = 'https://www.linkedin.com/in/vaishali-kamble-6395bb288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
    link.target = "_blank";
    link.click();
    }
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%", height:"270px" }} />
            <div className="f-content">
                <span>vaishalikamble4799@gmail.com</span>
                <div className="f-icons">
                    {/* <a href="https://github.com/vaishalikamble47" target="_blank">
                        <Linkdin color="white" size={"3rem"} />
                    </a> */}
                    <span style={{cursor:"pointer"}} onClick={githubfun}>
                    <Github color="white" size={"3rem"} />
                    </span>
                    <span style={{cursor:"pointer"}} onClick={linkdin}>
                    <Linkdin
                     color="white" size={"3rem"} />
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Footer;
