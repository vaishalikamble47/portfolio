import React from 'react'
import "./Intro.css"
import homeimag from "../../img/homeimg1.webp";

const Intro = () => {
    return (
        <div className="Intro container">
            <div className="row">
                <div className="col-md-7 col-sm-12 mt-4 ">
                    <div className="i-name">
                        <span >Hey! I Am</span>
                        <span> Vaishali Kamble </span>
                        <span>
                           Entry level frontend developer specialized in ReactJs ecosystem
                        </span>
                    </div>
                </div>
                <div className="col-md-5 col-sm-12 mt-4">
                    <img src={homeimag} alt="" className='home-img' />

                </div>
            </div>
        </div>



    )
}

export default Intro;