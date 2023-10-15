import React from 'react'
import bg from '../assets/dot-bg.png'
import experience from '../assets/experience.png'
import '../styles/Experience.css'
function Experience() {
  return (
    <section class="section__container about__container" id="experience">
      <div class="about__image">

        <img src={experience} alt="about" />
      </div>
      <div class="about__content">
        <h2 class="section__header">Experience</h2>
        <p class="section__description">
          "I have accumulated a wealth of experience over the years, working with diverse teams and clients, and tackling complex projects in the digital realm.""My professional journey has taken me through challenging roles, where I've honed my skills, expanded my knowledge, and delivered outstanding results."
          "Throughout my career, I've had the privilege of collaborating with industry leaders, pushing the boundaries of what's possible, and consistently delivering innovative solutions that make an impact."
        </p>
        <div class="about__grid">
          <div class="about__card">

            <div>
              <h4>Company #1</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae delectus, facere illo facilis excepturi repellendus tempore atque nostrum doloremque tenetur?
              </p>
            </div>
          </div>
          <div class="about__card">

            <div>
            <h4>Company #2</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae delectus, facere illo facilis excepturi repellendus tempore atque nostrum doloremque tenetur?
              </p>
            </div>
          </div>
          <div class="about__card">

            <div>
            <h4>Company #3</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae delectus, facere illo facilis excepturi repellendus tempore atque nostrum doloremque tenetur?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience