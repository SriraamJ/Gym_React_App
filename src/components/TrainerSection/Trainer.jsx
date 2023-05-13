import React from 'react'
import gold from "../images/goldberg.jpg"
import cena from "../images/johncena.jpg"
import roman from "../images/roman.jpg"
import brock from "../images/brock.jpg"
import "./Trainer.css"
const Trainer = () => {
  return (
    <div>
        <section className="trainers" id="trainers">

<h1 className="heading"> <span>expert trainers</span> </h1>

<div className="box-container">

    <div className="box">
        <img src={brock} alt=""/>
        <div className="content">
            <span>expert trainer</span>
            <h3>Brock Lesnar</h3>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
            </div>
        </div>
    </div>

    <div className="box">
        <img src={gold} alt=""/>
        <div className="content">
            <span>expert trainer</span>
            <h3>Gold Berg</h3>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
            </div>
        </div>
    </div>

    <div className="box">
        <img src={cena} alt=""/>
        <div className="content">
            <span>expert trainer</span>
            <h3>John Cena</h3>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
            </div>
        </div>
    </div>

    <div className="box">
        <img src={roman} alt=""/>
        <div className="content">
            <span>expert trainer</span>
            <h3>Roman Reigns</h3>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
            </div>
        </div>
    </div>

</div>

</section>
    </div>
  )
}

export default Trainer