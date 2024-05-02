import { projects } from "../utils/projects";

export default function Projects() {
  return (
    <section className="projects-pages">
      <h2 className="title-pages">
        Meus <span>Projetos</span>
      </h2>
      <div className="underline"></div>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <img
              src={project.img}
              alt={project.title}
              className="img-project"
            />
            <h4>{project.title}</h4>
            <a>{project.deploy}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
