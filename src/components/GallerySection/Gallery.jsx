import React from 'react'
import "./Gallery.css"
import Gym from "../images/gym-1.avif"
const Gallery = () => 
{
  return (
    <div>
        <section className="gallery" id="gallery">

<h1 className="heading"> <span>Gallery</span> </h1>

<div className="swiper gallery-slider">

    <div className="swiper-wrapper">

        <div className="swiper-slide slide">
            <div className="image">
                <img src={Gym} alt=""/>
            </div>
            <div className="content">
                <div className="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st may, 2021</a> </div>
                <h3>fitness is not about being better than someone else</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>
        
        <div className="swiper-slide slide">
            <div className="image">
                <img src={Gym} alt=""/>
            </div>
            <div className="content">
                <div className="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st may, 2021</a> </div>
                <h3>fitness is not about being better than someone else</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <img src={Gym} alt=""/>
            </div>
            <div className="content">
                <div className="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st may, 2021</a> </div>
                <h3>fitness is not about being better than someone else</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <img src={Gym} alt=""/>
            </div>
            <div className="content">
                <div className="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st may, 2021</a> </div>
                <h3>fitness is not about being better than someone else</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <img src={Gym} alt=""/>
            </div>
            <div className="content">
                <div className="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st may, 2021</a> </div>
                <h3>fitness is not about being better than someone else</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

    </div>

    <div className="swiper-pagination"></div>

</div>

</section>
    </div>
  )
}

export default Gallery