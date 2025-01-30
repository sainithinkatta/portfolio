import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import experiences from '../../data/experience.json';
import { getImageUrl } from "../../utils";
import styles from './Experience.module.css';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "rgba(12, 12, 12, 0.6)",
      color: "var(--color-text)",
      borderRadius: "15px"
    }}
    contentArrowStyle={{
      borderRight: "7px solid rgba(12, 12, 12, 0.6)"
    }}
    date={experience.date}
    iconStyle={{ 
      background: "#fff",
      boxShadow: "0 0 0 4px var(--color-text)"
    }}
    icon={
      <div className={styles.iconWrapper}>
        <img
          src={getImageUrl(experience.iconPath)}
          alt={experience.company_name}
          className={styles.icon}
        />
      </div>
    }
  >
    <div>
      <h3 className={styles.title}>{experience.title}</h3>
      <p className={styles.company}>{experience.company_name}</p>
    </div>

    <ul className={styles.pointsList}>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className={styles.point}
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <section className={styles.section}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={styles.container}
      >
        <motion.div
          variants={{
            hidden: { y: -50, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                duration: 1.25
              }
            }
          }}
          className={styles.titleWrapper}
        >
          <h2 id="experience" className={styles.sectionTitle}>
            Experience
          </h2>
        </motion.div>

        <div className={styles.timelineWrapper}>
          <VerticalTimeline animate={true}>
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={`experience-${index}`} 
                experience={experience} 
              />
            ))}
          </VerticalTimeline>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;