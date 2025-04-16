import styles from './Skills.module.css';

export const Skills = () => {
  const skills = [
    { icon: 'bi bi-filetype-html', label: 'HTML, CSS' },
    { icon: 'bi bi-filetype-js', label: 'JavaScript' },
    { icon: 'bi bi-file-earmark', label: 'Vue.js' },
    { icon: 'bi bi-filetype-jsx', label: 'React.js' },
    { icon: 'bi bi-shield-check', label: 'AngularJs' },
    { icon: 'bi bi-code-slash', label: 'Spring Boot' },
    { icon: 'bi bi-terminal', label: 'Node.js' }, 
    { icon: 'bi bi-database', label: 'PostgreSQL' }, 
    { icon: 'bi bi-database', label: 'MongoDB' },
    { icon: 'bi bi-bootstrap', label: 'Bootstrap' },
    { icon: 'bi bi-grid', label: 'Tailwind CSS' },
    { icon: 'bi bi-gear', label: 'Jest' },
    { icon: 'bi bi-play-circle', label: 'Playwright' },
    { icon: 'bi bi-amazon', label: 'AWS' },
    { icon: 'bi bi-cloud-arrow-up', label: 'Azure' },
    { icon: 'bi bi-cloud-sun', label: 'GCP' },
    { icon: 'bi bi-diagram-3', label: 'Jenkins' },
    { icon: 'bi bi-git', label: 'Git' }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.icon}>
              <i className={skill.icon}></i>
            </div>
            <div className={styles.label}>{skill.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};