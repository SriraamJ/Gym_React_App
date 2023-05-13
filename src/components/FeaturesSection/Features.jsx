import React from 'react'
import "./Features.css"
import BodyBuilding from "../images/bodybuilding.jpg"
import Men from "../images/mens.jpg"
import Women from "../images/women.jpg"
const Features = () => {
  return (
    <div>
        <section className="features" id="features">

<h1 className="heading"> <span>gym features</span> </h1>

<div className="box-container">

    <div className="box">
        <div className="image">
            <img src={BodyBuilding} alt=""/>
        </div>
        <div className="content">
            <h3>body building</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque.</p>
        </div>
    </div>

    <div className="box second">
        <div className="image">
            <img src={Men} alt=""/>
        </div>
        <div className="content">
            <h3>gym for men</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque.</p>
        </div>
    </div>

    <div className="box">
        <div className="image">
            <img src={Women} alt=""/>
        </div>
        <div className="content">
            <h3>gym for women</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque.</p>

        </div>
    </div>

</div>

</section>
    </div>
  )
}

export default Features