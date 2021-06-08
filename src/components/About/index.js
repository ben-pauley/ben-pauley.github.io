import AboutBen from "../../assets/img/ben.jpg";

const About = () => {
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
            I am a 22 year old full stack web developer based in Worcestershire,
            UK with skills in React, MongoDB, node.js, JavaScript, jQuery,
            Node.js and mySQL. I'm currently studying at the University of
            Birmingham Coding Boot Camp and spend most of my down time exploring
            my love of film and music. My passion for these arts has led me into
            a love of physical media too, with my Blu-ray and record collections
            ever expanding. These passions occasionally seep into my work as
            well, which you may see below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
