import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import experiences from '../../data/experience.json';

export const Experience = () => {
  return (
    <section 
      id="experience"
      className={styles.container} 
    >
      <h2 className={styles.title}>
        Experience
      </h2>

      <div className={styles.content}>
        <img
          src={getImageUrl("experience/exp_icon.png")}
          alt="Icon"
          className={styles.aboutImage}
        />
      
        <ul className={styles.aboutItems}>
          {
            experiences.map((experience, index) => (
              <li key={index} className={styles.aboutItem}>
                <div className={styles.aboutItemText}>
                  <h3 className={styles.aboutItemTitle}>
                    {experience.role} - {experience.organisation}
                  </h3>

                  <ul>
                    {
                      experience.experiences.map((exp, expIndex) => (
                        <li key={expIndex}>{exp}</li>
                      ))
                    }
                  </ul>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};
