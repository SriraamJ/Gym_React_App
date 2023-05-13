import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <header className="header">

    <a href="#" className="logo"> Key <span>2</span> Fitness </a>

    <div id="menu-btn" className="fas fa-bars"></div>

    <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#trainers">Trainers</a>
        <a href="#blogs">Location</a>
    </nav>

</header>
  )
}

export default Navbar