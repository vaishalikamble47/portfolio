import React from 'react'
import "./Skill.css"
import skillImage from "../../img/skill-image-2.JPG"
const Skill = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h3>My Skills</h3>
                  
                    <spane>
                        <li>React js  </li>
                        <br />
                        <li>React-Router-Dom</li>
                        <br />
                        <li>Redux</li>
                        <br />
                        <li>Redux-Toolkit</li>
                        <br />
                        <li>Javascript</li>
                        <br />
                        <li>Html</li>
                        <br />
                        <li>Css</li>
                        <br />
                        <li>Bootstrap</li>
                        <br />
                        <li>Sass</li>
                        <br />
                        <li>Git and Github</li>
                    </spane>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={skillImage} className='skill-img' alt="" />
                   
                </div>
            </div>
        </div>
    )
}

export default Skill