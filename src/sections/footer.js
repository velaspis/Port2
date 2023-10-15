import React from 'react'
import logo from '../assets/logo.png'
import '../styles/Footer.css'
function Footer() {
  return (
    <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="footer__logo">
            <a href="#"><img src={logo} alt="logo" />Madhav-Singh</a>
          </div>
          <p>
          Welcome to my personal portfolio, where I share my professional journey, showcase my skills, and express my passion for creativity and innovation. Explore my work and experience the story behind each project.
          </p>
          <div class="footer__socials">
            <a href="#"><i class="ri-facebook-fill"></i></a>
            <a href="#"><i class="ri-instagram-line"></i></a>
            <a href="#"><i class="ri-twitter-fill"></i></a>
          </div>
        </div>
        <div class="footer__col">
          <h4>About Me</h4>
          <div class="footer__links">
            <a href="#">Experience</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
          </div>
        </div>
        <div class="footer__col">
          <h4>Contact</h4>
          <div class="footer__links">
            <a href="#">Phone</a>
            <a href="#">Email</a>
          </div>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © Madhav-Singh. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer