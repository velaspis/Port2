import React from 'react'
import bg from '../assets/dot-bg.png'
import tech1 from '../assets/tech1.png'
import tech2 from '../assets/tech2.png'
import tech3 from '../assets/tech3.png'
import '../styles/Skills.css'
function Skills() {
  return (
    <section class="section__container project__container" id="skills">
      <h2 class="section__header">Skills</h2>
      <p class="section__description">
        "In web development, I excel in crafting elegant and responsive websites, harnessing the power of code to bring digital visions to life."
        "My app development skills shine in creating user-friendly mobile applications that blend cutting-edge technology with intuitive design."
        "With expertise in SEO, I elevate online visibility, driving organic traffic and optimizing content for search engines to maximize digital presence."
      </p>
      <div class="skill__grid">

        <div class="skill__card">
          <img src={bg} alt="bg" class="skill__bg" />
          <img src={tech2} alt="class" />
          <div class="skill__content">
            <h4>Web-Development</h4>
            <p>MERN-Stack</p>
          </div>
        </div>

        <div class="skill__card">
          <img src={bg} alt="bg" class="skill__bg" />
          <img src={tech3} alt="bg" />
          <div class="skill__content">
            <h4>App-Development</h4>
            <p>React-Native</p>
          </div>
        </div>

        <div class="skill__card">
          <img src={bg} alt="bg" class="skill__bg" />
          <img src={tech2} alt="class" />
          <div class="skill__content">
            <h4>SEO</h4>
            <p>seo</p>
          </div>
        </div>



        <div class="skill__card">
          <img src={bg} alt="bg" class="skill__bg" />
          <img src={tech3} alt="bg" />
          <div class="skill__content">
            <h4>Digital Marketing</h4>
            <p>digital marketing</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills