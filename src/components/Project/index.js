const Project = (props) => {
  return (
    <div className="project-img">
      <a href={props.deployed} target="_blank" rel="noreferrer noopener">
        <img src={props.img} alt={props.alt} />
        <div className="image-overlay">
          <div className="overlay-title">{props.title}</div>
          <p className="overlay-desc">
            {props.descLn1}
            <br />
            {props.descLn2}
          </p>
          <div className="repo-btn">
            <a
              href={props.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="home-social-icon"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
