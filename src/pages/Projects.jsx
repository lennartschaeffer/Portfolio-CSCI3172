import "./Projects.css";
import projectsData from "../data/projects.json";
import Project from "../components/Project";

export default function Projects() {
  const projects = projectsData;
  return (
    <div className="projects-page">
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold mb-3">My Projects</h1>
          </div>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
