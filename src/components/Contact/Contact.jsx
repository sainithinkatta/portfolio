import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <footer 
      id="contact" 
      className={styles.container}
    >
      <div className={styles.text}>
        <h3 className={styles.sitename}>Contact</h3>
        <p className={styles.tagline}>Code. Create. Collaborate.</p>
      </div>

      <ContactForm />

      <div className={styles.socialLinks}>
        <a
          href="mailto:sainithinreddyk16@gmail.com"
          className={styles.socialIcon}
        >
          <img
            src={getImageUrl("contact/emailIcon.png")}
            alt="Email"
            className={styles.icon}
          />
        </a>
 
        <a
          href="https://linkedin.com/in/sai-nithin-katta-1401001b7/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn"
            className={styles.icon}
          />
        </a>

        <a
          href="https://github.com/sainithinkatta"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="GitHub"
            className={styles.icon}
          />
        </a>
      </div>

      <div className={styles.footerBottom}>
        <span>Copyright - All Rights Reserved</span>
      </div>
    </footer>
  );
};