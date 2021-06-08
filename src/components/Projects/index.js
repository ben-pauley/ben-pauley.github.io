import Project from "../Project";
import MouldyPotatoesImg from "../../assets/img/mouldyPotatoes.png";
import PopcornpediaImg from "../../assets/img/popcornpedia.png";
import NoteTakerImg from "../../assets/img/noteTaker.png";
import WeatherDashboardImg from "../../assets/img/weatherDashboard.png";
import BookSearchImg from "../../assets/img/bookSearch.png";
import TeamProfileGenImg from "../../assets/img/teamProfileGen.png";

const projectInfo = [
  {
    id: 1,
    repo: "https://github.com/ben-pauley/mouldy-potatoes",
    deployed: "https://mouldy-potatoes.herokuapp.com/",
    img: MouldyPotatoesImg,
    alt: "mouldy potatoes",
    title: "Mouldy Potatoes",
    descLn1: "Full-Stack Film Review",
    descLn2: "Group Project",
  },
  {
    id: 2,
    repo: "https://github.com/ben-pauley/Popcornpedia-Project",
    deployed: "https://ben-pauley.github.io/Popcornpedia-Project/",
    img: PopcornpediaImg,
    alt: "popcornpedia",
    title: "Popcornpedia",
    descLn1: "API-Based Film Search",
    descLn2: "Group Project",
  },
  {
    id: 3,
    repo: "https://github.com/ben-pauley/express-note-taker",
    deployed: "https://bjp-note-taker.herokuapp.com/",
    img: NoteTakerImg,
    alt: "note taker",
    title: "Note Taker",
    descLn1: "Full-Stack Express Application",
    descLn2: "",
  },
  {
    id: 4,
    repo: "https://github.com/ben-pauley/weather-dashboard",
    deployed: "https://ben-pauley.github.io/weather-dashboard",
    img: WeatherDashboardImg,
    alt: "weather dashboard",
    title: "Weather Dashboard",
    descLn1: "Front-End API-Based Application",
    descLn2: "",
  },
  {
    id: 5,
    repo: "https://github.com/ben-pauley/google-books-search",
    deployed: "https://bjp-book-search.herokuapp.com/search",
    img: BookSearchImg,
    alt: "book search",
    title: "Google Books Search",
    descLn1: "Full-Stack React Application",
    descLn2: "",
  },
  {
    id: 6,
    repo: "https://github.com/ben-pauley/team-profile-generator",
    deployed: "https://github.com/ben-pauley/team-profile-generator",
    img: TeamProfileGenImg,
    alt: "team profile generator",
    title: "Team Profile Generator",
    descLn1: "Back-End CMS Application",
    descLn2: "",
  },
];

const projectComponents = projectInfo.map((x) => (
  <Project
    repo={x.repo}
    deployed={x.deployed}
    img={x.img}
    alt={x.alt}
    title={x.title}
    descLn1={x.descLn1}
    descLn2={x.descLn2}
  />
));

const Projects = () => {
  return (
    <section className="project section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-container body">{projectComponents}</div>
    </section>
  );
};

export default Projects;
