import styles from "./Projects.module.css";

import { projects } from "../utils/projects";

import Modal from "../components/Modal";

import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectId) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className={styles.imgProject}
                />
              </a>

              <h4>{project.title}</h4>
            </div>

            <button
              className={styles.btn}
              onClick={() => openModal(project.id)}
            >
              Ver mais informações
            </button>

            {selectedProject === project.id && (
              <Modal isOpen={true} setModalOpen={closeModal}>
                <div className={styles.containerModal}>
                  <img
                    src={project.img}
                    alt={project.title}
                    className={styles.imgModal}
                  />

                  <div className={styles.infoModal}>
                    <div>
                      <h4>{project.title}</h4>

                      <p>{project.description}</p>
                    </div>

                    <div>
                      <h5>Tecnologias:</h5>
                      <p>{project.skill}</p>
                    </div>

                    <div className={styles.links}>
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Acessar repositório
                      </a>

                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Deploy
                      </a>
                    </div>
                  </div>
                </div>
              </Modal>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
