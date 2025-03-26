import AboutBen from "../../assets/img/ben.jpg";
import { getYearsSinceDate } from "../../helpers/dates";

const About = () => {
  const myAge = getYearsSinceDate(10, 5, 1999, new Date())

  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about-container body">
        <div className="about-img">
          <img src={AboutBen} alt="" />
        </div>

        <div>
          <h2 className="about-subtitle">I'm Ben</h2>
          <p className="about-text">
            I am a {myAge} year old full stack web developer based in Worcestershire, UK with skills in React,
            MongoDB, node.js, JavaScript, jQuery, Node.js, mySQL and more. I studied at the University of
            Birmingham Coding Boot Camp and have worked as a Web Developer for Anders Pink. I spend most of my
            down time exploring my love of film and music. My passion for these arts has led me into a love of
            physical media too, with my Blu-ray and record collections ever expanding. These passions
            occasionally seep into my work as well, which you may see on my projects page.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
