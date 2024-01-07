import React from 'react'
import "./Skill.css"
import ReactTag from "../../img/react.png"
import html from "../../img/html tag.webp"
import javascript from "../../img/javascript.png"
import css from "../../img/css3.png"
import sass from "../../img/sass.png"
const Skill = () => {
    return (
        <div className="works">
            <div className="awesome">
                <span>My Skills</span>
                <span></span>
                <spane><li>React js <br /> 1.react-router-dom<br />
                    2.redux<br />
                    2.1 redux-toolkit</li>
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

               

                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={ReactTag} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={javascript} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={html} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={css} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={sass} alt="" />
                    </div>
                </div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Skill