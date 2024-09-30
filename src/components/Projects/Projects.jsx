import styles from "./Projects.module.css";
import projects from '../../data/projects.json';

export const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.cardsContainer}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <p className={styles.projectSkills}>
                            {project.skills.join(' | ')}
                        </p>
                        <a href={project.source} target="_blank" rel="noopener noreferrer">
                            <button className={styles.button}>View</button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};