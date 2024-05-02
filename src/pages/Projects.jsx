import { projects } from "../utils/projects";

export default function Projects() {
  return (
    <section className="container">
      <h2 className="title-pages">
        Meus <span>Projetos</span>
      </h2>
      <div className="underline"></div>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="inner">
            <div className="image">
              <img
                src={project.img}
                alt={project.title}
                className="img-project"
              />

              <h4>{project.title}</h4>

              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site do Projeto
              </a>
            </div>

            <button className="btn" onClick={() => handleClick(project)}>
              Ver mais informações
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
