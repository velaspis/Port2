import React from 'react'
import banner from '../assets/profile.png'
import '../styles/HeroSection.css'
function HeroSection() {
  return (
    <div class="section__container header__container" id="home">
      <div class="header__image">
        <img src={banner} alt="hero" />
      </div>
      <div class="header__content">
        <h4>"Showcasing my journey, skills, & </h4>
        <h1 class="section__header">passion through my personal portfolio."</h1>
        <p>
        Welcome to my personal portfolio, where I share my professional journey, showcase my skills, and express my passion for creativity and innovation. Explore my work and experience the story behind each project.
        </p>
        <div class="header__btn">
          <button class="btn">Hire</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection