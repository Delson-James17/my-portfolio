import { Container } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";
import Project4 from '../assets/Project4v1.png'
import "../css/Projects.css";

const projects = [
  { id: 1, image: "/assets/project1.jpg", title: "Website Coding", stack: "HTML, CSS, JS", link: "#" },
  { id: 2, image: "/assets/project2.jpg", title: "Website Coding", stack: "HTML, CSS, JS", link: "#" },
  { id: 3, image: "/assets/project3.jpg", title: "Website Coding", stack: "HTML, CSS, JS", link: "#" },
  { id: 4, image: Project4, title: "PJL RealEstate", stack: "C#,SSMSQL,Entity Framework, CSS, JS,ASP.NET CORE,Docker and Kubernetes", link: "https://github.com/Delson-James17/RealnaRealEstate" },
  { id: 5, image: "/assets/project5.jpg", title: "Website Coding", stack: "HTML, CSS, JS", link: "#" },
  { id: 6, image: "/assets/project6.jpg", title: "Website Coding", stack: "HTML, CSS, JS", link: "#" },
];

export default function Projects() {
  return (
    <section id="portfolio" className="portfolio-section">
      <Container>
        <h2 className="portfolio-heading">PORTFOLIO</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-stack">({project.stack})</p>
                <a href={project.link} className="portfolio-link">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
