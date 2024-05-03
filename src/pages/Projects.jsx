import styles from "./Projects.module.css";

import { projects } from "../utils/projects";

export default function Projects() {
  return (
    <section className="container">
      <h2 className="title-pages">
        Meus <span>Projetos</span>
      </h2>
      <div className="underline"></div>

      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.inner}>
            <div>
              <img
                src={project.img}
                alt={project.title}
                className={styles.imgProject}
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

            <button className={styles.btn} onClick={() => handleClick(project)}>
              Ver mais informações
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
