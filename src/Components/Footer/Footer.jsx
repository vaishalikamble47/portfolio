import React from "react";
import "./Footer.css";
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
           
            <div className="f-content">
                <span className="mt-3 text-white">vaishalikamble4799@gmail.com</span>
                <div className="f-icons mb-2">
                   
                    <span style={{cursor:"pointer"}} onClick={githubfun}>
                    <Github color="white" size={"2rem"} />
                    </span>
                    <span style={{cursor:"pointer"}} onClick={linkdin}>
                    <Linkdin
                     color="white" size={"2rem"} />
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Footer;
