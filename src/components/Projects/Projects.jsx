import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import weatherApp from "../../assets/projects/weather_app.png";
import bmiCalculator from "../../assets/projects/bmi_calculator.png";
import employeeChurn from "../../assets/projects/employee_churn.png";
import healthMonitoring from "../../assets/projects/health_monitoring.png";
import movieMania from "../../assets/projects/movie_mania.png";
import onlineVoting from "../../assets/projects/online_voting.png";
import taskBuster from "../../assets/projects/task_buster.png";
import realTimeThreatAnalysis from "../../assets/projects/real_time_threat_ananalysis.png";
import notesApp from "../../assets/projects/notes_app.png";
import commerceNest from "../../assets/projects/commerce-nest.png";

const projectImages = {
  "Weather App": weatherApp,
  "Body Mass Index": bmiCalculator,
  "Online Voting System": onlineVoting,
  "Employee Churn Prediction": employeeChurn,
  "Health Monitoring System": healthMonitoring,
  "Task Buster": taskBuster,
  "Movie Mania": movieMania,
  "Real Time Threat Intelligence": realTimeThreatAnalysis,
  "NoteMate": notesApp,
  "CommerceNest": commerceNest
};

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.cardsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <img
                  src={projectImages[project.title] || "/api/placeholder/400/300"}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.projectSkills}>
                {project.skills.join(" | ")}
              </p>
            </div>
            <div className={styles.cardFooter}>
              <a 
                href={project.source} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className={styles.button}>View</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};